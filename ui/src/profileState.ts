import { atom } from "recoil";
import { Profile } from "./fetchUserProfile";

export const profileState = atom<Profile | null>({
  key: "profileState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
