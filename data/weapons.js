const WEAPONS = {
  rifles: [
    {
      id: 'mosin_nagant',
      name: 'Mosin-Nagant',
      category: 'rifles',
      price: 490,
      damage: 149,
      range: 250,
      ammo: 'Long',
      slots: 3,
      unlock_level: 1,
      variants: [
        { id: 'mosin_obrez', name: 'Mosin-Nagant Obrez', price: 290, damage: 132, range: 86, slots: 2, unlock_level: 12 },
        { id: 'mosin_obrez_match', name: 'Mosin-Nagant Obrez Match', price: 340, damage: 132, range: 86, slots: 2, unlock_level: 15 },
        { id: 'mosin_obrez_sharpeye', name: 'Mosin-Nagant Obrez Sharpeye', price: 350, damage: 132, range: 86, slots: 2, unlock_level: 18 },
        { id: 'mosin_sniper', name: 'Mosin-Nagant Sniper', price: 650, damage: 149, range: 250, slots: 3, unlock_level: 26 },
        { id: 'mosin_bayonet', name: 'Mosin-Nagant Bayonet', price: 540, damage: 149, range: 250, slots: 3, unlock_level: 33 }
      ]
    },
    {
      id: '1865_carbine',
      name: '1865 Carbine',
      category: 'rifles',
      price: 420,
      damage: 145,
      range: 120,
      ammo: 'Medium',
      slots: 3,
      unlock_level: 8,
      variants: [
        { id: '1865_carbine_silencer', name: '1865 Carbine Silencer', price: 470, damage: 145, range: 120, slots: 3, unlock_level: 22 }
      ]
    },
    {
      id: 'winfield_m1873',
      name: 'Winfield M1873',
      category: 'rifles',
      price: 75,
      damage: 110,
      range: 104,
      ammo: 'Compact',
      slots: 3,
      unlock_level: 1,
      variants: [
        { id: 'winfield_swift', name: 'Winfield M1873 Swift', price: 100, damage: 110, range: 104, slots: 3, unlock_level: 18 },
        { id: 'winfield_talon', name: 'Winfield M1873 Talon', price: 100, damage: 110, range: 104, slots: 3, unlock_level: 25 },
        { id: 'winfield_aperture', name: 'Winfield M1873 Aperture', price: 105, damage: 110, range: 104, slots: 3, unlock_level: 35 }
      ]
    },
    {
      id: 'sparks_lrr',
      name: 'Sparks LRR',
      category: 'rifles',
      price: 199,
      damage: 149,
      range: 250,
      ammo: 'Long',
      slots: 3,
      unlock_level: 1,
      variants: [
        { id: 'sparks_silencer', name: 'Sparks LRR Silencer', price: 249, damage: 149, range: 250, slots: 3, unlock_level: 16 },
        { id: 'sparks_sniper', name: 'Sparks LRR Sniper', price: 299, damage: 149, range: 250, slots: 3, unlock_level: 31 }
      ]
    }
  ],
  shotguns: [
    {
      id: 'rival_78',
      name: 'Rival 78',
      category: 'shotguns',
      price: 100,
      damage: 160,
      range: 12,
      ammo: 'Shotgun',
      slots: 3,
      unlock_level: 1,
      variants: [
        { id: 'rival_handcannon', name: 'Rival 78 Handcannon', price: 26, damage: 140, range: 10, slots: 2, unlock_level: 5 },
        { id: 'rival_trauma', name: 'Rival 78 Trauma', price: 150, damage: 135, range: 12, slots: 3, unlock_level: 28 }
      ]
    },
    {
      id: 'caldwell_92',
      name: 'Caldwell 92',
      category: 'shotguns',
      price: 26,
      damage: 140,
      range: 10,
      ammo: 'Shotgun',
      slots: 2,
      unlock_level: 1,
      variants: []
    },
    {
      id: 'specter_1882',
      name: 'Specter 1882',
      category: 'shotguns',
      price: 199,
      damage: 160,
      range: 12,
      ammo: 'Shotgun',
      slots: 3,
      unlock_level: 15,
      variants: [
        { id: 'specter_compact', name: 'Specter 1882 Compact', price: 99, damage: 140, range: 10, slots: 2, unlock_level: 20 },
        { id: 'specter_bayonet', name: 'Specter 1882 Bayonet', price: 249, damage: 160, range: 12, slots: 3, unlock_level: 38 }
      ]
    }
  ],
  pistols: [
    {
      id: 'caldwell_pax',
      name: 'Caldwell Pax',
      category: 'pistols',
      price: 100,
      damage: 110,
      range: 86,
      ammo: 'Compact',
      slots: 2,
      unlock_level: 1,
      variants: [
        { id: 'pax_claw', name: 'Caldwell Pax Claw', price: 125, damage: 110, range: 86, slots: 2, unlock_level: 24 }
      ]
    },
    {
      id: 'winfield_vandal',
      name: 'Winfield M1873C Vandal',
      category: 'pistols',
      price: 55,
      damage: 91,
      range: 74,
      ammo: 'Compact',
      slots: 2,
      unlock_level: 3,
      variants: [
        { id: 'vandal_deadeye', name: 'Winfield M1873C Vandal Deadeye', price: 85, damage: 91, range: 74, slots: 2, unlock_level: 14 },
        { id: 'vandal_striker', name: 'Winfield M1873C Vandal Striker', price: 80, damage: 91, range: 74, slots: 2, unlock_level: 21 }
      ]
    },
    {
      id: 'nagant_m1895',
      name: 'Nagant M1895',
      category: 'pistols',
      price: 24,
      damage: 91,
      range: 74,
      ammo: 'Compact',
      slots: 1,
      unlock_level: 1,
      variants: [
        { id: 'nagant_silencer', name: 'Nagant M1895 Silencer', price: 54, damage: 91, range: 74, slots: 2, unlock_level: 7 },
        { id: 'nagant_officer', name: 'Nagant M1895 Officer', price: 66, damage: 91, range: 74, slots: 2, unlock_level: 13 },
        { id: 'nagant_officer_brawler', name: 'Nagant M1895 Officer Brawler', price: 91, damage: 91, range: 74, slots: 2, unlock_level: 29 }
      ]
    }
  ],
  crossbows: [
    {
      id: 'crossbow',
      name: 'Crossbow',
      category: 'crossbows',
      price: 73,
      damage: 160,
      range: 58,
      ammo: 'Crossbow Bolt',
      slots: 3,
      unlock_level: 1,
      variants: [
        { id: 'crossbow_deadeye', name: 'Crossbow Deadeye', price: 103, damage: 160, range: 58, slots: 3, unlock_level: 35 }
      ]
    },
    {
      id: 'hand_crossbow',
      name: 'Hand Crossbow',
      category: 'crossbows',
      price: 35,
      damage: 130,
      range: 41,
      ammo: 'Crossbow Bolt',
      slots: 1,
      unlock_level: 11,
      variants: []
    }
  ]
};

const WEAPON_CATEGORIES = {
  rifles: 'Rifles',
  shotguns: 'Shotguns', 
  pistols: 'Pistols',
  crossbows: 'Crossbows'
};

const AMMO_TYPES = {
  'Long': { 
    name: 'Long Ammo',
    variants: ['Standard', 'Spitzer', 'Explosive', 'Incendiary', 'Poison']
  },
  'Medium': {
    name: 'Medium Ammo', 
    variants: ['Standard', 'High Velocity', 'FMJ', 'Explosive', 'Incendiary', 'Subsonic']
  },
  'Compact': {
    name: 'Compact Ammo',
    variants: ['Standard', 'High Velocity', 'FMJ', 'Explosive', 'Incendiary', 'Poison']  
  },
  'Shotgun': {
    name: 'Shotgun Ammo',
    variants: ['Buckshot', 'Slugs', 'Flechette', 'Starshell', 'Dragon Breath', 'Penny Shot']
  },
  'Crossbow Bolt': {
    name: 'Crossbow Bolts',
    variants: ['Standard', 'Poison', 'Explosive', 'Steel Bolt', 'Chaos Bolt', 'Shot Bolt']
  }
};