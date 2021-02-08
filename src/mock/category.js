const Mock = require("mockjs");
const Random = Mock.Random;

const category = {
  data: {
    category: {
      list: [
        { title: "流行", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "上衣", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "裤子", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "女鞋", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "男鞋", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "裙子", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "包包", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "内衣", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "配饰", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "美妆", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "家居", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "百货", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "内衣", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "食品", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "个护", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "手机", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "数码", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "零食", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "生鲜", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "茶酒", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "厨具", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "收纳", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "清洁", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "家访", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "鲜花", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "文具", mallKey: "liuxing", miniWallkey: "shangyi" }
      ]
    }
  }
};
const categoryliuxing = {
  data: {
    category: {
      list: [
        { title: "流行", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "上衣", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "裤子", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "女鞋", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "男鞋", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "裙子", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "包包", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "内衣", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "配饰", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "美妆", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "家居", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "百货", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "内衣", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "食品", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "个护", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "手机", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "数码", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "零食", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "生鲜", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "茶酒", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "厨具", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "收纳", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "清洁", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "家访", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "鲜花", mallKey: "liuxing", miniWallkey: "shangyi" },
        { title: "文具", mallKey: "liuxing", miniWallkey: "shangyi" }
      ]
    }
  }
};

const categorypop = [
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(5, 30),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(5, 30),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  }
];

const categorysell = [
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(5, 30),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(5, 30),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  }
];

const categorynew = [
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(5, 30),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(5, 30),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 12),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  }
];

Mock.mock("/category", category);
// Mock.mock("/subcategory", category);
// Mock.mock("/subcategory?mallKey=liuxing", categoryliuxing);
Mock.mock("/subcategory/detail?miniWallkey=shangyi&type=pop", categorypop);
Mock.mock("/subcategory/detail?miniWallkey=shangyi&type=sell", categorysell);
Mock.mock("/subcategory/detail?miniWallkey=shangyi&type=new", categorynew);
// Mock.mock("/subcategory/detail?miniWallkey=shangyi&type=sell", categorysell);
// Mock.mock("/subcategory/detail?miniWallkey=shangyi&type=,new", categornew);
