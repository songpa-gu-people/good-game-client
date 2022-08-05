import { ApiResponse } from "../types";
import axios from "axios";

export default class TokenService {
  static async getAccessTokenFromRefresh(): Promise<ApiResponse<string>> {
    return await axios.get(`/api/v1/token/access`);
  }
}
