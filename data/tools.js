const TOOLS = {
  medical: [
    {
      id: 'first_aid_kit',
      name: 'First Aid Kit',
      category: 'medical',
      price: 30,
      description: 'Heals one health chunk completely',
      unlock_level: 1
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
    },
    {
      id: 'spyglass',
      name: 'Spyglass',
      category: 'utility',
      price: 8,
      description: 'Provides magnified view for scouting',
      unlock_level: 1
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
      id: 'poison_trip_mine',
      name: 'Poison Trip Mine',
      category: 'traps',
      price: 30,
      description: 'Releases poison gas when triggered',
      unlock_level: 17
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
  distraction: [
    {
      id: 'blank_fire_decoys',
      name: 'Blank Fire Decoys',
      category: 'distraction',
      price: 10,
      description: 'Creates fake gunshot sounds',
      unlock_level: 1
    },
    {
      id: 'decoy_fuses',
      name: 'Decoy Fuses',
      category: 'distraction',
      price: 6,
      description: 'Mimics dynamite fuse sound',
      unlock_level: 1
    },
    {
      id: 'decoys',
      name: 'Decoys',
      category: 'distraction',
      price: 8,
      description: 'Throwable distraction device',
      unlock_level: 1
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
      id: 'flare_pistol',
      name: 'Flare Pistol',
      category: 'fire',
      price: 24,
      description: 'Launches flares for illumination',
      unlock_level: 5
    }
  ],
  throwables: [
    {
      id: 'throwing_knives',
      name: 'Throwing Knives',
      category: 'throwables',
      price: 30,
      description: 'Silent ranged throwing weapons',
      unlock_level: 1
    },
    {
      id: 'throwing_axes',
      name: 'Throwing Axes',
      category: 'throwables',
      price: 50,
      description: 'High damage throwing weapons',
      unlock_level: 23
    },
    {
      id: 'throwing_spear',
      name: 'Throwing Spear',
      category: 'throwables',
      price: 150,
      description: 'Long range throwing spear with high damage',
      unlock_level: 40
    }
  ],
  pocket_pistols: [
    {
      id: 'quad_derringer',
      name: 'Quad Derringer',
      category: 'pocket_pistols',
      price: 35,
      description: 'Four-shot backup pistol',
      unlock_level: 1
    },
    {
      id: 'derringer_pennyshot',
      name: 'Derringer Pennyshot',
      category: 'pocket_pistols',
      price: 26,
      description: 'Single-shot derringer with pennyshot',
      unlock_level: 6
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
    }
  ]
};

const TOOL_CATEGORIES = {
  medical: 'Medical',
  utility: 'Utility',
  traps: 'Traps', 
  distraction: 'Distraction',
  fire: 'Fire & Light',
  throwables: 'Throwing Weapons',
  pocket_pistols: 'Pocket Pistols',
  utility_advanced: 'Advanced Utility'
};