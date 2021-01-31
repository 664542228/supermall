import { request } from "./request";
export function getDetail() {
  return request({
    url: "/detail"
    // params: {
    //   id
    // }
  });
}

export function getRecommend() {
  return request({
    url: "/recommend"
  });
}

export class Goods {
  constructor(baseInfo) {
    this.title = baseInfo.title;
    this.oldPrice = baseInfo.oldprice;
    this.newPrice = baseInfo.newprice;
    this.discount = baseInfo.discount;
    // this.discountBgColor=baseInfo.discountBgColor;
  }
}

//将三个地方的数据构造成一个类
// export class Goods {
//   constructor(itemInfo, colimns, services) {
//     this.title = itemInfo.title;
//     this.desc = itemInfo.desc;
//     this.colimns = colimns;
//     this.services = services;
//   }
// }
