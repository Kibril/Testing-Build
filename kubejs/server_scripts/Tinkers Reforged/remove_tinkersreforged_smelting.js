// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info(
  "Remove enigmatic legacy smelting reloaded!"
);

onEvent("recipes", (event) => {
  event.remove({ id: "tinkers_reforged:blazing_copper_ingot_from_smelting_blazing_copper_dust" });
  event.remove({ id: "tinkers_reforged:aluminum_ingot_from_smelting_aluminum_dust" });
  event.remove({ id: "tinkers_reforged:smelting/raw/aluminum" });
  event.remove({ id: "tinkers_reforged:smelting/ore/aluminum" });
  event.remove({ id: "tinkers_reforged:blasting/ore/aluminum" });
  event.remove({ id: "tinkers_reforged:blasting/raw/aluminum" });
  event.remove({ id: "tinkers_reforged:duralumin_ingot_from_smelting_duralumin_dust" });
  event.remove({ id: "tinkers_reforged:electrical_copper_ingot_from_smelting_electrical_copper_dust" });
  event.remove({ id: "tinkers_reforged:felsteel_ingot_from_smelting_felsteel_dust" });
  event.remove({ id: "tinkers_reforged:gausum_ingot_from_smelting_gausum_dust" });
  event.remove({ id: "tinkers_reforged:kepu_ingot_from_smelting_kepu_dust" });
  event.remove({ id: "tinkers_reforged:smelting/ore/kepu" });
  event.remove({ id: "tinkers_reforged:smelting/raw/kepu" });
  event.remove({ id: "tinkers_reforged:blasting/ore/kepu" });
  event.remove({ id: "tinkers_reforged:blasting/ore/kepu" });
  event.remove({ id: "tinkers_reforged:lavium_ingot_from_smelting_lavium_dust" });
  event.remove({ id: "tinkers_reforged:qivium_ingot_from_smelting_qivium_dust" });
  event.remove({ id: "tinkers_reforged:durasteel_ingot_from_smelting_durasteel_dust" });
  event.remove({ id: "tinkers_reforged:crusteel_ingot_from_smelting_crusteel_dust" });
  event.remove({ id: "tinkers_reforged:yokel_ingot_from_smelting_yokel_dust" });
  event.remove({ id: "tinkers_reforged:wavy_ingot_from_smelting_wavy_dust" });
  event.remove({ id: "tinkers_reforged:baolian_ingot_from_smelting_baolian_dust" });
  event.remove({ id: "tinkers_reforged:blasting/ore/epidote" });
  event.remove({ id: "tinkers_reforged:smelting/ore/epidote" });
  event.remove({ id: "tinkers_reforged:galu_ingot_from_smelting_galu_dust" });
  event.remove({ id: "tinkers_reforged:magma_steel_ingot_from_smelting_magma_steel_dust" });
  event.remove({ id: "tinkers_reforged:cyber_steel_ingot_from_smelting_cyber_steel_dust" });
  event.remove({ id: "tinkers_reforged:gelot_ingot_from_smelting_gelot_dust" });
  event.remove({ id: "tinkers_reforged:piroot_ingot_from_smelting_piroot_dust" });
  event.remove({ id: "tinkers_reforged:smelting/ore/hureaulite" });
  event.remove({ id: "tinkers_reforged:blasting/ore/hureaulite" });
  event.remove({ id: "tinkers_reforged:smelting/ore/red_beryl" });
  event.remove({ id: "tinkers_reforged:blasting/ore/red_beryl" });
});

onEvent("item.tags", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
