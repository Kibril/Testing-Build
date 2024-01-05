// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info(
  "Remove undergarden smelting reloaded!"
);

onEvent("recipes", (event) => {
  event.remove({ id: "undergarden:blast_depthrock_coal_ore" });
  event.remove({ id: "undergarden:smelt_depthrock_coal_ore" });
  event.remove({ id: "undergarden:blast_shiverstone_coal_ore" });
  event.remove({ id: "undergarden:smelt_shiverstone_coal_ore" });
  event.remove({ id: "undergarden:blast_depthrock_iron_ore" });
  event.remove({ id: "undergarden:smelt_depthrock_iron_ore" });
  event.remove({ id: "undergarden:blast_shiverstone_iron_ore" });
  event.remove({ id: "undergarden:smelt_shiverstone_iron_ore" });
  event.remove({ id: "undergarden:blast_depthrock_gold_ore" });
  event.remove({ id: "undergarden:smelt_depthrock_gold_ore" });
  event.remove({ id: "undergarden:blast_depthrock_diamond_ore" });
  event.remove({ id: "undergarden:smelt_depthrock_diamond_ore" });
  event.remove({ id: "undergarden:blast_shiverstone_diamond_ore" });
  event.remove({ id: "undergarden:smelt_shiverstone_diamond_ore" });
  event.remove({ id: "undergarden:blast_depthrock_cloggrum_ore" });
  event.remove({ id: "undergarden:smelt_depthrock_cloggrum_ore" });
  event.remove({ id: "undergarden:blast_shiverstone_cloggrum_ore" });
  event.remove({ id: "undergarden:smelt_shiverstone_cloggrum_ore" });
  event.remove({ id: "undergarden:blast_shiverstone_froststeel_ore" });
  event.remove({ id: "undergarden:smelt_shiverstone_froststeel_ore" });
  event.remove({ id: "undergarden:blast_froststeel_item" });
  event.remove({ id: "undergarden:smelt_froststeel_item" });
  event.remove({ id: "undergarden:blast_depthrock_utherium_ore" });
  event.remove({ id: "undergarden:smelt_depthrock_utherium_ore" });
  event.remove({ id: "undergarden:blast_shiverstone_utherium_ore" });
  event.remove({ id: "undergarden:smelt_shiverstone_utherium_ore" });
  event.remove({ id: "undergarden:blast_utherium_item" });
  event.remove({ id: "undergarden:smelt_utherium_item" });
  event.remove({ id: "undergarden:blast_depthrock_regalium_ore" });
  event.remove({ id: "undergarden:smelt_depthrock_regalium_ore" });
  event.remove({ id: "undergarden:blast_shiverstone_regalium_ore" });
  event.remove({ id: "undergarden:smelt_shiverstone_regalium_ore" });
});

onEvent("item.tags", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
