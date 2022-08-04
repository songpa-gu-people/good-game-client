import axios, { AxiosInstance } from "axios";

export default class AxiosService {
  static async getDefaultAxios(): Promise<AxiosInstance> {
    const axiosInstance = axios.create();
    axiosInstance.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
    return axiosInstance;
  }
}
