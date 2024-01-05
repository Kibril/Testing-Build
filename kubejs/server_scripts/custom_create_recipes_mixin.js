onEvent("recipes", (event) => {
  // Change recipes here
  event.recipes
    .createMixing("minecraft:honeycomb", [
      "#leaves",
      Fluid.of("create:honey", 250),
    ])
    .heated();
});
