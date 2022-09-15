import AxiosService from "../index";
import axios from "axios";
import { ApiResponse } from "../types";
import { MatchingOptionResponse, MatchingOptionSaveOrUpdateRequest } from "./types";

export default class MatchingOptionService {
  static async getMyMatchingOption(): Promise<ApiResponse<MatchingOptionResponse>> {
    await AxiosService.settingAccessTokenToHeader();
    return await axios.get(`/api/v1/matching-option`);
  }

  static async saveMyMatchingOption(data: MatchingOptionSaveOrUpdateRequest) {
    await AxiosService.settingAccessTokenToHeader();
    return await axios.post(`/api/v1/matching-option`, data);
  }
}
