const MAPS = {
  stillwater_bayou: {
    id: 'stillwater_bayou',
    name: 'Stillwater Bayou',
    theme: 'Louisiana swamp',
    description: 'Dense bayou environment with murky waters and twisted trees. The original Hunt: Showdown map featuring dark, atmospheric swampland with Spanish moss and shallow water hazards.',
    release_date: 'Launch',
    atmosphere: 'Dark swampland',
    size: '1000m x 1000m',
    compounds: [
      { name: "Alain & Son's Fish", boss_lair: true },
      { name: "Alice Farm", boss_lair: true },
      { name: "Blanchett Graves", boss_lair: true },
      { name: "Catfish Grove", boss_lair: true },
      { name: "Cyprus Huts", boss_lair: true },
      { name: "Darrow Livestock", boss_lair: true },
      { name: "Davant Ranch", boss_lair: true },
      { name: "Healing Waters Church", boss_lair: true },
      { name: "Lockbay Docks", boss_lair: true },
      { name: "Pitching Crematorium", boss_lair: true },
      { name: "Port Reeker", boss_lair: true },
      { name: "Reynard Mill & Lumber", boss_lair: true },
      { name: "Scupper Lake", boss_lair: true },
      { name: "Stillwater Bend", boss_lair: true },
      { name: "The Chapel of Madonna Noir", boss_lair: true },
      { name: "The Slaughterhouse", boss_lair: true }
    ],
    extraction_points: 15,
    special_features: [
      'Water hazards slow movement',
      'Dense vegetation provides cover',
      'Sound traps: crows, chains, glass',
      'Dark atmospheric lighting',
      'Water devils in deep water'
    ],
    strategic_notes: [
      'Shallow water creates sound and slows movement',
      'Dense cover reduces visibility',
      'Multiple water crossings create chokepoints',
      'Spanish moss provides natural camouflage'
    ]
  },
  lawson_delta: {
    id: 'lawson_delta',
    name: 'Lawson Delta',
    theme: 'Louisiana industrial/rural',
    description: 'Industrial and rural mix with more open areas than Stillwater. Features a combination of farmland, industrial sites, and rail infrastructure creating diverse strategic opportunities.',
    release_date: 'November 15, 2018',
    atmosphere: 'Industrial farmland',
    size: '1000m x 1000m',
    compounds: [
      { name: "Arden Parish", boss_lair: true },
      { name: "Blanc Brinery", boss_lair: true },
      { name: "Bradley & Craven Brickworks", boss_lair: true },
      { name: "C&A Lumber", boss_lair: true },
      { name: "Fort Carmick", boss_lair: true },
      { name: "Godard Docks", boss_lair: true },
      { name: "Golden Acres", boss_lair: true },
      { name: "Hemlock and Hide", boss_lair: true },
      { name: "Iron Works", boss_lair: true },
      { name: "Lawson Station", boss_lair: true },
      { name: "Maw Battery", boss_lair: true },
      { name: "Nicholls Prison", boss_lair: true },
      { name: "Salter's Pork", boss_lair: true },
      { name: "Sweetbell Flour", boss_lair: true },
      { name: "Windy Run", boss_lair: true },
      { name: "Wolfshead Arsenal", boss_lair: true }
    ],
    extraction_points: 18,
    special_features: [
      'Industrial factories with complex interiors',
      'Open farmland with long sightlines',
      'Rail infrastructure creates chokepoints',
      'Mixed terrain: swamp, farmland, industrial',
      'Less dense vegetation than Stillwater'
    ],
    strategic_notes: [
      'Open areas favor long-range engagements',
      'Industrial buildings provide vertical advantage',
      'Train stations are high-traffic areas',
      'Mix of cover types requires adaptable strategy'
    ]
  },
  desalle: {
    id: 'desalle',
    name: 'DeSalle',
    theme: 'Autumn industrial/rural',
    description: 'Industrial and rural compounds set in a fall atmosphere. Features mining operations, elevated terrain, and seasonal coloring that affects camouflage and visibility.',
    release_date: 'July 20, 2021 (reintroduced June 18, 2025)',
    atmosphere: 'Autumn industrial',
    size: '1000m x 1000m',
    compounds: [
      { name: "Kingsnake Mine", boss_lair: true },
      { name: "Stanley Coal Company", boss_lair: true },
      { name: "Heritage Pork", boss_lair: true },
      { name: "Pearl Plantation", boss_lair: true },
      { name: "Moses Poultry", boss_lair: true },
      { name: "Weeping Stone Mill", boss_lair: true },
      { name: "Forked River Fishery", boss_lair: true },
      { name: "Ash Creek Lumber", boss_lair: true },
      { name: "Seven Sisters Estate", boss_lair: true },
      { name: "Pelican Island Prison", boss_lair: true },
      { name: "First Testimonial Church", boss_lair: true },
      { name: "Upper DeSalle", boss_lair: true },
      { name: "Fort Bolden", boss_lair: true },
      { name: "Darin Shipyard", boss_lair: true },
      { name: "Reeves Quarry", boss_lair: true },
      { name: "Lower DeSalle", boss_lair: true }
    ],
    extraction_points: 15,
    special_features: [
      'Verticality with hills and elevated terrain',
      'Mining operations with underground areas',
      'Autumn environment affects camouflage',
      'Diverse terrain: industrial, agricultural, residential',
      'Strategic high ground positions'
    ],
    strategic_notes: [
      'Elevation provides tactical advantages',
      'Autumn colors change visibility dynamics',
      'Mining areas offer unique close-quarters combat',
      'Varied compound layouts require flexibility'
    ]
  },
  mammons_gulch: {
    id: 'mammons_gulch',
    name: "Mammon's Gulch",
    theme: 'Colorado mountains',
    description: 'Rocky, mountainous terrain with mining operations. Wild West mining town atmosphere with verdant landscape now fetid and rotten. Features unique double-clue compounds.',
    release_date: 'August 15, 2024',
    atmosphere: 'Mountain mining town',
    size: '1000m x 1000m',
    compounds: [
      { name: "Blackthorn Stockyard", boss_lair: true, location: "main building" },
      { name: "The Gasworks", boss_lair: true, location: "North building ground floor", special: "Contains two clues" },
      { name: "Terminus Railyard", boss_lair: true, location: "main East building ground floor" },
      { name: "Grizzly Lodge", boss_lair: true, location: "main building, excludes basement" },
      { name: "O'Donovan Stone", boss_lair: true, location: "main Southwest building" },
      { name: "Monteros Malt", boss_lair: true, location: "main building" },
      { name: "East Mountain Corn", boss_lair: true, location: "main building" },
      { name: "Deadfall Timber", boss_lair: true, location: "main building ground floor" },
      { name: "La Plata Mine", boss_lair: true, location: "main building" },
      { name: "Oro Gordo Mine", boss_lair: true, location: "main building" },
      { name: "Split River Mill", boss_lair: true, location: "main building North section" },
      { name: "Machine Gorge", boss_lair: true, location: "main building" },
      { name: "Preston Oil Field", boss_lair: true, location: "main South building", special: "Contains two clues" },
      { name: "Kingfisher Foundry", boss_lair: true, location: "Southeast section" },
      { name: "Graystone Pit", boss_lair: true, location: "underground" },
      { name: "Miner's Folly", boss_lair: true, location: "main building, excludes ground floor" }
    ],
    extraction_points: 15,
    special_features: [
      'Mountain terrain with elevated positions',
      'Mining infrastructure: shafts and equipment',
      'Two double-clue compounds: The Gasworks & Preston Oil Field',
      'Unique environments: oil fields, mines, mountain lodges',
      'Rocky outcrops provide natural cover'
    ],
    strategic_notes: [
      'Verticality is key for positioning advantage',
      'Double-clue compounds are high-value targets',
      'Mining areas offer underground combat',
      'Mountain terrain creates natural chokepoints'
    ]
  }
};

