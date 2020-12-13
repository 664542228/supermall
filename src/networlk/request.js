import axios from "axios";
export function request(config) {
  //创建实例
  const instance = axios.create({
    baseURL: "",
    timeout: 5000
  });
  return instance(config);
}
