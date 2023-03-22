import Mock from "mockjs";

Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  data: "https://map.baidu.com/@12632651,2534063,13z",
});
