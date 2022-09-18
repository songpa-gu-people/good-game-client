import TokenService from "../../../api/token/TokenService";

export default class TokenValidator {
  static async isValidRefreshToken(): Promise<boolean> {
    try {
      await TokenService.getAccessTokenFromRefresh();
      return true;
    } catch (e) {
      return false;
    }
  }
}