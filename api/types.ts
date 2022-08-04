import { GoodGameCodeType } from "./GoodGameCode";

export interface ApiResponse<T> {
  data: {
    data: T;
    code: GoodGameCodeType;
    message?: string;
  };
  code: number;
}
