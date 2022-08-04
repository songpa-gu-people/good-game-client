import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import qs from "qs";

function useKakaoLogin() {
  const router = useRouter();
  const [token, setToken] = useState("");

  const restApiKey = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const redirectUri = process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI;
  const kakaoLoginUrl = `http://localhost:8080/oauth2/authorization/kakao?redirect_uri=${redirectUri}`;

  useEffect(() => {
    const code = router.query.code;
    if (code) {
      setTokenFromCode(code);
    }
  }, [router.query]);

  useEffect(() => {
    if (token) {
      console.log("서버로 토큰 발송: ", token);
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
