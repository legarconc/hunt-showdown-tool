const CONSUMABLES = {
  medical: [
    {
      id: 'weak_vitality_shot',
      name: 'Weak Vitality Shot',
      category: 'medical',
      price: 50,
      description: 'Restores 25 HP over time',
      unlock_level: 1
    },
    {
      id: 'vitality_shot',
      name: 'Vitality Shot', 
      category: 'medical',
      price: 75,
      description: 'Restores 50 HP over time',
      unlock_level: 14
    },
    {
      id: 'medical_pack',
      name: 'Medical Pack',
      category: 'medical',
      price: 100,
      description: 'Instantly heals health chunks',
      unlock_level: 25
    },
    {
      id: 'weak_regeneration_shot',
      name: 'Weak Regeneration Shot',
      category: 'medical', 
      price: 25,
      description: 'Slowly regenerates HP over time',
      unlock_level: 1
    },
    {
      id: 'regeneration_shot',
      name: 'Regeneration Shot',
      category: 'medical',
      price: 50,
      description: 'Regenerates HP over time',
      unlock_level: 22
    },
    {
      id: 'recovery_shot',
      name: 'Recovery Shot',
      category: 'medical',
      price: 90,
      description: 'Advanced healing over time',
      unlock_level: 35
    }
  ],
  antidotes: [
    {
      id: 'weak_antidote_shot',
      name: 'Weak Antidote Shot',
      category: 'antidotes',
      price: 25,
      description: 'Cures poison and provides brief immunity',
      unlock_level: 1
    },
    {
      id: 'antidote_shot',
      name: 'Antidote Shot',
      category: 'antidotes',
      price: 50,
      description: 'Cures poison and provides immunity',
      unlock_level: 17
    }
  ],
  stamina: [
    {
      id: 'weak_stamina_shot',
      name: 'Weak Stamina Shot',
      category: 'stamina',
      price: 40,
      description: 'Restores stamina and boosts regeneration',
      unlock_level: 1
    },
    {
      id: 'stamina_shot',
      name: 'Stamina Shot',
      category: 'stamina',
      price: 60,
      description: 'Restores stamina and improves regeneration',
      unlock_level: 9
    }
  ],
  explosives: [
    {
      id: 'dynamite_stick',
      name: 'Dynamite Stick',
      category: 'explosives',
      price: 18,
      description: 'Basic explosive with long fuse',
      unlock_level: 1
    },
    {
      id: 'waxed_dynamite_stick',
      name: 'Waxed Dynamite Stick',
      category: 'explosives',
      price: 24,
      description: 'Water-resistant dynamite stick',
      unlock_level: 12
    },
    {
      id: 'dynamite_bundle',
      name: 'Dynamite Bundle',
      category: 'explosives',
      price: 90,
      description: 'Multiple dynamite sticks bundled together',
      unlock_level: 18
    },
    {
      id: 'big_dynamite_bundle',
      name: 'Big Dynamite Bundle',
      category: 'explosives',
      price: 110,
      description: 'High damage explosive for compounds',
      unlock_level: 6
    },
    {
      id: 'dark_dynamite_satchel',
      name: 'Dark Dynamite Satchel',
      category: 'explosives',
      price: 75,
      description: 'Event explosive with special effects',
      unlock_level: 20
    },
    {
      id: 'sticky_bomb',
      name: 'Sticky Bomb',
      category: 'explosives',
      price: 64,
      description: 'Adheres to surfaces before exploding',
      unlock_level: 19
    },
    {
      id: 'frag_bomb',
      name: 'Frag Bomb',
      category: 'explosives',
      price: 70,
      description: 'High damage explosive with shrapnel',
      unlock_level: 1
    }
  ],
  fire: [
    {
      id: 'fire_bomb',
      name: 'Fire Bomb',
      category: 'fire',
      price: 25,
      description: 'Creates fire area on impact',
      unlock_level: 1
    },
    {
      id: 'hellfire_bomb',
      name: 'Hellfire Bomb',
      category: 'fire',
      price: 70,
      description: 'Larger fire area with longer duration',
      unlock_level: 29
    },
    {
      id: 'liquid_fire_bomb',
      name: 'Liquid Fire Bomb',
      category: 'fire',
      price: 50,
      description: 'Spreads burning liquid on surfaces',
      unlock_level: 24
    }
  ],
  poison: [
    {
      id: 'poison_bomb',
      name: 'Poison Bomb',
      category: 'poison',
      price: 25,
      description: 'Creates poisonous cloud',
      unlock_level: 1
    },
    {
      id: 'hive_bomb',
      name: 'Hive Bomb',
      category: 'poison',
      price: 60,
      description: 'Releases poisonous insects',
      unlock_level: 27
    }
  ],
  utility: [
    {
      id: 'concertina_bomb',
      name: 'Concertina Bomb',
      category: 'utility',
      price: 48,
      description: 'Creates concertina wire barrier',
      unlock_level: 14
    },
    {
      id: 'chaos_bomb',
      name: 'Chaos Bomb',
      category: 'utility',
      price: 15,
      description: 'Creates multiple random sound effects',
      unlock_level: 1
    },
    {
      id: 'flash_bomb',
      name: 'Flash Bomb',
      category: 'utility',
      price: 40,
      description: 'Blinds enemies with bright flash',
      unlock_level: 30
    }
  ],
  resupply: [
    {
      id: 'ammo_box',
      name: 'Ammo Box',
      category: 'resupply',
      price: 65,
      description: 'Restores ammunition for all weapons',
      unlock_level: 5
    },
    {
      id: 'tool_box',
      name: 'Tool Box',
      category: 'resupply',
      price: 55,
      description: 'Restores uses for all tools',
      unlock_level: 10
    }
  ],
  beetles: [
    {
      id: 'stalker_beetle',
      name: 'Stalker Beetle',
      category: 'beetles',
      price: 35,
      description: 'Tracks nearby enemies',
      unlock_level: 25
    },
    {
      id: 'choke_beetle',
      name: 'Choke Beetle',
      category: 'beetles',
      price: 30,
      description: 'Creates choking gas cloud',
      unlock_level: 20
    },
    {
      id: 'fire_beetle',
      name: 'Fire Beetle',
      category: 'beetles',
      price: 40,
      description: 'Creates fire damage area',
      unlock_level: 30
    }
  ]
};

const CONSUMABLE_CATEGORIES = {
  medical: 'Medical',
  antidotes: 'Antidotes',
  stamina: 'Stamina',
  explosives: 'Explosives',
  fire: 'Fire',
  poison: 'Poison',
  utility: 'Utility',
  resupply: 'Resupply',
  beetles: 'Beetles'
};