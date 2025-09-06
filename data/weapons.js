const WEAPONS = {
  rifles: [
    {
      id: 'mosin_nagant',
      name: 'Mosin-Nagant',
      category: 'rifles',
      price: 497,
      damage: 149,
      range: 250,
      ammo: 'Long',
      slots: 3,
      unlock_level: 1,
      variants: [
        { id: 'mosin_obrez', name: 'Mosin-Nagant Obrez', price: 290, damage: 132, range: 86, slots: 2, unlock_level: 12 },
        { id: 'mosin_obrez_match', name: 'Mosin-Nagant Obrez Match', price: 340, damage: 132, range: 86, slots: 2, unlock_level: 15 },
        { id: 'mosin_obrez_sharpeye', name: 'Mosin-Nagant Obrez Sharpeye', price: 350, damage: 132, range: 86, slots: 2, unlock_level: 18 },
        { id: 'mosin_sniper', name: 'Mosin-Nagant Sniper', price: 730, damage: 149, range: 250, slots: 3, unlock_level: 26 },
        { id: 'mosin_bayonet', name: 'Mosin-Nagant Bayonet', price: 540, damage: 149, range: 250, slots: 3, unlock_level: 33 }
      ]
    },
    {
      id: 'lebel_1886',
      name: 'Lebel 1886',
      category: 'rifles',
      price: 397,
      damage: 132,
      range: 250,
      ammo: 'Long',
      slots: 3,
      unlock_level: 1,
      variants: [
        { id: 'lebel_marksman', name: 'Lebel 1886 Marksman', price: 607, damage: 132, range: 250, slots: 3, unlock_level: 20 },
        { id: 'lebel_aperture', name: 'Lebel 1886 Aperture', price: 420, damage: 132, range: 250, slots: 3, unlock_level: 15 },
        { id: 'lebel_talon', name: 'Lebel 1886 Talon', price: 420, damage: 132, range: 250, slots: 3, unlock_level: 28 }
      ]
    },
    {
      id: 'berthier_1892',
      name: 'Berthier 1892',
      category: 'rifles',
      price: 280,
      damage: 132,
      range: 220,
      ammo: 'Long',
      slots: 3,
      unlock_level: 5,
      variants: [
        { id: 'berthier_deadeye', name: 'Berthier 1892 Deadeye', price: 320, damage: 132, range: 220, slots: 3, unlock_level: 18 },
        { id: 'berthier_riposte', name: 'Berthier 1892 Riposte', price: 310, damage: 132, range: 220, slots: 3, unlock_level: 25 }
      ]
    },
    {
      id: 'martini_henry',
      name: 'Martini-Henry IC1',
      category: 'rifles',
      price: 164,
      damage: 143,
      range: 220,
      ammo: 'Long',
      slots: 3,
      unlock_level: 1,
      variants: [
        { id: 'martini_deadeye', name: 'Martini-Henry IC1 Deadeye', price: 194, damage: 143, range: 220, slots: 3, unlock_level: 12 },
        { id: 'martini_marksman', name: 'Martini-Henry IC1 Marksman', price: 254, damage: 143, range: 220, slots: 3, unlock_level: 22 },
        { id: 'martini_riposte', name: 'Martini-Henry IC1 Riposte', price: 194, damage: 143, range: 220, slots: 3, unlock_level: 32 }
      ]
    },
    {
      id: 'krag_jorgensen',
      name: 'Krag-Jørgensen',
      category: 'rifles',
      price: 580,
      damage: 136,
      range: 240,
      ammo: 'Long',
      slots: 3,
      unlock_level: 15,
      variants: [
        { id: 'krag_sniper', name: 'Krag-Jørgensen Sniper', price: 780, damage: 136, range: 240, slots: 3, unlock_level: 35 }
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
      id: 'vetterli_71',
      name: 'Vetterli 71 Karabiner',
      category: 'rifles',
      price: 105,
      damage: 125,
      range: 150,
      ammo: 'Medium',
      slots: 3,
      unlock_level: 1,
      variants: [
        { id: 'vetterli_deadeye', name: 'Vetterli 71 Karabiner Deadeye', price: 130, damage: 125, range: 150, slots: 3, unlock_level: 14 },
        { id: 'vetterli_cyclone', name: 'Vetterli 71 Karabiner Cyclone', price: 135, damage: 125, range: 150, slots: 3, unlock_level: 28 },
        { id: 'vetterli_bayonet', name: 'Vetterli 71 Karabiner Bayonet', price: 135, damage: 125, range: 150, slots: 3, unlock_level: 34 }
      ]
    },
    {
      id: 'centennial',
      name: 'Centennial 73',
      category: 'rifles',
      price: 333,
      damage: 110,
      range: 180,
      ammo: 'Medium',
      slots: 3,
      unlock_level: 12,
      variants: [
        { id: 'centennial_sniper', name: 'Centennial 73 Sniper', price: 433, damage: 110, range: 180, slots: 3, unlock_level: 25 },
        { id: 'centennial_shorty', name: 'Centennial 73 Shorty', price: 283, damage: 105, range: 120, slots: 2, unlock_level: 18 }
      ]
    },
    {
      id: 'springfield_1866',
      name: 'Springfield 1866',
      category: 'rifles',
      price: 38,
      damage: 143,
      range: 150,
      ammo: 'Medium',
      slots: 3,
      unlock_level: 1,
      variants: [
        { id: 'springfield_marksman', name: 'Springfield 1866 Marksman', price: 73, damage: 143, range: 150, slots: 3, unlock_level: 8 },
        { id: 'springfield_compact', name: 'Springfield 1866 Compact', price: 21, damage: 143, range: 100, slots: 2, unlock_level: 5 }
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
      id: 'frontier_73c',
      name: 'Frontier 73C',
      category: 'rifles',
      price: 68,
      damage: 100,
      range: 95,
      ammo: 'Compact',
      slots: 3,
      unlock_level: 3,
      variants: []
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
      id: 'romero_77',
      name: 'Romero 77',
      category: 'shotguns',
      price: 66,
      damage: 200,
      range: 14,
      ammo: 'Shotgun',
      slots: 3,
      unlock_level: 1,
      variants: [
        { id: 'romero_hatchet', name: 'Romero 77 Hatchet', price: 91, damage: 200, range: 14, slots: 3, unlock_level: 8 },
        { id: 'romero_handcannon', name: 'Romero 77 Handcannon', price: 34, damage: 185, range: 12, slots: 2, unlock_level: 1 },
        { id: 'romero_talon', name: 'Romero 77 Talon', price: 91, damage: 200, range: 14, slots: 3, unlock_level: 15 }
      ]
    },
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
    },
    {
      id: 'terminus_1887',
      name: 'Winfield 1887 Terminus',
      category: 'shotguns',
      price: 309,
      damage: 140,
      range: 11,
      ammo: 'Shotgun',
      slots: 3,
      unlock_level: 24,
      variants: [
        { id: 'terminus_handcannon', name: 'Winfield 1887 Terminus Handcannon', price: 175, damage: 125, range: 9, slots: 2, unlock_level: 28 }
      ]
    },
    {
      id: 'auto_5',
      name: 'Alamo 78 Auto-5',
      category: 'shotguns',
      price: 550,
      damage: 130,
      range: 10,
      ammo: 'Shotgun',
      slots: 3,
      unlock_level: 35,
      variants: []
    },
    {
      id: 'slate',
      name: 'Slate',
      category: 'shotguns',
      price: 145,
      damage: 150,
      range: 11,
      ammo: 'Shotgun',
      slots: 3,
      unlock_level: 18,
      variants: []
    }
  ],
  pistols: [
    {
      id: 'caldwell_uppercut',
      name: 'Caldwell Conversion Uppercut',
      category: 'pistols',
      price: 414,
      damage: 143,
      range: 86,
      ammo: 'Long',
      slots: 2,
      unlock_level: 22,
      variants: []
    },
    {
      id: 'caldwell_pax',
      name: 'Caldwell Pax',
      category: 'pistols',
      price: 100,
      damage: 110,
      range: 86,
      ammo: 'Medium',
      slots: 2,
      unlock_level: 1,
      variants: [
        { id: 'pax_claw', name: 'Caldwell Pax Claw', price: 125, damage: 110, range: 86, slots: 2, unlock_level: 24 },
        { id: 'pax_trueshot', name: 'Caldwell Pax Trueshot', price: 130, damage: 110, range: 86, slots: 2, unlock_level: 32 }
      ]
    },
    {
      id: 'scottfield',
      name: 'Scottfield Model 3',
      category: 'pistols',
      price: 166,
      damage: 110,
      range: 86,
      ammo: 'Medium',
      slots: 2,
      unlock_level: 12,
      variants: [
        { id: 'scottfield_swift', name: 'Scottfield Model 3 Swift', price: 191, damage: 110, range: 86, slots: 2, unlock_level: 20 },
        { id: 'scottfield_precision', name: 'Scottfield Model 3 Precision', price: 196, damage: 110, range: 86, slots: 2, unlock_level: 28 },
        { id: 'scottfield_spitfire', name: 'Scottfield Model 3 Spitfire', price: 201, damage: 110, range: 86, slots: 2, unlock_level: 36 }
      ]
    },
    {
      id: 'caldwell_conversion',
      name: 'Caldwell Conversion Pistol',
      category: 'pistols',
      price: 26,
      damage: 97,
      range: 74,
      ammo: 'Compact',
      slots: 1,
      unlock_level: 1,
      variants: [
        { id: 'conversion_chain', name: 'Caldwell Conversion Chain Pistol', price: 84, damage: 97, range: 74, slots: 2, unlock_level: 5 }
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
        { id: 'nagant_officer', name: 'Nagant M1895 Officer', price: 96, damage: 91, range: 74, slots: 2, unlock_level: 13 },
        { id: 'nagant_officer_brawler', name: 'Nagant M1895 Officer Brawler', price: 121, damage: 91, range: 74, slots: 2, unlock_level: 29 }
      ]
    },
    {
      id: 'bornheim_no3',
      name: 'Bornheim No. 3',
      category: 'pistols',
      price: 201,
      damage: 74,
      range: 60,
      ammo: 'Compact',
      slots: 2,
      unlock_level: 16,
      variants: [
        { id: 'bornheim_extended', name: 'Bornheim No. 3 Extended', price: 231, damage: 74, range: 60, slots: 2, unlock_level: 24 },
        { id: 'bornheim_match', name: 'Bornheim No. 3 Match', price: 271, damage: 74, range: 60, slots: 2, unlock_level: 32 }
      ]
    },
    {
      id: 'dolch_96',
      name: 'Dolch 96',
      category: 'pistols',
      price: 750,
      damage: 97,
      range: 70,
      ammo: 'Special',
      slots: 2,
      unlock_level: 42,
      variants: [
        { id: 'dolch_precision', name: 'Dolch 96 Precision', price: 850, damage: 97, range: 70, slots: 2, unlock_level: 46 }
      ]
    },
    {
      id: 'lemat_mark_ii',
      name: 'LeMat Mark II',
      category: 'pistols',
      price: 95,
      damage: 91,
      range: 60,
      ammo: 'Compact',
      slots: 2,
      unlock_level: 8,
      variants: [
        { id: 'lemat_carbine', name: 'LeMat Mark II Carbine', price: 145, damage: 91, range: 60, slots: 3, unlock_level: 20 }
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
        { id: 'crossbow_deadeye', name: 'Crossbow Deadeye', price: 103, damage: 160, range: 58, slots: 3, unlock_level: 35 },
        { id: 'crossbow_shot', name: 'Crossbow Shot Bolt', price: 88, damage: 160, range: 58, slots: 3, unlock_level: 22 }
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
    },
    {
      id: 'hunting_bow',
      name: 'Hunting Bow',
      category: 'crossbows',
      price: 56,
      damage: 150,
      range: 60,
      ammo: 'Arrows',
      slots: 3,
      unlock_level: 1,
      variants: []
    }
  ],
  special: [
    {
      id: 'nitro_express',
      name: 'Nitro Express Rifle',
      category: 'special',
      price: 1625,
      damage: 374,
      range: 250,
      ammo: 'Nitro',
      slots: 3,
      unlock_level: 50,
      variants: []
    },
    {
      id: 'bomb_lance',
      name: 'Bomb Lance',
      category: 'special',
      price: 187,
      damage: 350,
      range: 3,
      ammo: 'Harpoon',
      slots: 3,
      unlock_level: 1,
      variants: []
    },
    {
      id: 'avtomat',
      name: 'Avtomat',
      category: 'special',
      price: 1250,
      damage: 125,
      range: 200,
      ammo: 'Long',
      slots: 3,
      unlock_level: 45,
      variants: []
    }
  ],
  melee: [
    {
      id: 'cavalry_saber',
      name: 'Cavalry Saber',
      category: 'melee',
      price: 60,
      damage: 174,
      range: 3,
      ammo: 'Melee',
      slots: 3,
      unlock_level: 1,
      variants: []
    },
    {
      id: 'machete',
      name: 'Machete',
      category: 'melee',
      price: 18,
      damage: 115,
      range: 2,
      ammo: 'Melee',
      slots: 2,
      unlock_level: 1,
      variants: []
    },
    {
      id: 'combat_axe',
      name: 'Combat Axe',
      category: 'melee',
      price: 35,
      damage: 125,
      range: 2,
      ammo: 'Melee',
      slots: 2,
      unlock_level: 1,
      variants: []
    }
  ]
};

const WEAPON_CATEGORIES = {
  rifles: 'Rifles',
  shotguns: 'Shotguns', 
  pistols: 'Pistols',
  crossbows: 'Crossbows',
  special: 'Special Weapons',
  melee: 'Melee Weapons'
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