export type DistrictType =
  | "JUNG_GU"
  | "JONGRO_GU"
  | "YONGSAN_GU"
  | "SEONGDONG_GU"
  | "GWANGJIN_GU"
  | "DONGDAEMUN_GU"
  | "JUNGNANG_GU"
  | "SEONGBUK_GU"
  | "GANGBUK_GU"
  | "DOBONG_GU"
  | "NOWON_GU"
  | "EUNPYEONG_GU"
  | "SEODAEMUN_GU"
  | "MAPO_GU"
  | "SEOCHO_GU"
  | "GANGNAM_GU"
  | "SONGPA_GU"
  | "GANGDONG_GU"
  | "GANGSEO_GU"
  | "YANGCHEON_GU"
  | "GURO_GU"
  | "GEUMCHEON_GU"
  | "YEONGDEUNGPO_GU"
  | "DONGJAK_GU"
  | "GWANAK_GU";

export default class District {
  static readonly JUNG_GU = new District("JUNG_GU", "중구");
  static readonly JONGRO_GU = new District("JONGRO_GU", "종로구");
  static readonly YONGSAN_GU = new District("YONGSAN_GU", "용산구");
  static readonly SEONGDONG_GU = new District("SEONGDONG_GU", "성동구");
  static readonly GWANGJIN_GU = new District("GWANGJIN_GU", "광진구");
  static readonly DONGDAEMUN_GU = new District("DONGDAEMUN_GU", "동대문구");
  static readonly JUNGNANG_GU = new District("JUNGNANG_GU", "중랑구");
  static readonly SEONGBUK_GU = new District("SEONGBUK_GU", "성북구");
  static readonly GANGBUK_GU = new District("GANGBUK_GU", "강북구");
  static readonly DOBONG_GU = new District("DOBONG_GU", "도봉구");
  static readonly NOWON_GU = new District("NOWON_GU", "노원구");
  static readonly EUNPYEONG_GU = new District("EUNPYEONG_GU", "은평구");
  static readonly SEODAEMUN_GU = new District("SEODAEMUN_GU", "서대문구");
  static readonly MAPO_GU = new District("MAPO_GU", "마포구");
  static readonly SEOCHO_GU = new District("SEOCHO_GU", "서초구");
  static readonly GANGNAM_GU = new District("GANGNAM_GU", "강남구");
  static readonly SONGPA_GU = new District("SONGPA_GU", "송파구");
  static readonly GANGDONG_GU = new District("GANGDONG_GU", "강동구");
  static readonly GANGSEO_GU = new District("GANGSEO_GU", "강서구");
  static readonly YANGCHEON_GU = new District("YANGCHEON_GU", "양천구");
  static readonly GURO_GU = new District("GURO_GU", "구로구");
  static readonly GEUMCHEON_GU = new District("GEUMCHEON_GU", "금천구");
  static readonly YEONGDEUNGPO_GU = new District("YEONGDEUNGPO_GU", "영등포구");
  static readonly DONGJAK_GU = new District("DONGJAK_GU", "동작구");
  static readonly GWANAK_GU = new District("GWANAK_GU", "관악구");

  private constructor(readonly _code: DistrictType, readonly _name: string) {}

  static values(): District[] {
    return [
      District.JUNG_GU,
      District.JONGRO_GU,
      District.YONGSAN_GU,
      District.SEONGDONG_GU,
      District.GWANGJIN_GU,
      District.DONGDAEMUN_GU,
      District.JUNGNANG_GU,
      District.SEONGBUK_GU,
      District.GANGBUK_GU,
      District.DOBONG_GU,
      District.NOWON_GU,
      District.EUNPYEONG_GU,
      District.SEODAEMUN_GU,
      District.MAPO_GU,
      District.SEOCHO_GU,
      District.GANGNAM_GU,
      District.SONGPA_GU,
      District.GANGDONG_GU,
      District.GANGSEO_GU,
      District.YANGCHEON_GU,
      District.GURO_GU,
      District.GEUMCHEON_GU,
      District.YEONGDEUNGPO_GU,
      District.DONGJAK_GU,
      District.GWANAK_GU,
    ].sort((o1, o2) => o1._name.localeCompare(o2._name));
  }

  get code(): string {
    return this._code;
  }
}
