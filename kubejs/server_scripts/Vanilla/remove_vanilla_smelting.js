// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info(
  "Remove vanilla smelting reloaded!"
);

onEvent("recipes", (event) => {
  event.remove({ id: "minecraft:coal_from_blasting_coal_ore" });
  event.remove({ id: "minecraft:coal_from_smelting_coal_ore" });
  event.remove({ id: "minecraft:coal_from_blasting_deepslate_coal_ore" });
  event.remove({ id: "minecraft:coal_from_smelting_deepslate_coal_ore" });
  event.remove({ id: "minecraft:iron_ingot_from_blasting_iron_ore" });
  event.remove({ id: "minecraft:iron_ingot_from_smelting_iron_ore" });
  event.remove({ id: "minecraft:iron_ingot_from_blasting_deepslate_iron_ore" });
  event.remove({ id: "minecraft:iron_ingot_from_smelting_deepslate_iron_ore" });
  event.remove({ id: "minecraft:iron_ingot_from_blasting_raw_iron" });
  event.remove({ id: "minecraft:iron_ingot_from_smelting_raw_iron" });
  event.remove({ id: "minecraft:copper_ingot_from_blasting_copper_ore" });
  event.remove({ id: "minecraft:copper_ingot_from_smelting_copper_ore" });
  event.remove({ id: "minecraft:copper_ingot_from_blasting_deepslate_copper_ore" });
  event.remove({ id: "minecraft:copper_ingot_from_smelting_deepslate_copper_ore" });
  event.remove({ id: "minecraft:copper_ingot_from_blasting_raw_copper" });
  event.remove({ id: "minecraft:copper_ingot_from_smelting_raw_copper" });
  event.remove({ id: "minecraft:gold_ingot_from_blasting_gold_ore" });
  event.remove({ id: "minecraft:gold_ingot_from_smelting_gold_ore" });
  event.remove({ id: "minecraft:gold_ingot_from_blasting_deepslate_gold_ore" });
  event.remove({ id: "minecraft:gold_ingot_from_smelting_deepslate_gold_ore" });
  event.remove({ id: "minecraft:gold_ingot_from_blasting_raw_gold" });
  event.remove({ id: "minecraft:gold_ingot_from_smelting_raw_gold" });
  event.remove({ id: "minecraft:redstone_from_blasting_redstone_ore" });
  event.remove({ id: "minecraft:redstone_from_smelting_redstone_ore" });
  event.remove({ id: "minecraft:redstone_from_blasting_deepslate_redstone_ore" });
  event.remove({ id: "minecraft:redstone_from_smelting_deepslate_redstone_ore" });
  event.remove({ id: "minecraft:emerald_from_blasting_emerald_ore" });
  event.remove({ id: "minecraft:emerald_from_smelting_emerald_ore" });
  event.remove({ id: "minecraft:emerald_from_blasting_deepslate_emerald_ore" });
  event.remove({ id: "minecraft:emerald_from_smelting_deepslate_emerald_ore" });
  event.remove({ id: "minecraft:lapis_lazuli_from_blasting_lapis_ore" });
  event.remove({ id: "minecraft:lapis_lazuli_from_smelting_lapis_ore" });
  event.remove({ id: "minecraft:lapis_lazuli_from_blasting_deepslate_lapis_ore" });
  event.remove({ id: "minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore" });
  event.remove({ id: "minecraft:diamond_from_blasting_diamond_ore" });
  event.remove({ id: "minecraft:diamond_from_smelting_diamond_ore" });
  event.remove({ id: "minecraft:diamond_from_blasting_deepslate_diamond_ore" });
  event.remove({ id: "minecraft:diamond_from_smelting_deepslate_diamond_ore" });
  event.remove({ id: "minecraft:gold_ingot_from_blasting_nether_gold_ore" });
  event.remove({ id: "minecraft:gold_ingot_from_smelting_nether_gold_ore" });
  event.remove({ id: "minecraft:quartz_from_blasting" });
  event.remove({ id: "minecraft:quartz" });
});

onEvent("item.tags", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
