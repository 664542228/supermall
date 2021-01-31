const Mock = require("mockjs");
const Random = Mock.Random;
// mock各种数据
const multidata = {
  data: {
    banner: {
      list: [
        { link: "https://", image: Random.image("375x190", Random.color()) },
        { link: "https://", image: Random.image("375 x 190", Random.color()) },
        { link: "https://", image: Random.image("375 x 190", Random.color()) },
        { link: "https://", image: Random.image("375 x 190", Random.color()) }
      ]
    },
    recommend: {
      list: [
        {
          link: "https://",
          image: Random.image("70x70", Random.color()),
          title: "十点抢券"
        },
        {
          link: "https://",
          image: Random.image("70x70", Random.color()),
          title: "好物特卖"
        },
        {
          link: "https://",
          image: Random.image("70x70", Random.color()),
          title: "内购福利"
        },
        {
          link: "https://",
          image: Random.image("70x70", Random.color()),
          title: "初秋上新"
        }
      ]
    }
  }
};
const homedata = {
  pop: {
    page1: {
      data: {
        list: [
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
        ]
      }
    },
    page2: {
      data: {
        list: [
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
        ]
      }
    }
  },
  new: {
    page1: {
      data: {
        list: [
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
        ]
      }
    },
    page2: {
      data: {
        list: [
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
        ]
      }
    }
  },
  sell: {
    page1: {
      data: {
        list: [
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
        ]
      }
    },
    page2: {
      data: {
        list: [
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
        ]
      }
    }
  }
};
const oldprice = Random.integer(60, 600).toFixed(2);
const newprice = (oldprice * Random.integer(1, 9) * 0.1).toFixed(2);
const score1 = (Random.integer(45, 50) / 10).toFixed(1),
  score2 = (Random.integer(45, 50) / 10).toFixed(1),
  score3 = (Random.integer(45, 50) / 10).toFixed(1),
  isBetter1 = score1 >= 4.8,
  isBetter2 = score2 >= 4.8,
  isBetter3 = score3 >= 4.8;
const detail = {
  topImages: [
    Random.image("375x280", Random.color()),
    Random.image("375x280", Random.color()),
    Random.image("375x280", Random.color())
  ],
  baseInfo: {
    title: Random.ctitle(10, 30),
    oldprice: oldprice,
    newprice: newprice,
    discount: Math.round((newprice / oldprice) * 10)
  },
  shopInfo: {
    shopLogo: Random.image("70x70", Random.color()),
    name: Random.ctitle(3, 4),
    cSells: Random.integer(1000, 600000),
    cGoods: Random.integer(10, 10000),
    score: [
      { isBetter: isBetter1, name: "描述相符", score: score1 },
      { isBetter: isBetter2, name: "价格合理", score: score2 },
      { isBetter: isBetter3, name: "质量满意", score: score3 }
    ]
  },
  detailInfo: {
    desc: Random.ctitle(16, 30),
    detailImage: {
      key: "商品详情",
      list: [
        Random.image("375x550", Random.color()),
        Random.image("375x550", Random.color()),
        Random.image("375x550", Random.color()),
        Random.image("375x550", Random.color()),
        Random.image("375x550", Random.color()),
        Random.image("375x550", Random.color()),
        Random.image("375x550", Random.color()),
        Random.image("375x550", Random.color())
      ]
    }
  },
  itemParams: {
    tables: [
      [
        ["尺码", "S", "M", "L", "XL"],
        ["胸围", "100", "104", "103", "112"],
        ["袖长", "61", "62", "63", "64"],
        ["肩宽", "36", "37", "38", "39"],
        ["衣长", "54", "55", "56", "57"]
      ]
    ],
    set: [
      ["薄厚", "普通"],
      ["厂名", "美衣梦莎服饰有限公司"],
      ["颜色", "黑，白"],
      ["尺码", "S,XL,L,M"],
      ["衣长", "常规款（51-65cm）"],
      ["季节", "秋季"],
      ["厂址", "广州白云京溪益和巷31号"],
      ["材质", "聚酯纤维"],
      ["领型", "其他领型"],
      ["袖长", "长袖"],
      ["款式", "上衣"],
      ["风格", "通勤（OL）"],
      ["潮流", "韩系"]
    ]
  },
  rate: {
    content: Random.ctitle(30, 40),
    user: {
      avatar: Random.image("50x50", Random.color()),
      uname: Random.ctitle(2, 8)
    },
    created: 1611012959,
    style: "颜色：黑  尺码：L",
    images: [
      Random.image("70x70", Random.color()),
      Random.image("70x70", Random.color()),
      Random.image("70x70", Random.color())
    ]
  }
};
const recommend = [
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
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  },
  {
    img: Random.image("155x180", Random.color()),
    title: Random.ctitle(3, 22),
    price: Random.integer(20, 600).toFixed(2),
    id: Random.integer(10, 2000)
  }
];
Mock.mock("/home/multidata", multidata);
Mock.mock("/home/data?type=pop&page=1", homedata.pop.page1);
Mock.mock("/home/data?type=pop&page=2", homedata.pop.page2);
Mock.mock("/home/data?type=new&page=1", homedata.new.page1);
Mock.mock("/home/data?type=new&page=2", homedata.new.page2);
Mock.mock("/home/data?type=sell&page=1", homedata.sell.page1);
Mock.mock("/home/data?type=sell&page=2", homedata.sell.page2);
Mock.mock("/detail", detail);
Mock.mock("/recommend", recommend);
