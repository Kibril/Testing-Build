// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info(
  "Remove vanilla smelting reloaded!"
);

onEvent("recipes", (event) => {
  //////////
  //VANILA//
  //////////
  //vanila smelting remove
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
  //////////
  //CREATE//
  //////////
  //create smelting remove
  event.remove({ id: "create:blasting/zinc_ingot_from_ore" });
  event.remove({ id: "create:smelting/zinc_ingot_from_ore" });
  event.remove({ id: "create:blasting/zinc_ingot_from_raw_ore" });
  event.remove({ id: "create:smelting/zinc_ingot_from_raw_ore" });
  event.remove({ id: "create:blasting/iron_ingot_from_crushed" });
  event.remove({ id: "create:smelting/iron_ingot_from_crushed" });
  event.remove({ id: "create:blasting/gold_ingot_from_crushed" });
  event.remove({ id: "create:smelting/gold_ingot_from_crushed" });
  event.remove({ id: "create:blasting/copper_ingot_from_crushed" });
  event.remove({ id: "create:smelting/copper_ingot_from_crushed" });
  event.remove({ id: "create:blasting/zinc_ingot_from_crushed" });
  event.remove({ id: "create:smelting/zinc_ingot_from_crushed" });
  event.remove({ id: "create:blasting/tin_ingot_from_crushed" });
  event.remove({ id: "create:smelting/tin_ingot_from_crushed" });
  event.remove({ id: "create:blasting/gold_ingot_from_crushed" });
  event.remove({ id: "create:smelting/gold_ingot_from_crushed" });
  //create washing remove
  event.remove({ id: "create:splashing/crushed_raw_iron" });
  event.remove({ id: "create:splashing/crushed_raw_copper" });
  event.remove({ id: "create:splashing/crushed_raw_gold" });
  event.remove({ id: "create:splashing/crushed_raw_zinc" });
  event.remove({ id: "econstruct:create/splashing/crushed_raw_cobalt" });
  event.remove({ id: "create_dd:splashing/crushed_raw_tin" });
  //create crushing remove
  event.remove({ id: "create:crushing/iron_ore" });
  event.remove({ id: "create:crushing/copper_ore" });
  event.remove({ id: "create:crushing/gold_ore" });
  event.remove({ id: "create:crushing/zinc_ore" });
  event.remove({ id: "create:crushing/aluminum_ore" });
  event.remove({ id: "econstruct:create/crushing/cobalt_ore" });
  event.remove({ id: "create:crushing/tin_ore" });
  event.remove({ id: "create:crushing/deepslate_iron_ore" });
  event.remove({ id: "create:crushing/deepslate_copper_ore" });
  event.remove({ id: "create:crushing/deepslate_gold_ore" });
  event.remove({ id: "create:crushing/deepslate_zinc_ore" });
  event.remove({ id: "create:crushing/deepslate_aluminum_ore" });
  event.remove({ id: "create:crushing/deepslate_tin_ore" });
  //////////////
  //TCONSTRUCT//
  //////////////
  //tconstruct smelting remove
  event.remove({ id: "tconstruct:common/materials/cobalt_ingot_smelting" });
  event.remove({ id: "tconstruct:smeltery/melting/metal/iron/ore_singular" });
  event.remove({ id: "tconstruct:smeltery/melting/metal/copper/ore_dense" });
  event.remove({ id: "tconstruct:smeltery/melting/emerald/ore_singular" });
  event.remove({ id: "tconstruct:smeltery/melting/diamond/ore_singular" });
  event.remove({ id: "tconstruct:smeltery/melting/metal/gold/ore_singular" })
  event.remove({ id: "tconstruct:smeltery/melting/metal/zinc/ore_singular"})
  event.remove({ id: "tconstruct:smeltery/melting/metal/aluminum/ore_singular" })
  event.remove({ id: "tconstruct:smeltery/melting/metal/tin/ore_singular"})
  //tinkers_reforged smelting remove
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
  event.remove({ id: "tinkers_reforged:smeltery/melting/lapis/ore_dense" });
  event.remove({ id: "tinkers_reforged:smeltery/melting/kepu/ore_singular" });
  //tcintegrations smelting remove
  event.remove({ id: "tcintegrations:smeltery/melting/metal/cloggrum/ore_singular" })
  event.remove({ id: "tcintegrations:smeltery/melting/metal/cloggrum/ore_singular" })
  event.remove({ id: "tcintegrations:smeltery/melting/metal/froststeel/ore_singular" })
  //JAOPCA ALL RECIPES REMOVE
  event.remove({ input: "jaopca:create_crushed_ores.ironwood" });
  event.remove({ output: "jaopca:create_crushed_ores.ironwood" });
  event.remove({ input: "jaopca:create_crushed_ores.knightmetal" });
  event.remove({ output: "jaopca:create_crushed_ores.knightmetal" });
  event.remove({ input: "jaopca:create_crushed_ores.netherite_scrap" });
  event.remove({ output: "jaopca:create_crushed_ores.netherite_scrap" });
  event.remove({ input: "jaopca:create_crushed_ores.cobalt" });
  event.remove({ output: "jaopca:create_crushed_ores.cobalt" });
  //enigmaticlegacy smelting remove
  event.remove({ id: "enigmaticlegacy:etherium_ingot_from_blasting" });
  event.remove({ id: "enigmaticlegacy:etherium_ingot" });
  //create_dd smelting remove
  event.remove({ id: "create_dd:smelting/tin_ingot_from_ore" });
  event.remove({ id: "create_dd:blasting/tin_ingot_from_ore" });
  event.remove({ id: "create_dd:smelting/tin_ingot_from_raw_ore" });
  event.remove({ id: "create_dd:blasting/tin_ingot_from_raw_ore" });
  event.remove({ id: "create_dd:smelting/tin_ingot_from_crushed" });
  event.remove({ id: "create_dd:blasting/tin_ingot_from_crushed" });
});

onEvent("item.tags", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
