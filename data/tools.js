const TOOLS = {
  medical: [
    {
      id: 'first_aid_kit',
      name: 'First Aid Kit',
      category: 'medical',
      price: 30,
      description: 'Heals one health chunk completely',
      unlock_level: 1
    },
    {
      id: 'medkit',
      name: 'Medkit',
      category: 'medical', 
      price: 65,
      description: 'Heals up to 100 HP, can revive downed hunters',
      unlock_level: 11
    },
    {
      id: 'regeneration_shot',
      name: 'Regeneration Shot',
      category: 'medical',
      price: 25,
      description: 'Slowly regenerates health over time',
      unlock_level: 22
    }
  ],
  utility: [
    {
      id: 'knife',
      name: 'Knife',
      category: 'utility',
      price: 15,
      description: 'Quiet melee weapon, can be thrown',
      unlock_level: 1
    },
    {
      id: 'knuckle_knife',
      name: 'Knuckle Knife',
      category: 'utility',
      price: 15,
      description: 'Melee weapon with light attack spam',
      unlock_level: 8
    },
    {
      id: 'dusters',
      name: 'Dusters',
      category: 'utility',
      price: 5,
      description: 'Basic melee weapon, silent kills',
      unlock_level: 1
    },
    {
      id: 'heavy_knife',
      name: 'Heavy Knife',
      category: 'utility',
      price: 25,
      description: 'High damage melee weapon',
      unlock_level: 18
    }
  ],
  traps: [
    {
      id: 'bear_trap',
      name: 'Bear Trap',
      category: 'traps',
      price: 25,
      description: 'Deployable trap, now placeable on windows and walls',
      unlock_level: 1
    },
    {
      id: 'concertina_trip_mine',
      name: 'Concertina Trip Mine',
      category: 'traps',
      price: 48,
      description: 'Creates concertina wire when triggered',
      unlock_level: 14
    },
    {
      id: 'alert_trip_mine',
      name: 'Alert Trip Mine',
      category: 'traps',
      price: 35,
      description: 'Triggers alert and 25 burn damage',
      unlock_level: 20
    }
  ],
  explosives: [
    {
      id: 'frag_bomb',
      name: 'Frag Bomb',
      category: 'explosives',
      price: 70,
      description: 'High damage explosive with shrapnel',
      unlock_level: 1
    },
    {
      id: 'dynamite',
      name: 'Dynamite Stick',
      category: 'explosives',
      price: 18,
      description: 'Basic explosive with long fuse',
      unlock_level: 1
    },
    {
      id: 'big_dynamite',
      name: 'Big Dynamite Bundle',
      category: 'explosives',
      price: 110,
      description: 'High damage explosive for compounds',
      unlock_level: 6
    },
    {
      id: 'sticky_bomb',
      name: 'Sticky Bomb',
      category: 'explosives',
      price: 64,
      description: 'Adheres to surfaces before exploding',
      unlock_level: 19
    }
  ],
  fire: [
    {
      id: 'fusees',
      name: 'Fusees',
      category: 'fire',
      price: 7,
      description: 'Throwable flare, causes burn damage',
      unlock_level: 1
    },
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
  utility_advanced: [
    {
      id: 'choke_bomb',
      name: 'Choke Bomb',
      category: 'utility_advanced',
      price: 25,
      description: 'Extinguishes fires and blocks vision',
      unlock_level: 1
    },
    {
      id: 'blank_fire_decoys',
      name: 'Blank Fire Decoys',
      category: 'utility_advanced',
      price: 10,
      description: 'Creates fake gunshot sounds',
      unlock_level: 1
    },
    {
      id: 'decoy_fuses',
      name: 'Decoy Fuses',
      category: 'utility_advanced',
      price: 6,
      description: 'Mimics dynamite fuse sound',
      unlock_level: 1
    },
    {
      id: 'spyglass',
      name: 'Spyglass',
      category: 'utility_advanced',
      price: 8,
      description: 'Provides magnified view for scouting',
      unlock_level: 1
    }
  ]
};

const TOOL_CATEGORIES = {
  medical: 'Medical',
  utility: 'Utility',
  traps: 'Traps', 
  explosives: 'Explosives',
  fire: 'Fire',
  poison: 'Poison',
  utility_advanced: 'Advanced Utility'
};