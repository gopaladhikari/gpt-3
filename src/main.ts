import { navLinks } from "../constants";
import { heroImages } from "../constants";
import { posibiltySection } from "../constants";
const navbar = document.getElementById("navlist-container") as HTMLElement;
const possiblityList = document.getElementById(
  "possiblity-list"
) as HTMLElement;
const heroImagesContainer = document.getElementById(
  "hero-images-container"
) as HTMLElement;

const generateNavLinks = (): void => {
  navbar.innerHTML += navLinks
    .map(({ title }) => {
      return `<li> <a href="#">${title} </a> </li>`;
    })
    .join("");
};

const generateHeroImages = (): void => {
  heroImagesContainer.innerHTML += heroImages
    .map((url) => `<img src=${url} alt="" />`)
    .join("");
};

const generatePossibilityData = (): void => {
  possiblityList.innerHTML += posibiltySection
    .map(
      ({ title, paragraph }) =>
        ` <div>
          <img src="/underline.png" />
          <h3>${title}</h3>
          <p>${paragraph}</p>
        </div>
  `
    )
    .join("");
};

generateNavLinks();
generateHeroImages();
generatePossibilityData();
