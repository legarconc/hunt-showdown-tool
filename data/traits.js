const TRAITS = {
  offensive: [
    {
      id: 'assailant',
      name: 'Assailant',
      category: 'offensive',
      cost: 3,
      description: 'Deal more damage with melee attacks while at low health',
      unlock_level: 15
    },
    {
      id: 'berserker',
      name: 'Berserker',
      category: 'offensive',
      cost: 6,
      description: 'Deal significantly more melee damage while at low health',
      unlock_level: 25
    },
    {
      id: 'bolt_thrower',
      name: 'Bolt Thrower',
      category: 'offensive',
      cost: 3,
      description: 'Reduced reload time for crossbows',
      unlock_level: 12
    },
    {
      id: 'fanning',
      name: 'Fanning',
      category: 'offensive',
      cost: 8,
      description: 'Faster rate of fire when using 1-handed single-action pistols',
      unlock_level: 20
    },
    {
      id: 'fast_fingers',
      name: 'Fast Fingers',
      category: 'offensive',
      cost: 2,
      description: 'Faster reload speed for single-shot weapons',
      unlock_level: 8
    },
    {
      id: 'hundred_hands',
      name: 'Hundred Hands',
      category: 'offensive',
      cost: 4,
      description: 'Increases Hunting Bow damage at full draw by 10%',
      unlock_level: 18
    },
    {
      id: 'iron_eye',
      name: 'Iron Eye',
      category: 'offensive',
      cost: 3,
      description: 'Remain in iron sights view after firing',
      unlock_level: 10
    },
    {
      id: 'levering',
      name: 'Levering',
      category: 'offensive',
      cost: 4,
      description: 'Faster rate of fire from the hip when using lever-action weapons',
      unlock_level: 16
    },
    {
      id: 'martialist',
      name: 'Martialist',
      category: 'offensive',
      cost: 5,
      description: 'Deal more damage with thrown melee weapons',
      unlock_level: 22
    },
    {
      id: 'pitcher',
      name: 'Pitcher',
      category: 'offensive',
      cost: 3,
      description: 'Throw consumables farther and with more accuracy',
      unlock_level: 14
    },
    {
      id: 'scopesmith',
      name: 'Scopesmith',
      category: 'offensive',
      cost: 2,
      description: 'Remain in scope view after firing',
      unlock_level: 12
    },
    {
      id: 'steady_aim',
      name: 'Steady Aim',
      category: 'offensive',
      cost: 4,
      description: 'Reduced weapon sway when using scoped weapons',
      unlock_level: 18
    }
  ],
  defensive: [
    {
      id: 'adrenaline',
      name: 'Adrenaline',
      category: 'defensive',
      cost: 4,
      description: 'Move faster and vault higher when at low health',
      unlock_level: 16
    },
    {
      id: 'bloodless',
      name: 'Bloodless',
      category: 'defensive',
      cost: 3,
      description: 'Bleeding will not escalate from light to medium or intense bleeding',
      unlock_level: 14
    },
    {
      id: 'bulwark',
      name: 'Bulwark',
      category: 'defensive',
      cost: 2,
      description: 'Reduce damage from explosions and Bomb Lance harpoon attacks by 50%',
      unlock_level: 10
    },
    {
      id: 'dauntless',
      name: 'Dauntless',
      category: 'defensive',
      cost: 3,
      description: 'Reduced flinching when taking damage',
      unlock_level: 12
    },
    {
      id: 'doctor',
      name: 'Doctor',
      category: 'defensive',
      cost: 9,
      description: 'Doubles the amount of Health restored by First Aid Kits',
      unlock_level: 35
    },
    {
      id: 'hornskin',
      name: 'Hornskin',
      category: 'defensive',
      cost: 3,
      description: 'Reduce damage taken from blunt melee by 25%',
      unlock_level: 15
    },
    {
      id: 'mithridatist',
      name: 'Mithridatist',
      category: 'defensive',
      cost: 4,
      description: 'Reduced poison damage and duration',
      unlock_level: 18
    },
    {
      id: 'physician',
      name: 'Physician',
      category: 'defensive',
      cost: 5,
      description: 'Reduce the time needed to bandage yourself and teammates',
      unlock_level: 20
    },
    {
      id: 'salveskin',
      name: 'Salveskin',
      category: 'defensive',
      cost: 3,
      description: 'Reduced fire damage and burn duration',
      unlock_level: 16
    },
    {
      id: 'vigor',
      name: 'Vigor',
      category: 'defensive',
      cost: 6,
      description: 'Start with additional health chunks',
      unlock_level: 25
    }
  ],
  movement: [
    {
      id: 'gator_legs',
      name: 'Gator Legs',
      category: 'movement',
      cost: 3,
      description: 'Walk and sprint faster in deep water',
      unlock_level: 12
    },
    {
      id: 'greyhound',
      name: 'Greyhound',
      category: 'movement',
      cost: 5,
      description: 'Sprint at full speed for a longer duration',
      unlock_level: 18
    },
    {
      id: 'kiteskin',
      name: 'Kiteskin',
      category: 'movement',
      cost: 1,
      description: 'Reduce damage from falling by 50%',
      unlock_level: 5
    },
    {
      id: 'lightfoot',
      name: 'Lightfoot',
      category: 'movement',
      cost: 5,
      description: 'Vault, fall, and climb ladders silently',
      unlock_level: 22
    },
    {
      id: 'shadow_leap',
      name: 'Shadow Leap',
      category: 'movement',
      cost: 4,
      description: 'Jump further and higher',
      unlock_level: 16
    },
    {
      id: 'surefoot',
      name: 'Surefoot',
      category: 'movement',
      cost: 2,
      description: 'Move faster through rough terrain',
      unlock_level: 8
    }
  ],
  supportive: [
    {
      id: 'ambidextrous',
      name: 'Ambidextrous',
      category: 'supportive',
      cost: 2,
      description: 'Faster weapon switching',
      unlock_level: 10
    },
    {
      id: 'beastface',
      name: 'Beastface',
      category: 'supportive',
      cost: 3,
      description: 'Animals are less likely to react to your presence',
      unlock_level: 14
    },
    {
      id: 'blade_seer',
      name: 'Blade Seer',
      category: 'supportive',
      cost: 2,
      description: 'See melee weapons through Dark Sight',
      unlock_level: 8
    },
    {
      id: 'blast_sense',
      name: 'Blast Sense',
      category: 'supportive',
      cost: 1,
      description: 'See explosives through Dark Sight',
      unlock_level: 5
    },
    {
      id: 'bulletgrubber',
      name: 'Bulletgrubber',
      category: 'supportive',
      cost: 3,
      description: 'Recover unfired rounds when reloading',
      unlock_level: 12
    },
    {
      id: 'conduit',
      name: 'Conduit',
      category: 'supportive',
      cost: 5,
      description: 'Get Health and Stamina boost when team picks up Clue or closes Rift',
      unlock_level: 20
    },
    {
      id: 'death_cheat',
      name: 'Death Cheat',
      category: 'supportive',
      cost: 6,
      description: 'Survive fatal damage once per mission',
      unlock_level: 28
    },
    {
      id: 'decoy_supply',
      name: 'Decoy Supply',
      category: 'supportive',
      cost: 1,
      description: 'Restock all types of Decoys from ammo crates',
      unlock_level: 1
    },
    {
      id: 'determination',
      name: 'Determination',
      category: 'supportive',
      cost: 4,
      description: 'Revive teammates faster',
      unlock_level: 16
    },
    {
      id: 'frontiersman',
      name: 'Frontiersman',
      category: 'supportive',
      cost: 7,
      description: 'Carried Tools can be used one extra time',
      unlock_level: 30
    },
    {
      id: 'ghoul',
      name: 'Ghoul',
      category: 'supportive',
      cost: 4,
      description: 'Regenerate health by looting Hunters',
      unlock_level: 18
    },
    {
      id: 'magpie',
      name: 'Magpie',
      category: 'supportive',
      cost: 2,
      description: 'See cash registers through Dark Sight',
      unlock_level: 6
    },
    {
      id: 'necromancer',
      name: 'Necromancer',
      category: 'supportive',
      cost: 4,
      description: 'Using Dark Sight, revive a downed partner at a distance',
      unlock_level: 20
    },
    {
      id: 'packmule',
      name: 'Packmule',
      category: 'supportive',
      cost: 6,
      description: 'Large weapons take up 2 slots instead of 3',
      unlock_level: 25
    },
    {
      id: 'pain_sense',
      name: 'Pain Sense',
      category: 'supportive',
      cost: 1,
      description: 'See damaged Hunters through Dark Sight',
      unlock_level: 3
    },
    {
      id: 'poacher',
      name: 'Poacher',
      category: 'supportive',
      cost: 3,
      description: 'Animals give more Hunt Dollars when looted',
      unlock_level: 12
    },
    {
      id: 'poltergeist',
      name: 'Poltergeist',
      category: 'supportive',
      cost: 2,
      description: 'Interact with doors and windows at a distance',
      unlock_level: 10
    },
    {
      id: 'quartermaster',
      name: 'Quartermaster',
      category: 'supportive',
      cost: 8,
      description: 'Equip a large weapon in a medium weapon slot',
      unlock_level: 32
    },
    {
      id: 'rampage',
      name: 'Rampage',
      category: 'supportive',
      cost: 5,
      description: 'Gain damage boost after killing enemies',
      unlock_level: 22
    },
    {
      id: 'relentless',
      name: 'Relentless',
      category: 'supportive',
      cost: 4,
      description: 'Stamina regenerates faster',
      unlock_level: 15
    },
    {
      id: 'remedy',
      name: 'Remedy',
      category: 'supportive',
      cost: 3,
      description: 'Apply first aid faster',
      unlock_level: 14
    },
    {
      id: 'resilience',
      name: 'Resilience',
      category: 'supportive',
      cost: 4,
      description: 'Health regenerates faster',
      unlock_level: 18
    },
    {
      id: 'serpent',
      name: 'Serpent',
      category: 'supportive',
      cost: 3,
      description: 'Interact with objects faster (revive, banish, etc.)',
      unlock_level: 16
    },
    {
      id: 'shadow',
      name: 'Shadow',
      category: 'supportive',
      cost: 4,
      description: 'Crouch-walking is completely silent',
      unlock_level: 20
    },
    {
      id: 'silent_killer',
      name: 'Silent Killer',
      category: 'supportive',
      cost: 3,
      description: 'Melee kills don\'t trigger sound traps',
      unlock_level: 12
    },
    {
      id: 'vigilant',
      name: 'Vigilant',
      category: 'supportive',
      cost: 2,
      description: 'See traps through Dark Sight',
      unlock_level: 8
    },
    {
      id: 'vulture',
      name: 'Vulture',
      category: 'supportive',
      cost: 1,
      description: 'Loot additional ammo from corpses',
      unlock_level: 1
    },
    {
      id: 'whispersmith',
      name: 'Whispersmith',
      category: 'supportive',
      cost: 2,
      description: 'Reload weapons more quietly',
      unlock_level: 10
    },
    {
      id: 'witness',
      name: 'Witness',
      category: 'supportive',
      cost: 1,
      description: 'See clues through Dark Sight from further away',
      unlock_level: 1
    }
  ]
};

const TRAIT_CATEGORIES = {
  offensive: 'Offensive',
  defensive: 'Defensive',
  movement: 'Movement',
  supportive: 'Supportive'
};

const TRAIT_SYSTEM = {
  maxTraits: 15,
  maxUpgradePoints: 50,
  costRange: { min: 1, max: 9 },
  refundCost: (cost) => Math.max(1, cost - 1)
};