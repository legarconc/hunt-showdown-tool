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
  specialty: [
    {
      id: 'concertina_bomb',
      name: 'Concertina Bomb',
      category: 'specialty',
      price: 48,
      description: 'Creates concertina wire barrier',
      unlock_level: 14
    },
    {
      id: 'quad_derringer',
      name: 'Quad Derringer',
      category: 'specialty',
      price: 35,
      description: 'Four-shot backup pistol',
      unlock_level: 1
    },
    {
      id: 'throwing_knives',
      name: 'Throwing Knives',
      category: 'specialty',
      price: 30,
      description: 'Silent ranged throwing weapons',
      unlock_level: 1
    },
    {
      id: 'throwing_axes',
      name: 'Throwing Axes', 
      category: 'specialty',
      price: 50,
      description: 'High damage throwing weapons',
      unlock_level: 23
    }
  ]
};

const CONSUMABLE_CATEGORIES = {
  medical: 'Medical',
  antidotes: 'Antidotes',
  stamina: 'Stamina',
  specialty: 'Specialty'
};