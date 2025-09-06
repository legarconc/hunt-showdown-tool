class HuntCompanion {
    constructor() {
        this.currentScreen = 'loadout';
        this.currentLoadout = {
            primary: null,
            primaryVariants: [],
            secondary: null,
            secondaryVariants: [],
            tools: [null, null, null, null],
            consumables: [null, null, null, null]
        };
        this.maxBudget = 2000;
        this.playerLevel = 100;
        
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupLoadoutBuilder();
        this.setupWeaponDatabase();
        this.setupSavedBuilds();
        this.setupModals();
        this.loadStoredData();
        this.updateBudget();
    }

    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const screen = btn.dataset.screen;
                this.switchScreen(screen);
            });
        });
    }

    switchScreen(screen) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        
        document.getElementById(`${screen}-screen`).classList.add('active');
        document.querySelector(`[data-screen="${screen}"]`).classList.add('active');
        
        this.currentScreen = screen;
        
        if (screen === 'weapons') {
            this.renderWeaponDatabase();
        } else if (screen === 'saved') {
            this.renderSavedBuilds();
        }
    }

    setupLoadoutBuilder() {
        const slotButtons = document.querySelectorAll('.slot-button');
        slotButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const slot = btn.closest('[data-slot]').dataset.slot;
                this.openItemSelection(slot);
            });
        });

        document.getElementById('clear-loadout').addEventListener('click', () => {
            this.clearLoadout();
        });

        document.getElementById('save-loadout').addEventListener('click', () => {
            this.openSaveModal();
        });
    }

    openItemSelection(slot) {
        const modal = document.getElementById('item-modal');
        const title = document.getElementById('modal-title');
        const itemList = document.getElementById('modal-item-list');
        const search = document.getElementById('item-search');

        let items = [];
        let categoryTitle = '';

        if (slot === 'primary' || slot === 'secondary') {
            items = this.getAllWeapons();
            categoryTitle = `Select ${slot.charAt(0).toUpperCase() + slot.slice(1)} Weapon`;
        } else if (slot.startsWith('tool')) {
            items = this.getAllTools();
            categoryTitle = 'Select Tool';
        } else if (slot.startsWith('consumable')) {
            items = this.getAllConsumables();
            categoryTitle = 'Select Consumable';
        }

        title.textContent = categoryTitle;
        search.value = '';
        
        this.currentSelectionSlot = slot;
        this.renderItemList(items, itemList);
        
        modal.classList.add('show');
    }

    getAllWeapons() {
        const weapons = [];
        Object.values(WEAPONS).forEach(category => {
            category.forEach(weapon => {
                weapons.push({ ...weapon, type: 'weapon' });
                if (weapon.variants) {
                    weapon.variants.forEach(variant => {
                        weapons.push({ ...variant, type: 'weapon', parent: weapon.id });
                    });
                }
            });
        });
        return weapons.filter(w => w.unlock_level <= this.playerLevel);
    }

    getAllTools() {
        const tools = [];
        Object.values(TOOLS).forEach(category => {
            category.forEach(tool => {
                tools.push({ ...tool, type: 'tool' });
            });
        });
        return tools.filter(t => t.unlock_level <= this.playerLevel);
    }

    getAllConsumables() {
        const consumables = [];
        Object.values(CONSUMABLES).forEach(category => {
            category.forEach(consumable => {
                consumables.push({ ...consumable, type: 'consumable' });
            });
        });
        return consumables.filter(c => c.unlock_level <= this.playerLevel);
    }

    renderItemList(items, container) {
        container.innerHTML = '';
        
        if (items.length === 0) {
            container.innerHTML = '<div class="empty-state"><h3>No items available</h3><p>Check your level requirements</p></div>';
            return;
        }

        items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'item-item';
            itemEl.innerHTML = `
                <h3>${item.name}</h3>
                <div class="item-stats">
                    ${item.damage ? `<span class="stat">DMG: ${item.damage}</span>` : ''}
                    ${item.range ? `<span class="stat">Range: ${item.range}m</span>` : ''}
                    ${item.ammo ? `<span class="stat">${item.ammo}</span>` : ''}
                    ${item.slots ? `<span class="stat">${item.slots} slots</span>` : ''}
                    <span class="stat">Lv.${item.unlock_level}</span>
                </div>
                <div class="item-description">${item.description || ''}</div>
                <div class="item-price">$${item.price}</div>
            `;
            
            itemEl.addEventListener('click', () => {
                this.selectItem(item);
                this.closeModal();
            });
            
            container.appendChild(itemEl);
        });
    }

    selectItem(item) {
        const slot = this.currentSelectionSlot;
        
        if (slot === 'primary' || slot === 'secondary') {
            this.currentLoadout[slot] = item;
            this.currentLoadout[`${slot}Variants`] = [];
        } else if (slot.startsWith('tool')) {
            const index = parseInt(slot.replace('tool', '')) - 1;
            this.currentLoadout.tools[index] = item;
        } else if (slot.startsWith('consumable')) {
            const index = parseInt(slot.replace('consumable', '')) - 1;
            this.currentLoadout.consumables[index] = item;
        }
        
        this.updateLoadoutDisplay();
        this.updateBudget();
    }

    updateLoadoutDisplay() {
        this.updateWeaponSlot('primary');
        this.updateWeaponSlot('secondary');
        
        for (let i = 1; i <= 4; i++) {
            this.updateToolSlot(i);
            this.updateConsumableSlot(i);
        }
    }

    updateWeaponSlot(slot) {
        const button = document.getElementById(`${slot}-slot`);
        const weapon = this.currentLoadout[slot];
        
        if (weapon) {
            button.classList.add('filled');
            button.querySelector('.slot-placeholder').textContent = weapon.name;
            button.querySelector('.slot-price').textContent = `$${weapon.price}`;
        } else {
            button.classList.remove('filled');
            button.querySelector('.slot-placeholder').textContent = `Select ${slot.charAt(0).toUpperCase() + slot.slice(1)}`;
            button.querySelector('.slot-price').textContent = '';
        }
    }

    updateToolSlot(index) {
        const button = document.getElementById(`tool${index}-slot`);
        const tool = this.currentLoadout.tools[index - 1];
        
        if (tool) {
            button.classList.add('filled');
            button.querySelector('.slot-placeholder').textContent = tool.name;
            button.querySelector('.slot-price').textContent = `$${tool.price}`;
        } else {
            button.classList.remove('filled');
            button.querySelector('.slot-placeholder').textContent = `Tool ${index}`;
            button.querySelector('.slot-price').textContent = '';
        }
    }

    updateConsumableSlot(index) {
        const button = document.getElementById(`consumable${index}-slot`);
        const consumable = this.currentLoadout.consumables[index - 1];
        
        if (consumable) {
            button.classList.add('filled');
            button.querySelector('.slot-placeholder').textContent = consumable.name;
            button.querySelector('.slot-price').textContent = `$${consumable.price}`;
        } else {
            button.classList.remove('filled');
            button.querySelector('.slot-placeholder').textContent = `Consumable ${index}`;
            button.querySelector('.slot-price').textContent = '';
        }
    }

    calculateBudget() {
        let total = 0;
        
        if (this.currentLoadout.primary) total += this.currentLoadout.primary.price;
        if (this.currentLoadout.secondary) total += this.currentLoadout.secondary.price;
        
        this.currentLoadout.tools.forEach(tool => {
            if (tool) total += tool.price;
        });
        
        this.currentLoadout.consumables.forEach(consumable => {
            if (consumable) total += consumable.price;
        });
        
        return total;
    }

    updateBudget() {
        const current = this.calculateBudget();
        const budgetEl = document.getElementById('current-budget');
        budgetEl.textContent = `$${current}`;
        
        if (current > this.maxBudget) {
            budgetEl.style.color = 'var(--danger)';
        } else {
            budgetEl.style.color = 'var(--accent)';
        }
    }

    clearLoadout() {
        this.currentLoadout = {
            primary: null,
            primaryVariants: [],
            secondary: null,
            secondaryVariants: [],
            tools: [null, null, null, null],
            consumables: [null, null, null, null]
        };
        
        this.updateLoadoutDisplay();
        this.updateBudget();
    }

    setupWeaponDatabase() {
        const categoryFilter = document.getElementById('weapon-category');
        const prestigeFilter = document.getElementById('prestige-filter');
        
        categoryFilter.addEventListener('change', () => {
            this.renderWeaponDatabase();
        });
        
        prestigeFilter.addEventListener('change', () => {
            this.renderWeaponDatabase();
        });
    }

    renderWeaponDatabase() {
        const container = document.getElementById('weapon-list');
        const categoryFilter = document.getElementById('weapon-category').value;
        const prestigeFilter = document.getElementById('prestige-filter').value;
        
        let weapons = this.getAllWeapons();
        
        if (categoryFilter !== 'all') {
            weapons = weapons.filter(w => w.category === categoryFilter);
        }
        
        if (prestigeFilter === 'unlocked') {
            weapons = weapons.filter(w => w.unlock_level <= this.playerLevel);
        }
        
        container.innerHTML = '';
        
        weapons.forEach(weapon => {
            const weaponEl = document.createElement('div');
            weaponEl.className = 'weapon-item';
            weaponEl.innerHTML = `
                <h3>${weapon.name}</h3>
                <div class="weapon-stats">
                    <span class="stat">DMG: ${weapon.damage}</span>
                    <span class="stat">Range: ${weapon.range}m</span>
                    <span class="stat">${weapon.ammo}</span>
                    <span class="stat">${weapon.slots} slots</span>
                    <span class="stat">Lv.${weapon.unlock_level}</span>
                </div>
                <div class="weapon-price">$${weapon.price}</div>
            `;
            container.appendChild(weaponEl);
        });
    }

    setupSavedBuilds() {
        
    }

    renderSavedBuilds() {
        const container = document.getElementById('saved-builds');
        const savedBuilds = this.getSavedBuilds();
        
        container.innerHTML = '';
        
        if (savedBuilds.length === 0) {
            container.innerHTML = '<div class="empty-state"><h3>No saved builds</h3><p>Create and save your first loadout</p></div>';
            return;
        }
        
        savedBuilds.forEach((build, index) => {
            const buildEl = document.createElement('div');
            buildEl.className = 'saved-item';
            buildEl.innerHTML = `
                <h3>${build.name}</h3>
                <div class="build-summary">
                    ${build.primary ? build.primary.name : 'No Primary'} | 
                    ${build.secondary ? build.secondary.name : 'No Secondary'}
                </div>
                <div class="build-budget">$${this.calculateBuildBudget(build)} / $${this.maxBudget}</div>
            `;
            
            buildEl.addEventListener('click', () => {
                this.loadBuild(build);
                this.switchScreen('loadout');
            });
            
            container.appendChild(buildEl);
        });
    }

    calculateBuildBudget(build) {
        let total = 0;
        if (build.primary) total += build.primary.price;
        if (build.secondary) total += build.secondary.price;
        build.tools.forEach(tool => { if (tool) total += tool.price; });
        build.consumables.forEach(consumable => { if (consumable) total += consumable.price; });
        return total;
    }

    loadBuild(build) {
        this.currentLoadout = JSON.parse(JSON.stringify(build));
        this.updateLoadoutDisplay();
        this.updateBudget();
    }

    setupModals() {
        const itemModal = document.getElementById('item-modal');
        const saveModal = document.getElementById('save-modal');
        
        document.getElementById('close-modal').addEventListener('click', () => {
            this.closeModal();
        });
        
        document.getElementById('close-save-modal').addEventListener('click', () => {
            this.closeSaveModal();
        });
        
        document.getElementById('cancel-save').addEventListener('click', () => {
            this.closeSaveModal();
        });
        
        document.getElementById('confirm-save').addEventListener('click', () => {
            this.saveLoadout();
        });
        
        const search = document.getElementById('item-search');
        search.addEventListener('input', () => {
            this.filterItems(search.value);
        });
        
        itemModal.addEventListener('click', (e) => {
            if (e.target === itemModal) this.closeModal();
        });
        
        saveModal.addEventListener('click', (e) => {
            if (e.target === saveModal) this.closeSaveModal();
        });
    }

    filterItems(searchTerm) {
        const items = document.querySelectorAll('.item-item');
        const term = searchTerm.toLowerCase();
        
        items.forEach(item => {
            const name = item.querySelector('h3').textContent.toLowerCase();
            if (name.includes(term)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    closeModal() {
        document.getElementById('item-modal').classList.remove('show');
    }

    openSaveModal() {
        const modal = document.getElementById('save-modal');
        const nameInput = document.getElementById('loadout-name');
        nameInput.value = '';
        modal.classList.add('show');
        nameInput.focus();
    }

    closeSaveModal() {
        document.getElementById('save-modal').classList.remove('show');
    }

    saveLoadout() {
        const name = document.getElementById('loadout-name').value.trim();
        if (!name) return;
        
        const builds = this.getSavedBuilds();
        const newBuild = {
            ...JSON.parse(JSON.stringify(this.currentLoadout)),
            name: name,
            timestamp: Date.now()
        };
        
        builds.push(newBuild);
        localStorage.setItem('huntBuilds', JSON.stringify(builds));
        
        this.closeSaveModal();
    }

    getSavedBuilds() {
        try {
            return JSON.parse(localStorage.getItem('huntBuilds') || '[]');
        } catch {
            return [];
        }
    }

    loadStoredData() {
        try {
            const settings = JSON.parse(localStorage.getItem('huntSettings') || '{}');
            if (settings.playerLevel) {
                this.playerLevel = settings.playerLevel;
            }
            if (settings.maxBudget) {
                this.maxBudget = settings.maxBudget;
            }
        } catch {
            
        }
    }

    saveSettings() {
        const settings = {
            playerLevel: this.playerLevel,
            maxBudget: this.maxBudget
        };
        localStorage.setItem('huntSettings', JSON.stringify(settings));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new HuntCompanion();
});