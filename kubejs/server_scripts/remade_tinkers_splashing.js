onEvent('recipes', event => {
	event.custom({
    type: "create:splashing",
    ingredients: [
      {
        item: "kubejs:inpurified_aluminum",
      },
    ],
    results: [
      {
        item: "create:crushed_raw_aluminum",
        count: 1,
      },
      {
        item: "minecraft:lapis_lazuli",
        chance: 0.25,
      },
    ],
  });
	event.custom({
    type: "create:splashing",
    ingredients: [
      {
        item: "kubejs:inpurified_iron",
      },
    ],
    results: [
      {
        item: "create:crushed_raw_iron",
        count: 1,
      },
      {
        item: "minecraft:redstone",
        chance: 0.75,
      },
    ],
  });
	event.custom({
    type: "create:splashing",
    ingredients: [
      {
        item: "kubejs:inpurified_copper",
      },
    ],
    results: [
      {
        item: "create:crushed_raw_copper",
        count: 1,
      },
      {
        item: "minecraft:clay_ball",
        chance: 0.5,
      },
    ],
  });
	event.custom({
    type: "create:splashing",
    ingredients: [
      {
        item: "kubejs:inpurified_gold",
      },
    ],
    results: [
      {
        item: "create:crushed_raw_gold",
        count: 1,
      },
      {
        item: "minecraft:quartz",
        chance: 0.5,
      },
    ],
  });
	event.custom({
    type: "create:splashing",
    ingredients: [
      {
        item: "kubejs:inpurified_zinc",
      },
    ],
    results: [
      {
        item: "create:crushed_raw_zinc",
        count: 1,
      },
      {
        item: "minecraft:gunpowder",
        chance: 0.25,
      },
    ],
  });
	event.custom({
    type: "create:splashing",
    ingredients: [
      {
        item: "kubejs:inpurified_cobalt",
      },
    ],
    results: [
      {
        item: "econstruct:crushed_raw_cobalt",
        count: 1,
      },
      {
        item: "create:powdered_obsidian",
        chance: 0.5,
      },
    ],
  });
})
