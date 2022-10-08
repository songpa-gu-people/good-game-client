import AxiosService from "../index";
import axios from "axios";
import { GuildCreateRequest } from "./types";

export default class GuildService {
  static async createGuild(data: GuildCreateRequest) {
    await AxiosService.settingAccessTokenToHeader();
    return await axios.post(`/api/v1/guild`, data);
  }
}
