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
  //vanila crafting remove
  event.remove({ input: "minecraft:wooden_pickaxe" });
  event.remove({ output: "minecraft:wooden_pickaxe" });
  event.remove({ input: "minecraft:stone_pickaxe" });
  event.remove({ output: "minecraft:stone_pickaxe" });
  event.remove({ input: "minecraft:golden_pickaxe" });
  event.remove({ output: "minecraft:golden_pickaxe" });
  event.remove({ input: "minecraft:iron_pickaxe" });
  event.remove({ output: "minecraft:iron_pickaxe" });
  event.remove({ input: "minecraft:diamond_pickaxe" });
  event.remove({ output: "minecraft:diamond_pickaxe" });
  event.remove({ input: "minecraft:netherite_pickaxe" });
  event.remove({ output: "minecraft:netherite_pickaxe" });
  event.remove({ input: "minecraft:wooden_shovel" });
  event.remove({ output: "minecraft:wooden_shovel" });
  event.remove({ input: "minecraft:stone_shovel" });
  event.remove({ output: "minecraft:stone_shovel" });
  event.remove({ input: "minecraft:golden_shovel" });
  event.remove({ output: "minecraft:golden_shovel" });
  event.remove({ input: "minecraft:iron_shovel" });
  event.remove({ output: "minecraft:iron_shovel" });
  event.remove({ input: "minecraft:diamond_shovel" });
  event.remove({ output: "minecraft:diamond_shovel" });
  event.remove({ input: "minecraft:netherite_shovel" });
  event.remove({ output: "minecraft:netherite_shovel" });
  event.remove({ input: "minecraft:wooden_axe" });
  event.remove({ output: "minecraft:wooden_axe" });
  event.remove({ input: "minecraft:stone_axe" });
  event.remove({ output: "minecraft:stone_axe" });
  event.remove({ input: "minecraft:golden_axe" });
  event.remove({ output: "minecraft:golden_axe" });
  event.remove({ input: "minecraft:iron_axe" });
  event.remove({ output: "minecraft:iron_axe" });
  event.remove({ input: "minecraft:diamond_axe" });
  event.remove({ output: "minecraft:diamond_axe" });
  event.remove({ input: "minecraft:netherite_axe" });
  event.remove({ output: "minecraft:netherite_axe" });
  event.remove({ input: "minecraft:wooden_hoe" });
  event.remove({ output: "minecraft:wooden_hoe" });
  event.remove({ input: "minecraft:stone_hoe" });
  event.remove({ output: "minecraft:stone_hoe" });
  event.remove({ input: "minecraft:golden_hoe" });
  event.remove({ output: "minecraft:golden_hoe" });
  event.remove({ input: "minecraft:iron_hoe" });
  event.remove({ output: "minecraft:iron_hoe" });
  event.remove({ input: "minecraft:diamond_hoe" });
  event.remove({ output: "minecraft:diamond_hoe" });
  event.remove({ input: "minecraft:netherite_hoe" });
  event.remove({ output: "minecraft:netherite_hoe" });
  event.remove({ input: "minecraft:wooden_sword" });
  event.remove({ output: "minecraft:wooden_sword" });
  event.remove({ input: "minecraft:stone_sword" });
  event.remove({ output: "minecraft:stone_sword" });
  event.remove({ input: "minecraft:golden_sword" });
  event.remove({ output: "minecraft:golden_sword" });
  event.remove({ input: "minecraft:iron_sword" });
  event.remove({ output: "minecraft:iron_sword" });
  event.remove({ input: "minecraft:diamond_sword" });
  event.remove({ output: "minecraft:diamond_sword" });
  event.remove({ input: "minecraft:netherite_sword" });
  event.remove({ output: "minecraft:netherite_sword" });
  event.remove({ input: "minecraft:bow" });
  event.remove({ output: "minecraft:bow" });
  event.remove({ id: "minecraft:dispenser"});
  event.remove({ input: "minecraft:crossbow" });
  event.remove({ output: "minecraft:crossbow" });
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
  //create_sa recipes remove
  event.remove({ id: "create_sa:brass_drill_head_recipe" });
  event.remove({ id: "create_sa:brass_pickaxe_recipe" });
  event.remove({ id: "create_sa:zinc_pickaxe_recipe" });
  event.remove({ id: "create_sa:copper_pickaxe_recipe" });
  event.remove({ id: "create_sa:experience_pickaxe_recipe" });
  event.remove({ id: "create_sa:brass_axe_recipe" });
  event.remove({ id: "create_sa:zinc_axe_recipe" });
  event.remove({ id: "create_sa:copper_axe_recipe" });
  event.remove({ id: "create_sa:experience_axe_recipe" });
  event.remove({ id: "create_sa:brass_sword_recipe" });
  event.remove({ id: "create_sa:zinc_sword_recipe" });
  event.remove({ id: "create_sa:copper_sword_recipe" });
  event.remove({ id: "create_sa:experience_sword_recipe" });
  event.remove({ id: "create_sa:brass_hoe_recipe" });
  event.remove({ id: "create_sa:zinc_hoe_recipe" });
  event.remove({ id: "create_sa:copper_hoe_recipe" });
  event.remove({ id: "create_sa:brass_shovel_recipe" });
  event.remove({ id: "create_sa:zinc_shovel_recipe" });
  event.remove({ id: "create_sa:copper_shovel_recipe" });
  event.remove({ id: "create_sa:experience_shovel_recipe" });
  //////////////////////////
  //SOPHISTICATEDBACKPACKS//
  //////////////////////////
  //sophisticatedbackpacks crafting remove
  event.remove({ id: "sophisticatedbackpacks:tool_swapper_upgrade"});
  ///////////////
  //AQUACULTURE//
  ///////////////
  //aquaculture crafting remove
  event.remove({ id: "aquaculture:neptunium_pickaxe" });
  event.remove({ id: "aquaculture:neptunium_axe" });
  event.remove({ id: "aquaculture:neptunium_sword" });
  event.remove({ id: "aquaculture:neptunium_shovel" });
  event.remove({ id: "aquaculture:neptunium_hoe" });
  /////////////////
  //FARMESDELIGHT//
  /////////////////
  //farmersdelight crafting remove
  event.remove({ id: "farmersdelight:cooking_pot" });
  //////////////
  //GRAPPLEMOD//
  //////////////
  event.remove({ id: "grapplemod:throwupgradeitem" });
  /////////
  //QUARK//
  /////////
  event.remove ({ id: "quark:tweaks/crafting/utility/misc/dispenser_bow"});
  ////////////
  //ALEXSMOBS/
  ////////////
  event.remove ({ id:"alexsmobs:squid_grapple"})
  /////////////////
  //TWILIGHTFOREST/
  /////////////////
  //twilightforest recipe remove
  event.remove({ id: "twilightforest:equipment/ironwood_pickaxe" });
  event.remove({ id: "twilightforest:equipment/fiery_pickaxe" });
  event.remove({ id: "twilightforest:equipment/fiery_iron_pickaxe" });
  event.remove({ id: "twilightforest:equipment/steeleaf_pickaxe" });
  event.remove({ id: "twilightforest:equipment/knightmetal_pickaxe" });
  event.remove({ id: "twilightforest:equipment/ironwood_axe" });
  event.remove({ id: "twilightforest:equipment/steeleaf_axe" });
  event.remove({ id: "twilightforest:equipment/knightmetal_axe" });
  event.remove({ id: "twilightforest:equipment/ironwood_sword" });
  event.remove({ id: "twilightforest:equipment/fiery_sword" });
  event.remove({ id: "twilightforest:equipment/fiery_iron_sword" });
  event.remove({ id: "twilightforest:equipment/steeleaf_sword" });
  event.remove({ id: "twilightforest:equipment/knightmetal_sword" });
  event.remove({ id: "twilightforest:equipment/ironwood_hoe" });
  event.remove({ id: "twilightforest:equipment/steeleaf_hoe" });
  event.remove({ id: "twilightforest:equipment/ironwood_shovel" });
  event.remove({ id: "twilightforest:equipment/steeleaf_shovel" });
  event.remove({ id: "twilightforest:uncrafting_table" });
  ////////////
  //WAYSTONES/
  ////////////
  event.remove({ id: "waystones:waystone" });
  event.remove({ id: "waystones:mossy_waystone" });
  event.remove({ id: "waystones:sandy_waystone" });
  event.remove({ id: "waystones:sharestone" });
  event.remove({ id: "waystones:warp_plate" });
  event.remove({ id: "waystones:portstone" });
  event.remove({ id: "waystones:warp_stone" });
  event.remove({ id: "waystones:warp_dust" });
  event.remove({ id: "waystones:portstone" });
  /////////////////////
  //IMMERSIVEAIRCRAFT//
  /////////////////////
  event.remove({ id: "immersive_aircraft:hull" });
  event.remove({ id: "immersive_aircraft:engine" });
  event.remove({ id: "immersive_aircraft:sail" });
  event.remove({ id: "immersive_aircraft:propeller" });
  event.remove({ id: "immersive_aircraft:boiler" });
  event.remove({ id: "immersive_aircraft:airship" });
  event.remove({ id: "immersive_aircraft:cargo_airship" });
  event.remove({ id: "immersive_aircraft:biplane" });
  event.remove({ id: "immersive_aircraft:gyrodyne" });
  event.remove({ id: "immersive_aircraft:quadracopter" });
  event.remove({ id: "immersive_aircraft:enchanced_propeller" });
  event.remove({ id: "immersive_aircraft:eco_engine" });
  event.remove({ id: "immersive_aircraft:nether_engine" });
  event.remove({ id: "immersive_aircraft:steel_boiler" });
  event.remove({ id: "immersive_aircraft:industrial_gears" });
  event.remove({ id: "immersive_aircraft:sturdy_pipes" });
  event.remove({ id: "immersive_aircraft:gyroscope" });
  event.remove({ id: "immersive_aircraft:hull_reinforcement" });
  event.remove({ id: "immersive_aircraft:improved_landing_gear" });
  /////////////////
  //AMBIENCEBLOCKS/
  /////////////////
  event.remove({ id: "ambienceblocks:wooden_ambience_block" });
});

onEvent("item.tags", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
