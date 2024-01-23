// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info(
  "Remove enigmatic legacy smelting reloaded!"
);

//VANILA OMAGAD!

onEvent("recipes", (event) => {
event.custom({
  type: "forge:conditional",
  conditions: [
    {
      registry: "minecraft:item",
      base: "forge:ores/iron",
      subtracted: ["forge:ore_rates/sparse", "forge:ore_rates/dense"],
      type: "tconstruct:tag_difference_present",
    },
  ],
  recipes: [
    {
      conditions: [
        {
          value: {
            tag: "forge:ingots/nickel",
            type: "forge:tag_empty",
          },
          type: "forge:not",
        },
      ],
      recipe: {
        type: "tconstruct:ore_melting",
        rate: "metal",
        ingredient: {
          type: "forge:difference",
          base: {
            tag: "forge:ores/iron",
          },
          subtracted: [
            {
              tag: "forge:ore_rates/sparse",
            },
            {
              tag: "forge:ore_rates/dense",
            },
          ],
        },
        result: {
          fluid: "tconstruct:molten_iron",
          amount: 72,
        },
        temperature: 800,
        time: 150,
        byproducts: [
          {
            fluid: "tconstruct:molten_nickel",
            amount: 180,
          },
        ],
      },
    },
    {
      conditions: [
        {
          type: "forge:true",
        },
      ],
      recipe: {
        type: "tconstruct:ore_melting",
        rate: "metal",
        ingredient: {
          type: "forge:difference",
          base: {
            tag: "forge:ores/iron",
          },
          subtracted: [
            {
              tag: "forge:ore_rates/sparse",
            },
            {
              tag: "forge:ore_rates/dense",
            },
          ],
        },
        result: {
          fluid: "tconstruct:molten_iron",
          amount: 34,
        },
        temperature: 800,
        time: 150,
        byproducts: [
          {
            fluid: "tconstruct:molten_nickel",
            amount: 34,
          },
        ],
      },
    },
  ],
});
event.custom({
  type: "tconstruct:ore_melting",
  conditions: [
    {
      registry: "minecraft:item",
      tags: ["forge:ores/copper", "forge:ore_rates/dense"],
      type: "tconstruct:tag_intersection_present",
    },
  ],
  rate: "metal",
  ingredient: {
    type: "forge:intersection",
    children: [
      {
        tag: "forge:ores/copper",
      },
      {
        tag: "forge:ore_rates/dense",
      },
    ],
  },
  result: {
    fluid: "tconstruct:molten_copper",
    amount: 203,
  },
  temperature: 500,
  time: 225,
  byproducts: [
    {
      fluid: "tconstruct:molten_gold",
      amount: 203,
    },
  ],
});
event.custom({
  type: "tconstruct:ore_melting",
  conditions: [
    {
      registry: "minecraft:item",
      base: "forge:ores/emerald",
      subtracted: ["forge:ore_rates/sparse", "forge:ore_rates/dense"],
      type: "tconstruct:tag_difference_present",
    },
  ],
  rate: "gem",
  ingredient: {
    type: "forge:difference",
    base: {
      tag: "forge:ores/emerald",
    },
    subtracted: [
      {
        tag: "forge:ore_rates/sparse",
      },
      {
        tag: "forge:ore_rates/dense",
      },
    ],
  },
  result: {
    fluid: "tconstruct:molten_emerald",
    amount: 50,
  },
  temperature: 934,
  time: 96,
  byproducts: [
    {
      fluid: "tconstruct:molten_diamond",
      amount: 50,
    },
  ],
});
event.custom({
  type: "tconstruct:ore_melting",
  conditions: [
    {
      registry: "minecraft:item",
      tags: ["forge:ores/lapis", "forge:ore_rates/dense"],
      type: "tconstruct:tag_intersection_present",
    },
  ],
  rate: "gem",
  ingredient: {
    type: "forge:intersection",
    children: [
      {
        tag: "forge:ores/lapis",
      },
      {
        tag: "forge:ore_rates/dense",
      },
    ],
  },
  result: {
    fluid: "tinkers_reforged:molten_lapis",
    amount: 300,
  },
  temperature: 600,
  time: 241,
  byproducts: [
    {
      fluid: "tconstruct:molten_diamond",
      amount: 50,
    },
  ],
});
event.custom({
  type: "tconstruct:ore_melting",
  conditions: [
    {
      registry: "minecraft:item",
      base: "forge:ores/diamond",
      subtracted: ["forge:ore_rates/sparse", "forge:ore_rates/dense"],
      type: "tconstruct:tag_difference_present",
    },
  ],
  rate: "gem",
  ingredient: {
    type: "forge:difference",
    base: {
      tag: "forge:ores/diamond",
    },
    subtracted: [
      {
        tag: "forge:ore_rates/sparse",
      },
      {
        tag: "forge:ore_rates/dense",
      },
    ],
  },
  result: {
    fluid: "tconstruct:molten_diamond",
    amount: 50,
  },
  temperature: 1450,
  time: 118,
  byproducts: [
    {
      fluid: "tconstruct:molten_quartz",
      amount: 50,
    },
  ],
});
event.custom({
  type: "tconstruct:ore_melting",
  conditions: [
    {
      registry: "minecraft:item",
      base: "forge:ores/gold",
      subtracted: ["forge:ore_rates/sparse", "forge:ore_rates/dense"],
      type: "tconstruct:tag_difference_present",
    },
  ],
  rate: "metal",
  ingredient: {
    type: "forge:difference",
    base: {
      tag: "forge:ores/gold",
    },
    subtracted: [
      {
        tag: "forge:ore_rates/sparse",
      },
      {
        tag: "forge:ore_rates/dense",
      },
    ],
  },
  result: {
    fluid: "tconstruct:molten_gold",
    amount: 34,
  },
  temperature: 700,
  time: 142,
  byproducts: [
    {
      fluid: "tconstruct:molten_copper",
      amount: 34,
    },
  ],
});
event.custom({
  type: "tconstruct:ore_melting",
  conditions: [
    {
      registry: "minecraft:item",
      base: "forge:ores/cloggrum",
      subtracted: ["forge:ore_rates/sparse", "forge:ore_rates/dense"],
      type: "tconstruct:tag_difference_present",
    },
    {
      "modid": "undergarden",
      "type": "forge:mod_loaded"
    }
  ],
  rate: "metal",
  ingredient: {
    type: "forge:difference",
    base: {
      tag: "forge:ores/cloggrum",
    },
    subtracted: [
      {
        tag: "forge:ore_rates/sparse",
      },
      {
        tag: "forge:ore_rates/dense",
      },
    ],
  },
  result: {
    fluid: "tcintegrations:cloggrum",
    amount: 34,
  },
  temperature: 700,
  time: 142,
});
event.custom({
  type: "tconstruct:ore_melting",
  conditions: [
    {
      registry: "minecraft:item",
      base: "forge:ores/cloggrum",
      subtracted: ["forge:ore_rates/sparse", "forge:ore_rates/dense"],
      type: "tconstruct:tag_difference_present",
    },
    {
      "modid": "undergarden",
      "type": "forge:mod_loaded"
    }
  ],
  rate: "metal",
  ingredient: {
    type: "forge:difference",
    base: {
      tag: "forge:ores/cloggrum",
    },
    subtracted: [
      {
        tag: "forge:ore_rates/sparse",
      },
      {
        tag: "forge:ore_rates/dense",
      },
    ],
  },
  result: {
    fluid: "tcintegrations:cloggrum",
    amount: 34,
  },
  temperature: 700,
  time: 142,
});
event.custom({
  type: "tconstruct:ore_melting",
  conditions: [
    {
      registry: "minecraft:item",
      base: "forge:ores/froststeel",
      subtracted: ["forge:ore_rates/sparse", "forge:ore_rates/dense"],
      type: "tconstruct:tag_difference_present",
    },
    {
      modid: "undergarden",
      type: "forge:mod_loaded",
    },
  ],
  rate: "metal",
  ingredient: {
    type: "forge:difference",
    base: {
      tag: "forge:ores/froststeel",
    },
    subtracted: [
      {
        tag: "forge:ore_rates/sparse",
      },
      {
        tag: "forge:ore_rates/dense",
      },
    ],
  },
  result: {
    fluid: "tcintegrations:froststeel",
    amount: 34,
  },
  temperature: 700,
  time: 142,
});
event.custom({
  type: "forge:conditional",
  conditions: [
    {
      registry: "minecraft:item",
      base: "forge:ores/zinc",
      subtracted: ["forge:ore_rates/sparse", "forge:ore_rates/dense"],
      type: "tconstruct:tag_difference_present",
    },
  ],
  recipes: [
    {
      conditions: [
        {
          value: {
            tag: "forge:ingots/tin",
            type: "forge:tag_empty",
          },
          type: "forge:not",
        },
      ],
      recipe: {
        type: "tconstruct:ore_melting",
        rate: "metal",
        ingredient: {
          type: "forge:difference",
          base: {
            tag: "forge:ores/zinc",
          },
          subtracted: [
            {
              tag: "forge:ore_rates/sparse",
            },
            {
              tag: "forge:ore_rates/dense",
            },
          ],
        },
        result: {
          fluid: "tconstruct:molten_zinc",
          amount: 34,
        },
        temperature: 420,
        time: 117,
        byproducts: [
          {
            fluid: "tconstruct:molten_tin",
            amount: 34,
          },
        ],
      },
    },
    {
      conditions: [
        {
          type: "forge:true",
        },
      ],
      recipe: {
        type: "tconstruct:ore_melting",
        rate: "metal",
        ingredient: {
          type: "forge:difference",
          base: {
            tag: "forge:ores/zinc",
          },
          subtracted: [
            {
              tag: "forge:ore_rates/sparse",
            },
            {
              tag: "forge:ore_rates/dense",
            },
          ],
        },
        result: {
          fluid: "tconstruct:molten_zinc",
          amount: 34,
        },
        temperature: 420,
        time: 117,
        byproducts: [
          {
            fluid: "tconstruct:molten_copper",
            amount: 34,
          },
        ],
      },
    },
  ],
});
event.custom({
  type: "tconstruct:ore_melting",
  conditions: [
    {
      registry: "minecraft:item",
      base: "forge:ores/aluminum",
      subtracted: ["forge:ore_rates/sparse", "forge:ore_rates/dense"],
      type: "tconstruct:tag_difference_present",
    },
  ],
  rate: "metal",
  ingredient: {
    type: "forge:difference",
    base: {
      tag: "forge:ores/aluminum",
    },
    subtracted: [
      {
        tag: "forge:ore_rates/sparse",
      },
      {
        tag: "forge:ore_rates/dense",
      },
    ],
  },
  result: {
    fluid: "tconstruct:molten_aluminum",
    amount: 34,
  },
  temperature: 425,
  time: 118,
  byproducts: [
    {
      fluid: "tconstruct:molten_iron",
      amount: 34,
    },
  ],
});
event.custom({
  type: "tconstruct:ore_melting",
  conditions: [
    {
      registry: "minecraft:item",
      base: "forge:ores/tin",
      subtracted: ["forge:ore_rates/sparse", "forge:ore_rates/dense"],
      type: "tconstruct:tag_difference_present",
    },
  ],
  rate: "metal",
  ingredient: {
    type: "forge:difference",
    base: {
      tag: "forge:ores/tin",
    },
    subtracted: [
      {
        tag: "forge:ore_rates/sparse",
      },
      {
        tag: "forge:ore_rates/dense",
      },
    ],
  },
  result: {
    fluid: "tconstruct:molten_tin",
    amount: 34,
  },
  temperature: 225,
  time: 98,
  byproducts: [
    {
      fluid: "tconstruct:molten_copper",
      amount: 34,
    },
  ],
});
event.custom({
  type: "tconstruct:ore_melting",
  conditions: [
    {
      registry: "minecraft:item",
      base: "forge:ores/kepu",
      subtracted: [
        {
        tag: "forge:ore_rates/sparse",
        },
        {
        tag: "forge:ore_rates/dense",
        },
      ],
      type: "tconstruct:tag_difference_present"
    }
  ],
  rate: "metal",
  ingredient: {
    type: "forge:difference",
    base: {
      tag: "forge:ores/kepu"
    },
    subtracted: [
      {
        tag: "forge:ore_rates/sparse"
      },
      {
        tag: "forge:ore_rates/dense"
      }
    ]
  },
  result: {
    fluid: "tinkers_reforged:molten_kepu",
    amount: 68
  },
  temperature: 1300,
  time: 187,
  byproducts: [
    {
      fluid: "tconstruct:molten_ender",
      amount: 68
    }
  ]
});

//AQUACULTURE//

event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "aquaculture:neptunium_helmet"
  },
  "result": {
    "fluid": "tcintegrations:neptunium",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "aquaculture:neptunium_chestplate"
  },
  "result": {
    "fluid": "tcintegrations:neptunium",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "aquaculture:neptunium_leggings"
  },
  "result": {
    "fluid": "tcintegrations:neptunium",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "aquaculture:neptunium_boots"
  },
  "result": {
    "fluid": "tcintegrations:neptunium",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "aquaculture:neptunium_fishing_rod"
  },
  "result": {
    "fluid": "tcintegrations:neptunium",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "aquaculture:neptunium_pickaxe"
  },
  "result": {
    "fluid": "tcintegrations:neptunium",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "aquaculture:neptunium_axe"
  },
  "result": {
    "fluid": "tcintegrations:neptunium",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "aquaculture:neptunium_shovel"
  },
  "result": {
    "fluid": "tcintegrations:neptunium",
    "amount": 90,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "aquaculture:neptunium_hoe"
  },
  "result": {
    "fluid": "tcintegrations:neptunium",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "aquaculture:neptunium_sword"
  },
  "result": {
    "fluid": "tcintegrations:neptunium",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "aquaculture:neptunium_bow"
  },
  "result": {
    "fluid": "tcintegrations:neptunium",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});

