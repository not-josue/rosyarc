import "../style.css";

import { global } from "../js/global";
import { renderButtons } from "./js/buttons/render";
import { renderImages } from "./js/images/data";
import { filterGallery } from "./js/filter";

window.addEventListener("DOMContentLoaded", () => {
  global();
  renderButtons();
  renderImages();
  filterGallery();
});
