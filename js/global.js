import { elementStyles } from "./elements/all";
import { navbar } from "./navbar/all";
import { scrollTop } from "./top";

export const global = () => {
  elementStyles();
  navbar();
  scrollTop();
};
