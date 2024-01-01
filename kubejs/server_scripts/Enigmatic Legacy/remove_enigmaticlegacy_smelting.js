// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info(
  "Remove enigmatic legacy smelting reloaded!"
);

onEvent("recipes", (event) => {
  event.remove({ id: "enigmaticlegacy:etherium_ingot_from_blasting" });
  event.remove({ id: "enigmaticlegacy:etherium_ingot" });
});

onEvent("item.tags", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
