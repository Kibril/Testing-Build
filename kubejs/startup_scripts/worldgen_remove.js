onEvent("worldgen.remove", (event) => {
  event.removeOres((ores) => {
    ores.blocks = [
      "majruszsdifficulty:enderium_shard_ore",
      "biomesoplenty:small_rose_quartz_bud",
      "biomesoplenty:_rose_quartz_block",
    ];
  });
});
