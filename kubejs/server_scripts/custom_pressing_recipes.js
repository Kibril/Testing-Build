onEvent('recipes', event => {
event.custom({
  type: "create:compacting",
  ingredients: [
    {
      item: "create:crushed_raw_iron",
    },
    {
      item: "tconstruct:ingot_cast",
    },
  ],
  results: [
    {
      item: "minecraft:iron_ingot",
    },
    {
      item: "tconstruct:ingot_cast",
    },
  ],
  heatRequirement: "heated",
});
event.custom({
  type: "create:compacting",
  ingredients: [
    {
      item: "create:crushed_raw_copper",
    },
    {
      item: "tconstruct:ingot_cast",
    },
  ],
  results: [
    {
      item: "minecraft:copper_ingot",
    },
    {
      item: "tconstruct:ingot_cast",
    },
  ],
  heatRequirement: "heated",
});
event.custom({
  type: "create:compacting",
  ingredients: [
    {
      item: "create:crushed_raw_gold",
    },
    {
      item: "tconstruct:ingot_cast",
    },
  ],
  results: [
    {
      item: "minecraft:gold_ingot",
    },
    {
      item: "tconstruct:ingot_cast",
    },
  ],
  heatRequirement: "heated",
});
event.custom({
  type: "create:compacting",
  ingredients: [
    {
      item: "create:crushed_raw_zinc",
    },
    {
      item: "tconstruct:ingot_cast",
    },
  ],
  results: [
    {
      item: "create:zinc_ingot",
    },
    {
      item: "tconstruct:ingot_cast",
    },
  ],
  heatRequirement: "heated",
});
event.custom({
  type: "create:compacting",
  ingredients: [
    {
      item: "create:crushed_raw_aluminum",
    },
    {
      item: "tconstruct:ingot_cast",
    },
  ],
  results: [
    {
      item: "tinkers_reforged:aluminum_ingot",
    },
    {
      item: "tconstruct:ingot_cast",
    },
  ],
  heatRequirement: "heated",
});
event.custom({
  type: "create:compacting",
  ingredients: [
    {
      item: "econstruct:crushed_raw_cobalt",
    },
    {
      item: "tconstruct:ingot_cast",
    },
  ],
  results: [
    {
      item: "tconstruct:cobalt_ingot",
    },
    {
      item: "tconstruct:ingot_cast",
    },
  ],
  heatRequirement: "heated",
});
})
//event.recipes.createCompacting("minecraft:iron_ingot", ["create:crushed_raw_iron", "tconstruct:ingot_cast"]).heated();
//event.recipes.createCompacting("minecraft:gold_ingot", ["create:crushed_raw_gold"]).heated();
//event.recipes.createCompacting("minecraft:copper_ingot", ["create:crushed_raw_copper"]).heated();
//event.recipes.createCompacting("create:zinc_ingot", ["create:crushed_raw_zinc"]).heated();
///event.recipes.createCompacting("create_dd:tin_ingot", ["create:crushed_raw_tin"]).heated();
///event.recipes.createCompacting("tinkers_reforged:aluminum_ingot", ["create:crushed_raw_aluminum"]).heated();
//event.recipes.createCompacting("tconstruct:cobalt_ingot", ["econstruct:crushed_raw_cobalt"]).heated();


