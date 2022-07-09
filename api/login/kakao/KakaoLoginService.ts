import AxiosService from "../../index";

export default class KakaoLoginService {
  static async login(token: string) {
    const defaultAxios = AxiosService.getDefaultAxios();
    return await defaultAxios.get(`/login/kakao`);
  }
}
