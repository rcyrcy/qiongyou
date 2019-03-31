import Mock from "mockjs";
import axios from "axios";
const base = "http://localhost:8080/api";

Mock.mock(base + "/home/getswiper", "get", {
  code: 1,
  "data|2": [
    {
      id: "@increment",
      "imgUrl|+1": [
        "https://picb2b.qyer.com/Fl2E9eqjqEyKNjiGJ-YELXdwwlW8",
        "https://picb2b.qyer.com/FopCN9YSu5KKcUyx0772DvSEB-t4"
      ]
    }
  ]
});

Mock.mock(base + "/home/geticon", "get", {
  code: 1,
  "data|6": [
    {
      id: "@increment",
      "imgUrl|+1": [
        "//gw.alicdn.com/tfs/TB1DoXFwHsrBKNjSZFpXXcXhFXa-210-126.png_110x10000.jpg_.webp",
        "//gw.alicdn.com/tfs/TB1s51ECuOSBuNjy0FdXXbDnVXa-210-126.png_110x10000.jpg_.webp",
        "//gw.alicdn.com/tfs/TB1BNE_wrZnBKNjSZFrXXaRLFXa-210-126.png_110x10000.jpg_.webp",
        "//gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp",
        "//gw.alicdn.com/tfs/TB1VZqNCuSSBuNjy0FlXXbBpVXa-210-126.png_110x10000.jpg_.webp"
      ],
      desc: "@cname"
    }
  ]
});

Mock.mock(base + "/home/recommend", "get", {
  code: 1,
  "data|5": [
    {
      id: "@increment",
      "imgUrl|+1": [
        "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
        "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
        "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
        "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
        "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg"
      ],
      title: "@csentence",
      desc: "@csentence(5)"
    }
  ]
});

Mock.mock(base + "/home/gambit", "get", {
  code: 1,
  "data|5": [
    {
      id: "@increment",
      "imgUrl|+1": [
        "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
        "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
        "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
        "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
        "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg"
      ],
      title: "@csentence",
      desc: "@csentence(5)"
    }
  ]
});

export function getSwiper() {
  return axios.get(base + "/home/getswiper").then(res => {
    return Promise.resolve(res.data);
  });
}

export function getIcons() {
  return axios.get(base + "/home/geticon").then(res => {
    return Promise.resolve(res.data);
  });
}

export function getRecommend() {
  return axios.get(base + "/home/recommend").then(res => {
    return Promise.resolve(res.data);
  });
}

export function getGambit() {
  return axios.get(base + "/home/gambit").then(res => {
    return Promise.resolve(res.data);
  });
}
