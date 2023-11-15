import "./style.css";
import { global } from "./js/global";
import { tabFilter } from "./js/tabs";
import { renderImages } from "./js/images/images";
import { renderReview } from "./js/reviews";

window.addEventListener("DOMContentLoaded", () => {
  global();
  renderImages();
  tabFilter();
  renderReview();
});
