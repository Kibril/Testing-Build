// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
event.recipes.createCrushing(
  [
    Item.of("2x kubejs:inpurified_iron"),
    Item.of("kubejs:inpurified_iron").withChance(0.25),
    Item.of("kubejs:inpurified_iron").withChance(0.10),
    Item.of("create:experience_nugget").withChance(0.75),
    Item.of("minecraft:cobblestone").withChance(0.12),
  ],
  "minecraft:iron_ore"
);
event.recipes.createCrushing(
  [
    Item.of("2x kubejs:inpurified_iron"),
    Item.of("kubejs:inpurified_iron").withChance(0.25),
    Item.of("kubejs:inpurified_iron").withChance(0.1),
    Item.of("create:experience_nugget").withChance(0.75),
    Item.of("minecraft:cobblestone").withChance(0.12),
  ],
  "minecraft:deepslate_iron_ore"
);
event.recipes.createCrushing(
  [
    Item.of("2x kubejs:inpurified_copper"),
    Item.of("kubejs:inpurified_copper").withChance(0.50),
    Item.of("kubejs:inpurified_copper").withChance(0.25),
    Item.of("create:experience_nugget").withChance(0.75),
    Item.of("minecraft:cobblestone").withChance(0.12),
  ],
  "minecraft:copper_ore"
);
event.recipes.createCrushing(
  [
    Item.of("2x kubejs:inpurified_copper"),
    Item.of("kubejs:inpurified_copper").withChance(0.5),
    Item.of("kubejs:inpurified_copper").withChance(0.25),
    Item.of("create:experience_nugget").withChance(0.75),
    Item.of("minecraft:cobblestone").withChance(0.12),
  ],
  "minecraft:deepslate_copper_ore"
);
event.recipes.createCrushing(
  [
    Item.of("2x kubejs:inpurified_gold"),
    Item.of("kubejs:inpurified_gold").withChance(0.25),
    Item.of("kubejs:inpurified_gold").withChance(0.1),
    Item.of("2x create:experience_nugget").withChance(0.75),
    Item.of("minecraft:cobblestone").withChance(0.12),
  ],
  "minecraft:gold_ore"
);
event.recipes.createCrushing(
  [
    Item.of("2x kubejs:inpurified_gold"),
    Item.of("kubejs:inpurified_gold").withChance(0.25),
    Item.of("kubejs:inpurified_gold").withChance(0.1),
    Item.of("2x create:experience_nugget").withChance(0.75),
    Item.of("minecraft:cobblestone").withChance(0.12),
  ],
  "minecraft:deepslate_gold_ore"
);
event.recipes.createCrushing(
  [
    Item.of("2x kubejs:inpurified_zinc"),
    Item.of("kubejs:inpurified_zinc").withChance(0.25),
    Item.of("create:experience_nugget").withChance(0.75),
    Item.of("minecraft:cobblestone").withChance(0.12),
  ],
  "create:zinc_ore"
);
event.recipes.createCrushing(
  [
    Item.of("2x kubejs:inpurified_zinc"),
    Item.of("kubejs:inpurified_zinc").withChance(0.25),
    Item.of("create:experience_nugget").withChance(0.75),
    Item.of("minecraft:cobblestone").withChance(0.12),
  ],
  "create:deepslate_zinc_ore"
);
event.recipes.createCrushing(
  [
    Item.of("2x kubejs:inpurified_aluminum"),
    Item.of("kubejs:inpurified_aluminum").withChance(0.25),
    Item.of("create:experience_nugget").withChance(0.75),
    Item.of("minecraft:cobblestone").withChance(0.12),
  ],
  "tinkers_reforged:aluminum_ore"
);
event.recipes.createCrushing(
  [
    Item.of("2x kubejs:inpurified_aluminum"),
    Item.of("kubejs:inpurified_aluminum").withChance(0.25),
    Item.of("create:experience_nugget").withChance(0.75),
    Item.of("minecraft:cobblestone").withChance(0.12),
  ],
  "tinkers_reforged:deepslate_aluminum_ore"
);
event.recipes.createCrushing(
  [
    Item.of("2x kubejs:inpurified_cobalt"),
    Item.of("kubejs:inpurified_cobalt").withChance(0.75),
    Item.of("4x create:experience_nugget").withChance(0.75),
    Item.of("minecraft:netherrack").withChance(0.12),
  ],
  "tconstruct:cobalt_ore"
);
event.recipes.createCrushing(
  [
    Item.of("2x kubejs:inpurified_tin"),
    Item.of("kubejs:inpurified_tin").withChance(0.75),
    Item.of("create:experience_nugget").withChance(0.75),
    Item.of("minecraft:cobblestone").withChance(0.12),
  ],
  "create_dd:tin_ore"
);
event.recipes.createCrushing(
  [
    Item.of("2x kubejs:inpurified_tin"),
    Item.of("kubejs:inpurified_tin").withChance(0.75),
    Item.of("create:experience_nugget").withChance(0.75),
    Item.of("minecraft:cobblestone").withChance(0.12),
  ],
  "create_dd:deepslate_tin_ore"
);
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})