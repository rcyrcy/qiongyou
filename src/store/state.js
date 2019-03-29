/**
 * 当使用localStorage时 建议只要用它就包裹
 *  try {} catch (e) {} 防止用户使用隐身模式或关闭本地存储致使代码异常
 */
let defaultCity = "上海";
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {}

export default {
  // city 的默认值是localStorage.city 或 上海
  city: defaultCity
};
