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
        this.selectedTraits = [];
        this.maxBudget = 2000;
        this.playerLevel = 100;
        this.maxUpgradePoints = 50;
        this.maxTraits = 15;
        
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupLoadoutBuilder();
        this.setupWeaponDatabase();
        this.setupTraitsDatabase();
        this.setupMapsDatabase();
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
        } else if (screen === 'traits') {
            this.renderTraitsDatabase();
        } else if (screen === 'maps') {
            this.renderMapsDatabase();
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

    setupTraitsDatabase() {
        const categoryFilter = document.getElementById('trait-category');
        const costFilter = document.getElementById('trait-cost');
        const searchInput = document.getElementById('trait-search');
        
        categoryFilter.addEventListener('change', () => {
            this.renderTraitsDatabase();
        });
        
        costFilter.addEventListener('change', () => {
            this.renderTraitsDatabase();
        });
        
        searchInput.addEventListener('input', () => {
            this.renderTraitsDatabase();
        });
        
        document.getElementById('clear-traits').addEventListener('click', () => {
            this.clearTraits();
        });
    }

    setupMapsDatabase() {
        const mapFilter = document.getElementById('map-filter');
        const infoType = document.getElementById('info-type');
        const searchInput = document.getElementById('map-search');
        
        mapFilter.addEventListener('change', () => {
            this.renderMapsDatabase();
        });
        
        infoType.addEventListener('change', () => {
            this.renderMapsDatabase();
        });
        
        searchInput.addEventListener('input', () => {
            this.renderMapsDatabase();
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

    getAllTraits() {
        const traits = [];
        Object.values(TRAITS).forEach(category => {
            category.forEach(trait => {
                traits.push({ ...trait, type: 'trait' });
            });
        });
        return traits.filter(t => t.unlock_level <= this.playerLevel);
    }

    renderTraitsDatabase() {
        const container = document.getElementById('trait-list');
        const categoryFilter = document.getElementById('trait-category').value;
        const costFilter = document.getElementById('trait-cost').value;
        const searchTerm = document.getElementById('trait-search').value.toLowerCase();
        
        let traits = this.getAllTraits();
        
        if (categoryFilter !== 'all') {
            traits = traits.filter(t => t.category === categoryFilter);
        }
        
        if (costFilter !== 'all') {
            const [min, max] = costFilter.split('-').map(Number);
            traits = traits.filter(t => t.cost >= min && t.cost <= max);
        }
        
        if (searchTerm) {
            traits = traits.filter(t => 
                t.name.toLowerCase().includes(searchTerm) ||
                t.description.toLowerCase().includes(searchTerm)
            );
        }
        
        container.innerHTML = '';
        
        traits.forEach(trait => {
            const isSelected = this.selectedTraits.some(t => t.id === trait.id);
            const traitEl = document.createElement('div');
            traitEl.className = `trait-item ${isSelected ? 'selected' : ''} trait-type-${trait.type}`;
            
            let costDisplay;
            if (trait.type === 'scarce' || trait.type === 'burn') {
                costDisplay = trait.type === 'scarce' ? 'Scarce' : 'Burn Trait';
            } else {
                costDisplay = `${trait.cost} points`;
            }
            
            traitEl.innerHTML = `
                <h3>${trait.name}</h3>
                <div class="trait-info">
                    <span class="trait-category">${TRAIT_CATEGORIES[trait.category]}</span>
                    <span class="trait-cost">${costDisplay}</span>
                </div>
                <div class="trait-description">${trait.description}</div>
                <div class="trait-level">Unlocks at Level ${trait.unlock_level} • ${TRAIT_TYPES[trait.type]}</div>
            `;
            
            if (!isSelected && trait.type === 'regular') {
                traitEl.addEventListener('click', () => {
                    this.selectTrait(trait);
                });
            } else if (trait.type !== 'regular') {
                traitEl.classList.add('special-trait');
            }
            
            container.appendChild(traitEl);
        });
    }

    selectTrait(trait) {
        if (trait.type !== 'regular') {
            alert(`${trait.name} is a ${TRAIT_TYPES[trait.type]} trait and cannot be selected in the loadout builder.`);
            return;
        }
        
        if (this.selectedTraits.length >= this.maxTraits) {
            alert(`Maximum ${this.maxTraits} traits allowed`);
            return;
        }
        
        const totalCost = this.calculateTraitCost() + trait.cost;
        if (totalCost > this.maxUpgradePoints) {
            alert(`Not enough upgrade points. Need ${trait.cost}, available: ${this.maxUpgradePoints - this.calculateTraitCost()}`);
            return;
        }
        
        this.selectedTraits.push(trait);
        this.updateTraitDisplay();
        this.renderTraitsDatabase();
    }

    removeTrait(traitId) {
        this.selectedTraits = this.selectedTraits.filter(t => t.id !== traitId);
        this.updateTraitDisplay();
        this.renderTraitsDatabase();
    }

    clearTraits() {
        this.selectedTraits = [];
        this.updateTraitDisplay();
        this.renderTraitsDatabase();
    }

    calculateTraitCost() {
        return this.selectedTraits.reduce((total, trait) => total + trait.cost, 0);
    }

    updateTraitDisplay() {
        const pointsUsed = this.calculateTraitCost();
        const traitsCount = this.selectedTraits.length;
        
        document.getElementById('points-used').textContent = pointsUsed;
        document.getElementById('traits-equipped').textContent = traitsCount;
        
        const pointsEl = document.getElementById('points-used');
        if (pointsUsed > this.maxUpgradePoints) {
            pointsEl.style.color = 'var(--danger)';
        } else {
            pointsEl.style.color = 'var(--accent)';
        }
        
        const traitsEl = document.getElementById('traits-equipped');
        if (traitsCount > this.maxTraits) {
            traitsEl.style.color = 'var(--danger)';
        } else {
            traitsEl.style.color = 'var(--accent)';
        }
        
        this.renderSelectedTraits();
    }

    renderSelectedTraits() {
        const container = document.getElementById('selected-trait-list');
        
        if (this.selectedTraits.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>No traits selected</p></div>';
            return;
        }
        
        container.innerHTML = '';
        
        this.selectedTraits.forEach(trait => {
            const traitEl = document.createElement('div');
            traitEl.className = 'selected-trait';
            traitEl.innerHTML = `
                <span class="trait-name">${trait.name}</span>
                <span class="trait-cost">${trait.cost} pts</span>
                <button class="remove-trait" data-trait="${trait.id}" aria-label="Remove trait">×</button>
            `;
            
            const removeBtn = traitEl.querySelector('.remove-trait');
            removeBtn.addEventListener('click', () => {
                this.removeTrait(trait.id);
            });
            
            container.appendChild(traitEl);
        });
    }

    renderMapsDatabase() {
        const container = document.getElementById('map-content');
        const mapFilter = document.getElementById('map-filter').value;
        const infoType = document.getElementById('info-type').value;
        const searchTerm = document.getElementById('map-search').value.toLowerCase();
        
        let maps = Object.values(MAPS);
        
        if (mapFilter !== 'all') {
            maps = maps.filter(m => m.id === mapFilter);
        }
        
        if (searchTerm) {
            maps = maps.filter(m => 
                m.name.toLowerCase().includes(searchTerm) ||
                m.description.toLowerCase().includes(searchTerm) ||
                m.compounds.some(c => c.name.toLowerCase().includes(searchTerm)) ||
                m.special_features.some(f => f.toLowerCase().includes(searchTerm))
            );
        }
        
        container.innerHTML = '';
        
        if (maps.length === 0) {
            container.innerHTML = '<div class="empty-state"><h3>No maps found</h3><p>Try adjusting your search or filters</p></div>';
            return;
        }
        
        maps.forEach(map => {
            const mapEl = document.createElement('div');
            mapEl.className = 'map-card';
            
            let content = '';
            
            if (infoType === 'overview' || infoType === 'all') {
                content += this.renderMapOverview(map);
            }
            
            if (infoType === 'compounds' || infoType === 'all') {
                content += this.renderMapCompounds(map);
            }
            
            if (infoType === 'strategy' || infoType === 'all') {
                content += this.renderMapStrategy(map);
            }
            
            if (infoType === 'bosses') {
                content += this.renderBossInfo();
            }
            
            if (infoType === 'blueprints') {
                content += this.renderBlueprintInfo(map);
            }
            
            mapEl.innerHTML = content;
            container.appendChild(mapEl);
        });
    }

    renderMapOverview(map) {
        return `
            <div class="map-overview">
                <div class="map-header">
                    <h2>${map.name}</h2>
                    <div class="map-meta">
                        <span class="map-theme">${map.theme}</span>
                        <span class="map-size">${map.size}</span>
                        <span class="map-extractions">${map.extraction_points} extraction points</span>
                    </div>
                </div>
                <div class="map-description">
                    <p>${map.description}</p>
                </div>
                <div class="map-stats">
                    <div class="stat-item">
                        <span class="stat-label">Release:</span>
                        <span class="stat-value">${map.release_date}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Atmosphere:</span>
                        <span class="stat-value">${map.atmosphere}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Compounds:</span>
                        <span class="stat-value">${map.compounds.length}</span>
                    </div>
                </div>
            </div>
        `;
    }

    renderMapCompounds(map) {
        let compoundsHtml = '<div class="map-compounds"><h3>Compounds</h3><div class="compound-grid">';
        
        map.compounds.forEach(compound => {
            const specialBadge = compound.special ? `<span class="special-badge">${compound.special}</span>` : '';
            const workbenchInfo = compound.workbenches ? `<span class="workbench-count">${compound.workbenches} workbenches</span>` : '';
            const blueprintHotspot = compound.blueprint_hotspot ? '<span class="blueprint-hotspot">Blueprint Hotspot</span>' : '';
            const topFarming = compound.top_farming ? '<span class="top-farming">Top Farming Location</span>' : '';
            
            compoundsHtml += `
                <div class="compound-item">
                    <h4>${compound.name}</h4>
                    ${specialBadge}
                    ${compound.location ? `<p class="boss-location">Boss Lair: ${compound.location}</p>` : ''}
                    <div class="compound-meta">
                        ${workbenchInfo}
                        ${blueprintHotspot}
                        ${topFarming}
                    </div>
                </div>
            `;
        });
        
        compoundsHtml += '</div></div>';
        return compoundsHtml;
    }

    renderMapStrategy(map) {
        let strategyHtml = '<div class="map-strategy">';
        
        if (map.special_features && map.special_features.length > 0) {
            strategyHtml += '<h3>Special Features</h3><ul class="feature-list">';
            map.special_features.forEach(feature => {
                strategyHtml += `<li>${feature}</li>`;
            });
            strategyHtml += '</ul>';
        }
        
        if (map.strategic_notes && map.strategic_notes.length > 0) {
            strategyHtml += '<h3>Strategic Notes</h3><ul class="strategy-list">';
            map.strategic_notes.forEach(note => {
                strategyHtml += `<li>${note}</li>`;
            });
            strategyHtml += '</ul>';
        }
        
        strategyHtml += '</div>';
        return strategyHtml;
    }

    renderBossInfo() {
        let bossHtml = '<div class="boss-info"><h2>Boss Information</h2><div class="boss-grid">';
        
        Object.values(BOSS_TYPES).forEach(boss => {
            bossHtml += `
                <div class="boss-card">
                    <h3>${boss.name}</h3>
                    <div class="boss-stats">
                        <div class="boss-stat">
                            <span class="stat-label">Health:</span>
                            <span class="stat-value">${boss.health}</span>
                        </div>
                        <div class="boss-stat">
                            <span class="stat-label">Weakness:</span>
                            <span class="stat-value">${boss.weaknesses}</span>
                        </div>
                    </div>
                    <p class="boss-behavior">${boss.behavior}</p>
                    <div class="boss-drops">Drops: ${boss.drops}</div>
                </div>
            `;
        });
        
        bossHtml += '</div></div>';
        return bossHtml;
    }

    renderBlueprintInfo(map) {
        let blueprintHtml = '<div class="blueprint-info">';
        
        blueprintHtml += `<h2>Blueprint & Weapon Unlock Information - ${map.name}</h2>`;
        
        blueprintHtml += '<div class="blueprint-overview">';
        blueprintHtml += `<div class="total-workbenches"><strong>Total Workbenches: ${map.total_workbenches}</strong></div>`;
        
        // Best farming locations on this map
        const farmingLocations = BLUEPRINT_SYSTEM.best_farming_locations.filter(loc => loc.map === map.name);
        if (farmingLocations.length > 0) {
            blueprintHtml += '<div class="farming-locations">';
            blueprintHtml += '<h3>Best Farming Locations</h3>';
            farmingLocations.forEach(location => {
                blueprintHtml += `
                    <div class="farming-location">
                        <strong>${location.compound}</strong> - ${location.workbenches} workbenches
                        ${location.note ? `<br><span class="farming-note">${location.note}</span>` : ''}
                    </div>
                `;
            });
            blueprintHtml += '</div>';
        }
        
        // Blueprint mechanics
        blueprintHtml += '<div class="blueprint-mechanics">';
        blueprintHtml += '<h3>How Blueprints Work</h3>';
        blueprintHtml += `<p><strong>Blueprints:</strong> ${BLUEPRINT_SYSTEM.mechanics.blueprints.function}</p>`;
        blueprintHtml += `<p><strong>Gun Oil:</strong> ${BLUEPRINT_SYSTEM.mechanics.gun_oil.function}</p>`;
        blueprintHtml += `<p><strong>Important:</strong> ${BLUEPRINT_SYSTEM.mechanics.workbench_spawns.note}</p>`;
        blueprintHtml += '</div>';
        
        // Farming strategy
        blueprintHtml += '<div class="farming-strategy">';
        blueprintHtml += '<h3>Farming Strategy</h3>';
        blueprintHtml += `<p><strong>Route Planning:</strong> ${BLUEPRINT_SYSTEM.farming_strategy.route_planning}</p>`;
        blueprintHtml += `<p><strong>Expectation:</strong> ${BLUEPRINT_SYSTEM.farming_strategy.expectation}</p>`;
        blueprintHtml += `<p><strong>Coverage:</strong> ${BLUEPRINT_SYSTEM.farming_strategy.coverage}</p>`;
        blueprintHtml += '</div>';
        
        // Compound breakdown
        blueprintHtml += '<div class="compound-workbenches">';
        blueprintHtml += '<h3>Workbench Locations by Compound</h3>';
        blueprintHtml += '<div class="workbench-grid">';
        
        // Sort compounds by workbench count (highest first)
        const sortedCompounds = [...map.compounds].sort((a, b) => (b.workbenches || 0) - (a.workbenches || 0));
        
        sortedCompounds.forEach(compound => {
            if (compound.workbenches) {
                const badges = [];
                if (compound.blueprint_hotspot) badges.push('<span class="badge blueprint">Blueprint Hotspot</span>');
                if (compound.top_farming) badges.push('<span class="badge farming">Top Farming</span>');
                if (compound.special) badges.push(`<span class="badge special">${compound.special}</span>`);
                
                blueprintHtml += `
                    <div class="workbench-item ${compound.workbenches >= 4 ? 'high-count' : compound.workbenches >= 3 ? 'medium-count' : 'low-count'}">
                        <div class="compound-name">${compound.name}</div>
                        <div class="workbench-count-large">${compound.workbenches}</div>
                        <div class="workbench-label">workbenches</div>
                        ${badges.length > 0 ? `<div class="compound-badges">${badges.join('')}</div>` : ''}
                    </div>
                `;
            }
        });
        
        blueprintHtml += '</div></div>';
        blueprintHtml += '</div>';
        
        return blueprintHtml;
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