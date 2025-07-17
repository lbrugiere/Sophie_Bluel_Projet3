import { getWorks } from "./api";
import { buildHtmlForWorks } from "./view";

const galleryElement = document.querySelector(".gallery");

let worksData;
worksData = getWorks();
galleryElement.appendChild(
    buildHtmlForWorks(worksData)
)

galleryElement2.appendChild(
    buildHtmlForWorks(worksData)
)
