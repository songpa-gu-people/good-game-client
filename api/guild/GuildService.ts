import AxiosService from "../index";
import axios from "axios";
import { GuildCreateRequest, GuildFindAdapterAnswer, GuildFindMoreRequest } from "./types";
import { ApiResponse } from "../types";

export default class GuildService {
  static async createGuild(data: GuildCreateRequest) {
    await AxiosService.settingAccessTokenToHeader();
    return await axios.post(`/api/v1/guilds`, data);
  }

  static async searchGuild(
    searchRequest: GuildFindMoreRequest,
  ): Promise<ApiResponse<GuildFindAdapterAnswer>> {
    await AxiosService.settingAccessTokenToHeader();
    return await axios.get(`/api/v1/guilds`, { params: { ...searchRequest } });
  }
}
