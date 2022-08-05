import AxiosService from "../index";
import axios from "axios";

export default class MatchingOptionService {
  static async getMyMatchingOption() {
    await AxiosService.settingAccessToken();
    return axios.get(`/api/v1/matching-option`);
  }
}
