import axios, { AxiosInstance } from "axios";
import TokenService from "./token/TokenService";

export default class AxiosService {
  static async settingAccessToken() {
    const res = await TokenService.getAccessTokenFromRefresh();
    axios.defaults.headers.common["Authorization"] = res.data.data;
  }
}
