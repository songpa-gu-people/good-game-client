import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import qs from "qs";
import { kakaoConfig } from "../../../config";

function useKakaoLogin() {
  const router = useRouter();
  const [token, setToken] = useState("");

  const restApiKey = kakaoConfig.apikey;
  const redirectUri = kakaoConfig.loginRedirectUri;
  const kakaoLoginUrl = `http://localhost:8080/oauth2/authorization/kakao?redirect_uri=${redirectUri}`;

  useEffect(() => {
    const code = router?.query?.code;
    if (code) {
      setTokenFromCode(code);
    }
  }, [router]);

  useEffect(() => {
    if (token) {
      // const res = await KakaoLoginService.login(token);
    }
  }, [token]);

  async function setTokenFromCode(code) {
    const data = {
      grant_type: "authorization_code",
      client_id: restApiKey,
      redirect_uri: redirectUri,
      code: code,
    };

    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
      url: "https://kauth.kakao.com/oauth/token",
    };

    const res = await axios(options);
    setToken(res.data.access_token);
  }

  return {
    kakaoLoginUrl: kakaoLoginUrl,
  };
}

export default useKakaoLogin;
