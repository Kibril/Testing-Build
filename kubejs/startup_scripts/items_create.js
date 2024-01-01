// priority: 0

console.info(
  "Hello, World! (You will only see this line once in console, during startup)"
);

onEvent("item.registry", (event) => {
  // Register new items here
  event.create("wooden_mechanism").texture("kubejs:item/wooden_mechanism").displayName("Wooden mechanism")
  event.create("ice_mechanism").texture("kubejs:item/andesite_mechanism").displayName("Andesite mechanism")
  event.create("lava_mechanism").texture("kubejs:item/andesite_mechanism").displayName("Andesite mechanism")
  event.create("andesite_mechanism").texture("kubejs:item/andesite_mechanism").displayName("Andesite mechanism")
  event.create("copper_mechanism").texture("kubejs:item/copper_mechanism").displayName("Copper mechanism")
  event.create("brass_mechanism").texture("kubejs:item/brass_mechanism").displayName("Brass mechanism")
  event.create("logic_mechanism").texture("kubejs:item/logic_mechanism").displayName("Logic mechanism")
  event.create("incomplete_radiant-shadow_mechanism").texture("kubejs:item/incomplete_radiant-shadow_mechanism_animation").displayName("Incomplete radiant-shadow mechanism")
});

onEvent("block.registry", (event) => {
  // Register new blocks here
  // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
});
