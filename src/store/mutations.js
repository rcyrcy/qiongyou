export default {
  // 让点击后得到的city 等于 state内的city
  changeCity(state, city) {
    state.city = city;
    // localStorage 本地存储  例 城市选择完后 刷新页面后不变
    try {
      localStorage.city = city;
    } catch (e) {}
  }
};
