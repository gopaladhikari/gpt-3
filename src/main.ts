import { navLinks } from "../constants";

const navbar = document.getElementById("navlist-container") as HTMLElement;

const generateNavLinks = (): void => {
  navbar.innerHTML += navLinks
    .map(({ title }) => {
      return `<li> <a href="#">${title} </a> </li>`;
    })
    .join("");
};

generateNavLinks();
