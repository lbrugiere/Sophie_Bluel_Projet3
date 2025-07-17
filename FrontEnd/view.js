
const  buildHtmlForWorks = (works) => {

    return works.map((work) => {
        const workFigure = document.createElement("figure");
        const workImage = document.createElement("img");
        const workTitle = document.createElement("figcaption");

        workImage.src = work.imageUrl;
        workImage.alt = work.title;
        workTitle.innerText = work.title;

        workFigure.append(workImage, workTitle);
        return workFigure
    });
}


export  {
    buildHtmlForWorks
}