//CREATE STUFF AND ADDITIONS

event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:brass_helmet"
  },
  "result": {
    "fluid": "tconstruct:molten_brass",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:brass_chestplate"
  },
  "result": {
    "fluid": "tconstruct:molten_brass",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:brass_leggings"
  },
  "result": {
    "fluid": "tconstruct:molten_brass",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:brass_boots"
  },
  "result": {
    "fluid": "tconstruct:molten_brass",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:brass_pickaxe"
  },
  "result": {
    "fluid": "tconstruct:molten_brass",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:brass_axe"
  },
  "result": {
    "fluid": "tconstruct:molten_brass",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:brass_sword"
  },
  "result": {
    "fluid": "tconstruct:molten_brass",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:brass_shovel"
  },
  "result": {
    "fluid": "tconstruct:molten_brass",
    "amount": 90,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:brass_hoe"
  },
  "result": {
    "fluid": "tconstruct:molten_brass",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:zinc_helmet"
  },
  "result": {
    "fluid": "tconstruct:molten_zinc",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:zinc_chestplate"
  },
  "result": {
    "fluid": "tconstruct:molten_zinc",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:zinc_leggings"
  },
  "result": {
    "fluid": "tconstruct:molten_zinc",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:zinc_boots"
  },
  "result": {
    "fluid": "tconstruct:molten_zinc",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:zinc_pickaxe"
  },
  "result": {
    "fluid": "tconstruct:molten_zinc",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:zinc_axe"
  },
  "result": {
    "fluid": "tconstruct:molten_zinc",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:zinc_sword"
  },
  "result": {
    "fluid": "tconstruct:molten_zinc",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:zinc_shovel"
  },
  "result": {
    "fluid": "tconstruct:molten_zinc",
    "amount": 90,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:zinc_hoe"
  },
  "result": {
    "fluid": "tconstruct:molten_zinc",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:copper_helmet"
  },
  "result": {
    "fluid": "tconstruct:molten_copper",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:copper_chestplate"
  },
  "result": {
    "fluid": "tconstruct:molten_copper",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:copper_leggings"
  },
  "result": {
    "fluid": "tconstruct:molten_copper",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:copper_boots"
  },
  "result": {
    "fluid": "tconstruct:molten_copper",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:copper_pickaxe"
  },
  "result": {
    "fluid": "tconstruct:molten_copper",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:copper_axe"
  },
  "result": {
    "fluid": "tconstruct:molten_copper",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:copper_sword"
  },
  "result": {
    "fluid": "tconstruct:molten_copper",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:copper_shovel"
  },
  "result": {
    "fluid": "tconstruct:molten_copper",
    "amount": 90,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});
event.custom({
  "type": "tconstruct:damagable_melting",
  "ingredient": {
    "item": "create_sa:copper_hoe"
  },
  "result": {
    "fluid": "tconstruct:molten_copper",
    "amount": 180,
    "unit_size": 10
  },
  "temperature": 1250,
  "time": 74,
});

});

onEvent("item.tags", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
