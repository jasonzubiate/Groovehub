import { atom } from "recoil";

export const artistState= atom({
  key: "artistState",
  default: {},
});
export const artistIdState = atom({
  key: "artistIdState",
  default: "",
});
