import { ApiResponse } from "../types";
import AxiosService from "../index";

export default class TokenService {
  static async getAccessTokenFromRefresh(
    refreshToken: string
  ): Promise<ApiResponse<string>> {
    const axiosInstance = await AxiosService.getDefaultAxios();
    return await axiosInstance.get(`/api/v1/token/access`, {
      params: {
        refreshToken,
      },
    });
  }
}