const MAP_FEATURES = {
  extraction_mechanics: {
    duration: '30 seconds',
    team_extraction: 'Teammates can join during countdown',
    proximity_rule: 'Timer stops if enemies nearby',
    audio_cues: 'Transport makes noise when enemies approach',
    transport_types: ['Armored carriages', 'Steamboats']
  },
  universal_elements: {
    sound_traps: ['Crows', 'Dogs', 'Horses', 'Chains', 'Glass'],
    environmental_hazards: ['Fire barrels', 'Oil slicks', 'Lanterns'],
    water_hazards: ['Deep water slows movement', 'Water devils'],
    strategic_structures: ['Watch towers', 'Hunting towers', 'Supply points', 'Arsenals']
  },
  gameplay_mechanics: {
    compounds_per_map: 16,
    random_extractions: 3,
    boss_spawn_locations: 'Any compound can host boss lair',
    spawn_system: 'Random from predefined locations with 110m minimum separation',
    clue_system: 'Each compound contains at least one clue location'
  }
};

const BOSS_TYPES = {
  assassin: {
    name: 'Assassin',
    health: 625,
    behavior: 'Swarm of insects, can clone itself',
    weaknesses: 'Fire damage',
    drops: 'Assassin Token'
  },
  butcher: {
    name: 'Butcher',
    health: 1000,
    behavior: 'Melee focused, fire attacks',
    weaknesses: 'Poison damage',
    drops: 'Butcher Token'
  },
  spider: {
    name: 'Spider',
    health: 1125,
    behavior: 'Wall climbing, web attacks',
    weaknesses: 'Rending damage',
    drops: 'Spider Token'
  },
  scrapbeak: {
    name: 'Scrapbeak',
    health: 1000,
    behavior: 'Collects concertina wire, throws items',
    weaknesses: 'Blunt damage',
    drops: 'Scrapbeak Token'
  },
  rotjaw: {
    name: 'Rotjaw',
    health: 1200,
    behavior: 'Amphibious, powerful bite attacks',
    weaknesses: 'Poison damage',
    drops: 'Rotjaw Token'
  }
};