const TRAITS = {
  offensive: [
    {
      id: 'assailant',
      name: 'Assailant',
      category: 'offensive',
      cost: 1,
      description: 'Increases melee effectiveness of Throwing Knives and Throwing Axes. Melee weapons found in the world can be thrown.',
      unlock_level: 18,
      type: 'regular'
    },
    {
      id: 'berserker',
      name: 'Berserker',
      category: 'offensive',
      cost: 0,
      description: 'All melee attacks do double damage.',
      unlock_level: 1,
      type: 'scarce'
    },
    {
      id: 'bolt_thrower',
      name: 'Bolt Thrower',
      category: 'offensive',
      cost: 3,
      description: 'Reduced reload time for Crossbows, Bomb Launchers, and Bomb Lances.',
      unlock_level: 32,
      type: 'regular'
    },
    {
      id: 'fanning',
      name: 'Fanning',
      category: 'offensive',
      cost: 8,
      description: 'Faster rate of fire when using 1-handed single-action pistols.',
      unlock_level: 12,
      type: 'regular'
    },
    {
      id: 'fast_fingers',
      name: 'Fast Fingers',
      category: 'offensive',
      cost: 4,
      description: 'Prepare some bullets in hand to reload single-shot rifles, and their non-pistol variants, faster.',
      unlock_level: 11,
      type: 'regular'
    },
    {
      id: 'hundred_hands',
      name: 'Hundred Hands',
      category: 'offensive',
      cost: 2,
      description: 'Increases the damage of a Hunting Bow and reduces sway while at full draw. Allows use of arrows in melee attacks.',
      unlock_level: 16,
      type: 'regular'
    },
    {
      id: 'iron_eye',
      name: 'Iron Eye',
      category: 'offensive',
      cost: 3,
      description: 'Remain in iron sights between shots when firing bolt-action, lever-action, and pump-action Weapons.',
      unlock_level: 9,
      type: 'regular'
    },
    {
      id: 'levering',
      name: 'Levering',
      category: 'offensive',
      cost: 7,
      description: 'Faster rate of fire from the hip (First aim stage) when using lever-action weapons.',
      unlock_level: 6,
      type: 'regular'
    },
    {
      id: 'martialist',
      name: 'Martialist',
      category: 'offensive',
      cost: 2,
      description: 'Allows a Katana to be sheathed, which enables a first strike attack that does extra damage.',
      unlock_level: 28,
      type: 'regular'
    },
    {
      id: 'pitcher',
      name: 'Pitcher',
      category: 'offensive',
      cost: 4,
      description: 'Increased throwing range for all items using the aim helper.',
      unlock_level: 61,
      type: 'regular'
    },
    {
      id: 'scopesmith',
      name: 'Scopesmith',
      category: 'offensive',
      cost: 2,
      description: 'Remain in scope view after firing a shot while using any weapon with a scope.',
      unlock_level: 22,
      type: 'regular'
    },
    {
      id: 'steady_aim',
      name: 'Steady Aim',
      category: 'offensive',
      cost: 2,
      description: 'Weapon sway gradually lessens when you\'re looking through a scope or Aperture sights.',
      unlock_level: 30,
      type: 'regular'
    }
  ],
  defensive: [
    {
      id: 'adrenaline',
      name: 'Adrenaline',
      category: 'defensive',
      cost: 1,
      description: 'When you enter critical health, you will receive a small Stamina boost.',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'bloodless',
      name: 'Bloodless',
      category: 'defensive',
      cost: 3,
      description: 'Bleeding will not escalate from light to medium or intense bleeding.',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'bulwark',
      name: 'Bulwark',
      category: 'defensive',
      cost: 2,
      description: 'Reduce the damage from explosions by 50%. Vastly reduces the duration of being fully blinded by a Flash Bomb.',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'dauntless',
      name: 'Dauntless',
      category: 'defensive',
      cost: 1,
      description: 'Thrown explosives can be defused when interacting with them.',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'doctor',
      name: 'Doctor',
      category: 'defensive',
      cost: 9,
      description: 'Doubles the amount of Health restored by First Aid Kit.',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'hornskin',
      name: 'Hornskin',
      category: 'defensive',
      cost: 3,
      description: 'Reduce damage taken from blunt damage by 25%. Useful when fighting Armoreds and group of regular Grunts.',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'mithridatist',
      name: 'Mithridatist',
      category: 'defensive',
      cost: 3,
      description: 'Drastically reduces the time needed to recover from poisoning.',
      unlock_level: 40,
      type: 'regular'
    },
    {
      id: 'physician',
      name: 'Physician',
      category: 'defensive',
      cost: 5,
      description: 'Reduce the time needed to bandage.',
      unlock_level: 45,
      type: 'regular'
    },
    {
      id: 'salveskin',
      name: 'Salveskin',
      category: 'defensive',
      cost: 2,
      description: 'While alive, reduce all fire damage and stop burn speed and stop time from escalating.',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'vigor',
      name: 'Vigor',
      category: 'defensive',
      cost: 3,
      description: 'While in Dark Sight, doubles the rate at which Health and Stamina regenerate.',
      unlock_level: 57,
      type: 'regular'
    }
  ],
  movement: [
    {
      id: 'gator_legs',
      name: 'Gator Legs',
      category: 'movement',
      cost: 3,
      description: 'Walk and sprint faster in deep water. Also make less noise while crouched in water.',
      unlock_level: 56,
      type: 'regular'
    },
    {
      id: 'greyhound',
      name: 'Greyhound',
      category: 'movement',
      cost: 2,
      description: 'Sprint at full speed for a longer duration.',
      unlock_level: 3,
      type: 'regular'
    },
    {
      id: 'kiteskin',
      name: 'Kiteskin',
      category: 'movement',
      cost: 1,
      description: 'Significantly reduces fall damage.',
      unlock_level: 51,
      type: 'regular'
    },
    {
      id: 'lightfoot',
      name: 'Lightfoot',
      category: 'movement',
      cost: 5,
      description: 'Vault, fall and climb ladders silently. Also reduces the sound of walking through noise traps.',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'shadow_leap',
      name: 'Shadow Leap',
      category: 'movement',
      cost: 0,
      description: 'Using Dark Sight, channel a Monster within range to jump to its location and kill it instantly. Excludes Targets. (50m)',
      unlock_level: 1,
      type: 'scarce'
    },
    {
      id: 'surefoot',
      name: 'Surefoot',
      category: 'movement',
      cost: 6,
      description: 'You can sprint while holding primed Throwables, First Aid Kits, and Consumable Shots.',
      unlock_level: 20,
      type: 'regular'
    }
  ],
  supportive: [
    {
      id: 'ambidextrous',
      name: 'Ambidextrous',
      category: 'supportive',
      cost: 3,
      description: 'Quicker reloading of matched pairs, and custom clip reloads for semi-auto pistol sets.',
      unlock_level: 34,
      type: 'regular'
    },
    {
      id: 'beastface',
      name: 'Beastface',
      category: 'supportive',
      cost: 4,
      description: 'Reduce reaction range of animals (doesn\'t affect Monsters like Hellhounds).',
      unlock_level: 42,
      type: 'regular'
    },
    {
      id: 'blade_seer',
      name: 'Blade Seer',
      category: 'supportive',
      cost: 1,
      description: 'Bolts, Arrows, Throwing Axes, Throwing Knives and Throwing Spears are highlighted in Dark Sight for better visibility. Also applies to Beetle view. (25m)',
      unlock_level: 54,
      type: 'regular'
    },
    {
      id: 'blast_sense',
      name: 'Blast Sense',
      category: 'supportive',
      cost: 2,
      description: 'Loud sounds such as gunshots and explosions are highlighted while in Dark Sight. Gunshots from Silenced Weapons with Subsonic Ammo cannot be seen. (200m)',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'bulletgrubber',
      name: 'Bulletgrubber',
      category: 'supportive',
      cost: 4,
      description: 'Recover unfired round when performing partial reloads.',
      unlock_level: 26,
      type: 'regular'
    },
    {
      id: 'conduit',
      name: 'Conduit',
      category: 'supportive',
      cost: 5,
      description: 'Get a health and stamina boost when your team picks up a Clue or closes a Rift. Solo: Doubles the effects of investigating a Clue.',
      unlock_level: 38,
      type: 'regular'
    },
    {
      id: 'death_cheat',
      name: 'Death Cheat',
      category: 'supportive',
      cost: 0,
      description: 'You will not lose your Hunter if you fail to extract, but equipment and missing Health Chunks will be lost.',
      unlock_level: 1,
      type: 'burn'
    },
    {
      id: 'decoy_supply',
      name: 'Decoy Supply',
      category: 'supportive',
      cost: 1,
      description: 'Restock all types of Decoys from ammo crates.',
      unlock_level: 53,
      type: 'regular'
    },
    {
      id: 'determination',
      name: 'Determination',
      category: 'supportive',
      cost: 1,
      description: 'Stamina recovery starts sooner.',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'frontiersman',
      name: 'Frontiersman',
      category: 'supportive',
      cost: 5,
      description: 'Carried Tools can be used one extra time.',
      unlock_level: 47,
      type: 'regular'
    },
    {
      id: 'ghoul',
      name: 'Ghoul',
      category: 'supportive',
      cost: 3,
      description: 'Killing Monsters restores a small amount of health.',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'magpie',
      name: 'Magpie',
      category: 'supportive',
      cost: 1,
      description: 'Receive three short effects when picking up a Bounty Token: Antidote, Stamina and Regeneration. Solo: Dark Sight Boost capacity and all Boost sources are doubled.',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'necromancer',
      name: 'Necromancer',
      category: 'supportive',
      cost: 4,
      description: 'Using Dark Sight, revive a downed teammate from a distance. (25m) Solo: You can revive your downed Hunter. Triggers a Full Health Restoration upon revive.',
      unlock_level: 1,
      type: 'burn'
    },
    {
      id: 'packmule',
      name: 'Packmule',
      category: 'supportive',
      cost: 4,
      description: 'Receive an additional Tool or Consumable when looting dead enemy Hunters or opening item boxes.',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'pain_sense',
      name: 'Pain Sense',
      category: 'supportive',
      cost: 2,
      description: 'See damaged Hunters through Dark Sight.',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'poacher',
      name: 'Poacher',
      category: 'supportive',
      cost: 3,
      description: 'Animals give more Hunt Dollars when looted.',
      unlock_level: 12,
      type: 'regular'
    },
    {
      id: 'poltergeist',
      name: 'Poltergeist',
      category: 'supportive',
      cost: 2,
      description: 'Interact with doors and windows at a distance.',
      unlock_level: 10,
      type: 'regular'
    },
    {
      id: 'quartermaster',
      name: 'Quartermaster',
      category: 'supportive',
      cost: 6,
      description: 'Can equip a medium slot Weapon in addition to a large slot Weapon.',
      unlock_level: 1,
      type: 'regular'
    },
    {
      id: 'rampage',
      name: 'Rampage',
      category: 'supportive',
      cost: 5,
      description: 'Gain damage boost after killing enemies.',
      unlock_level: 22,
      type: 'regular'
    },
    {
      id: 'relentless',
      name: 'Relentless',
      category: 'supportive',
      cost: 4,
      description: 'Stamina regenerates faster.',
      unlock_level: 15,
      type: 'regular'
    },
    {
      id: 'remedy',
      name: 'Remedy',
      category: 'supportive',
      cost: 3,
      description: 'Apply first aid faster.',
      unlock_level: 14,
      type: 'regular'
    },
    {
      id: 'resilience',
      name: 'Resilience',
      category: 'supportive',
      cost: 3,
      description: 'Your Hunter is revived with up to full health.',
      unlock_level: 4,
      type: 'regular'
    },
    {
      id: 'serpent',
      name: 'Serpent',
      category: 'supportive',
      cost: 4,
      description: 'Using Dark Sight, interact with nearby Clues, Rifts, Banishable Targets and abandoned Bounty from a safe distance. (25m) Solo: Interaction range increased. (50m)',
      unlock_level: 14,
      type: 'regular'
    },
    {
      id: 'shadow',
      name: 'Shadow',
      category: 'supportive',
      cost: 4,
      description: 'Crouch-walking is completely silent.',
      unlock_level: 20,
      type: 'regular'
    },
    {
      id: 'silent_killer',
      name: 'Silent Killer',
      category: 'supportive',
      cost: 3,
      description: 'Reduces the sound you make when performing melee attacks.',
      unlock_level: 60,
      type: 'regular'
    },
    {
      id: 'vigilant',
      name: 'Vigilant',
      category: 'supportive',
      cost: 2,
      description: 'See traps through Dark Sight.',
      unlock_level: 8,
      type: 'regular'
    },
    {
      id: 'vulture',
      name: 'Vulture',
      category: 'supportive',
      cost: 2,
      description: 'Looting a dead enemy Hunter will always reward you Hunt Dollars.',
      unlock_level: 24,
      type: 'regular'
    },
    {
      id: 'whispersmith',
      name: 'Whispersmith',
      category: 'supportive',
      cost: 1,
      description: 'Reduces noise when selecting equipment.',
      unlock_level: 49,
      type: 'regular'
    },
    {
      id: 'witness',
      name: 'Witness',
      category: 'supportive',
      cost: 1,
      description: 'See clues through Dark Sight from further away.',
      unlock_level: 1,
      type: 'regular'
    }
  ]
};

const TRAIT_CATEGORIES = {
  offensive: 'Offensive',
  defensive: 'Defensive',
  movement: 'Movement',
  supportive: 'Supportive'
};

const TRAIT_TYPES = {
  regular: 'Regular',
  scarce: 'Scarce',
  burn: 'Burn'
};

const TRAIT_SYSTEM = {
  maxTraits: 15,
  maxUpgradePoints: 50,
  costRange: { min: 0, max: 9 },
  refundCost: (cost) => Math.max(1, cost - 1)
};