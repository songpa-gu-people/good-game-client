import AxiosService from "../index";
import axios from "axios";
import { ApiResponse } from "../types";
import { MatchingOptionResponse } from "./types";

export default class MatchingOptionService {
  static async getMyMatchingOption(): Promise<
    ApiResponse<MatchingOptionResponse>
  > {
    await AxiosService.settingAccessTokenToHeader();
    return await axios.get(`/api/v1/matching-option`);
  }
}
