import "../style.css";
import { global } from "../js/global";
import { renderAboutImages } from "./js/images/images";

window.addEventListener("DOMContentLoaded", () => {
  global();
  renderAboutImages();
});
