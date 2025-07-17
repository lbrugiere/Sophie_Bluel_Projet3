let worksData;


fetch("http://localhost:5678/api/works")
.then((response) => response.json())
.then((data) => {
   worksData = data;
   displayGallery(worksData);
});

function displayGallery(data) {
    const galleryElement = document.querySelector(".gallery");
    galleryElement.innerHTML = "";

    data.forEach((i) => {
        const workFigure = document.createElement("figure");
        const workImage = document.createElement("img");
        const workTitle = document.createElement("figcaption");

        workImage.src = i.imageUrl;
        workImage.alt = i.title;
        workTitle.innerText = i.title;

        galleryElement.appendChild(workFigure);
        workFigure.append(workImage, workTitle);
    });
}