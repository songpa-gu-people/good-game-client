export type GenderType = "MAN" | "WOMAN";

export default class Gender {
  static readonly MAN = new Gender("MAN", "남자");
  static readonly WOMAN = new Gender("WOMAN", "여자");

  private constructor(readonly _code: GenderType, readonly _name: string) {}

  static values(): Gender[] {
    return [Gender.MAN, Gender.WOMAN];
  }
}
