onEvent('recipes', event => {
	//minecraft vanila
	event.shaped(
    "minecraft:dispenser",
    ["AB"],
    {
      A: "minecraft:dropper",
      B: Item.of("tconstruct:longbow", {tic_materials:["tconstruct:wood", "tconstruct:wood", "tconstruct:wood", "tconstruct:string"]}),
    }
  );
	event.shaped(
    "minecraft:dispenser",
    ["AAA", "ACA", "ABA"],
    {
      A: "minecraft:cobblestone",
      B: "minecraft:redstone",
      C: Item.of("tconstruct:longbow", {tic_materials:["tconstruct:wood", "tconstruct:wood", "tconstruct:wood", "tconstruct:string"]}),
    }
  );
	//sophisticatedbackpacks
	event.shaped(
    "sophisticatedbackpacks:tool_swapper_upgrade",
    ["ABA", "CDE", "FHF"],
    {
      A: "minecraft:redstone",
      B: Item.of("tconstruct:small_blade", { Material: "tconstruct:wood" }),
      C: Item.of("tconstruct:pick_head", { Material: "tconstruct:wood" }),
      D: "sophisticatedbackpacks:upgrade_base",
      E: Item.of("tconstruct:small_axe_head", { Material: "tconstruct:wood" }),
      F: "minecraft:iron_ingot",
      H: Item.of("tconstruct:round_plate", { Material: "tconstruct:wood" }),
    }
  );
  	//grapplemod
	event.shaped(
    "grapplemod:grapplinghook",
    ["BA"],
    {
      A: "minecraft:lead",
      B: Item.of("tconstruct:pick_head", { Material: "tconstruct:iron" }),
    }
  );
	event.shaped(
    "grapplemod:throwupgradeitem",
    ["BA"],
    {
      A: "grapplemod:baseupgradeitem",
      B: Item.of("tconstruct:longbow", {tic_materials:["tconstruct:wood", "tconstruct:wood", "tconstruct:wood", "tconstruct:string"]}),
    }
  );
  	//farmersdelight
	event.shaped(
    "farmersdelight:cooking_pot",
    ["ABA", "CDC", "CCC"],
    {
      A: "minecraft:brick",
      B: "minecraft:stick",
      C: "minecraft:iron_ingot",
      D: "minecraft:water_bucket",
    }
  );
  //alexsmobs
	event.shaped(
    "alexsmobs:squid_grapple",
    ["AAA", "CBC", " C "],
    {
      A: "alexsmobs:lost_tentacle",
      B: Item.of("tconstruct:crossbow").ignoreNBT(), 
      C: "minecraft:copper_ingot",
    }
  );
  //create_sa
	event.shaped(
    "create_sa:brass_drill_head",
    ["ACA", "CBC", "ACA"],
    {
      A: "create:brass_ingot",
      B: "create_things_and_misc:vibration_mechanism", 
      C: "create:andesite_alloy",
    }
  );
  //enigmaticlegacy
	event.shaped(
    "enigmaticlegacy:forbidden_axe",
    ["ABA", "CEC", " D "],
    {
      A: "minecraft:netherite_ingot",
      B: "minecraft:wither_skeleton_skull", 
      C: "minecraft:blaze_powder",
      D: "minecraft:blaze_rod",
      E: Item.of("tconstruct:broad_axe", {tic_materials:["tconstruct:cobalt", "tconstruct:wood", "tconstruct:cobalt", "tconstruct:cobalt"]})
    }
  );
  event.recipes.create.mechanical_crafting(
    "waystones:waystone",
    [" PJP ", "BPCPB", "BCACB", "BPCPB", " SSS "],
    {
      P: "minecraft:ender_pearl",
      C: "hexcasting:charged_amethyst",
      A: "hexcasting:artifact",
      S: "minecraft:obsidian",
      B: "minecraft:stone_bricks",
      J: "aquamirae:abyssal_amethyst"
    }
  );
  //immersive_aircraft
  //ambienceblocks
  event.recipes.create.mechanical_crafting(
    "ambienceblocks:wooden_ambience_block",
    [" LPL ", "NCQCN", "RHDHR", "NBDBN", " BBB "],
    {
      L: "create:rose_quartz_lamp",
      P: "minecraft:glass_pane",
      N: "minecraft:note_block",
      C: "create:copper_sheet",
      Q: "create:polished_rose_quartz",
      R: "minecraft:redstone",
      H: "minecraft:redstone_block",
      D: "minecraft:diamond_block",
      B: "minecraft:oak_planks",
    }
  );
})
