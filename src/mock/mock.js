const Mock = require("mockjs");
const Random = Mock.Random;
// mock各种数据
const multidata = {
  data: {
    banner: {
      list: [
        { link: "https://", image: Random.image("320x190", Random.color()) },
        { link: "https://", image: Random.image("320 x 190", Random.color()) },
        { link: "https://", image: Random.image("320 x 190", Random.color()) },
        { link: "https://", image: Random.image("320 x 190", Random.color()) }
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
Mock.mock("./home/multidata", multidata);
Mock.mock("/home/data?type=pop&page=1", homedata.pop.page1);
Mock.mock("/home/data?type=pop&page=2", homedata.pop.page2);
Mock.mock("/home/data?type=new&page=1", homedata.new.page1);
Mock.mock("/home/data?type=new&page=2", homedata.new.page2);
Mock.mock("/home/data?type=sell&page=1", homedata.sell.page1);
Mock.mock("/home/data?type=sell&page=2", homedata.sell.page2);
