import { DistrictType } from "../../domain/matchingOption/enum/District";
import { GenderType } from "../../domain/matchingOption/enum/Gender";

type Gender = "MAN" | "WOMAN";

export interface MatchingOptionResponse {
  memberNumber: string;
  districts: DistrictType[];
  genders: Gender[];
  exist: boolean;
}

export interface MatchingOptionSaveOrUpdateRequest {
  districts: DistrictType[];
  genders: GenderType[];
}
