import { DistrictType } from "../../domain/matchingOption/enum/District";

type Gender = "MAN" | "WOMAN";

export interface MatchingOptionResponse {
  memberNumber: string;
  districts: DistrictType[];
  genders: Gender[];
  exist: boolean;
}
