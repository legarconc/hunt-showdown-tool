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
      id: 'strong_vitality_shot',
      name: 'Strong Vitality Shot',
      category: 'medical',
      price: 125,
      description: 'Restores 100 HP over time',
      unlock_level: 31
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
      id: 'regeneration_shot_consumable',
      name: 'Regeneration Shot',
      category: 'medical',
      price: 50,
      description: 'Regenerates HP over time',
      unlock_level: 22
    },
    {
      id: 'strong_regeneration_shot',
      name: 'Strong Regeneration Shot',
      category: 'medical',
      price: 100,
      description: 'Fast HP regeneration over time',
      unlock_level: 38
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
    },
    {
      id: 'strong_antidote_shot',
      name: 'Strong Antidote Shot',
      category: 'antidotes',
      price: 100,
      description: 'Cures poison and provides long immunity',
      unlock_level: 34
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
    },
    {
      id: 'strong_stamina_shot',
      name: 'Strong Stamina Shot',
      category: 'stamina',
      price: 110,
      description: 'Full stamina restore and enhanced regeneration',
      unlock_level: 26
    }
  ],
  explosives: [
    {
      id: 'frag_bomb_consumable',
      name: 'Frag Bomb',
      category: 'explosives',
      price: 70,
      description: 'High damage explosive with shrapnel',
      unlock_level: 1
    },
    {
      id: 'dynamite_consumable',
      name: 'Dynamite Stick',
      category: 'explosives',
      price: 18,
      description: 'Basic explosive with long fuse',
      unlock_level: 1
    },
    {
      id: 'big_dynamite_consumable',
      name: 'Big Dynamite Bundle',
      category: 'explosives',
      price: 110,
      description: 'High damage explosive for compounds',
      unlock_level: 6
    },
    {
      id: 'sticky_bomb_consumable',
      name: 'Sticky Bomb',
      category: 'explosives',
      price: 64,
      description: 'Adheres to surfaces before exploding',
      unlock_level: 19
    },
    {
      id: 'waxed_dynamite',
      name: 'Waxed Dynamite Stick',
      category: 'explosives',
      price: 24,
      description: 'Water-resistant dynamite stick',
      unlock_level: 12
    }
  ],
  fire: [
    {
      id: 'fire_bomb_consumable',
      name: 'Fire Bomb',
      category: 'fire',
      price: 25,
      description: 'Creates fire area on impact',
      unlock_level: 1
    },
    {
      id: 'hellfire_bomb_consumable',
      name: 'Hellfire Bomb',
      category: 'fire',
      price: 70,
      description: 'Larger fire area with longer duration',
      unlock_level: 29
    },
    {
      id: 'liquid_fire_bomb_consumable',
      name: 'Liquid Fire Bomb',
      category: 'fire',
      price: 50,
      description: 'Spreads burning liquid on surfaces',
      unlock_level: 24
    }
  ],
  poison: [
    {
      id: 'poison_bomb_consumable',
      name: 'Poison Bomb',
      category: 'poison',
      price: 25,
      description: 'Creates poisonous cloud',
      unlock_level: 1
    },
    {
      id: 'hive_bomb_consumable',
      name: 'Hive Bomb',
      category: 'poison',
      price: 60,
      description: 'Releases poisonous insects',
      unlock_level: 27
    }
  ],
  utility: [
    {
      id: 'choke_bomb_consumable',
      name: 'Choke Bomb',
      category: 'utility',
      price: 25,
      description: 'Extinguishes fires and blocks vision',
      unlock_level: 1
    },
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
  utility: 'Utility'
};