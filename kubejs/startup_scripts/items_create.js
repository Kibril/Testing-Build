// priority: 0

console.info(
  "Hello, World! (You will only see this line once in console, during startup)"
);

onEvent("item.registry", (event) => {
  // Dirty Crushed Ore
  event
    .create("inpurified_iron")
    .texture("kubejs:item/crushed_raw_iron_inpurified")
    .displayName("Inpurified Crushed Raw Iron");
  event
    .create("inpurified_copper")
    .texture("kubejs:item/crushed_raw_copper_inpurified")
    .displayName("Inpurified Crushed Raw Copper");
  event
    .create("inpurified_gold")
    .texture("kubejs:item/crushed_raw_gold_inpurified")
    .displayName("Inpurified Crushed Raw Gold");
  event
    .create("inpurified_zinc")
    .texture("kubejs:item/crushed_raw_zinc_inpurified")
    .displayName("Inpurified Crushed Raw Zinc");
  event
    .create("inpurified_tin")
    .texture("kubejs:item/crushed_raw_tin_inpurified")
    .displayName("Inpurified Crushed Raw Tin");
  event
    .create("inpurified_aluminum")
    .texture("kubejs:item/crushed_raw_aluminum_inpurified")
    .displayName("Inpurified Crushed Raw Aluminum");
  event
    .create("inpurified_cobalt")
    .texture("kubejs:item/crushed_raw_cobalt_inpurified")
    .displayName("Inpurified Crushed Raw Cobalt");
});

onEvent("block.registry", (event) => {
  // Register new blocks here
  // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
});
