import {
  footerLinks,
  navLinks,
  heroImages,
  posibiltySection,
} from "../constants";

const navbar = document.getElementById("navlist-container") as HTMLElement;
const possiblityList = document.getElementById(
  "possiblity-list"
) as HTMLElement;
const heroImagesContainer = document.getElementById(
  "hero-images-container"
) as HTMLElement;

const footerLink = document.getElementById(
  "footer-links-wrapper"
) as HTMLElement;

const yearEl = document.getElementById("year") as HTMLElement;

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

const generateFooterLinks = (): void => {
  footerLink.innerHTML += footerLinks
    .map(
      ({ title, links }: { title: string; links: string[] }) =>
        `<div>
         <h4> ${title}  </h4>
         <ul>
          ${links.map((link: string) => ` <li>${link}</li> `).join("")}
        </ul>
      </div>
`
    )
    .join("");
};

const generateYearLinks = (): void => {
  const date = new Date();
  const thisyear = date.getFullYear();
  yearEl.innerText = thisyear.toString();
};

generateNavLinks();
generateHeroImages();
generatePossibilityData();
generateFooterLinks();
generateYearLinks();
alert("This website is not responsive");
