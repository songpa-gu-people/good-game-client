import { atom } from "recoil";

const MemberStateDefault = {
  id: null,
  email: "",
};

const memberState = atom({
  key: "MemberState",
  default: MemberStateDefault,
});

export default memberState;
