let worksData;


fetch("http://localhost:5678/api/works")
.then((response) => response.json())
.then((data) => {
   worksData = data;
   displayGallery(worksData);
});


const sum  = (a, b) => {
    return a + b;
}
sum(1, 1)

const toto = {
    firstname: 'toto',
    lastname: 'tata',
}


const sum  = ({a , b}) => {
    return a + b;
}
const sum  = (param1) => {
    return param1.a + param1.b;
}
const t = {a:1, b:2}
sum(t, 3)

const createElement = (param) => {
    return document.createElement(tag)
}

createElement(param)

const createElement = ({ tag, classes = []}) => {

    const el =  document.createElement(tag);
    el.classList.add(...classes)
    return el
}

const createImg = ({ src,  classes = []}) => {
    return createElement({tag: 'img'})
}

function displayGallery(data) {
    const galleryElement = document.querySelector(".gallery");
    galleryElement.innerHTML = "";

    data.forEach((i) => {
        const workFigure = createElement({tag:"figure"}, {classes: ['class1','class2']});
        const workImage = createElement({tag:"img"});
        const workTitle = createElement({tag:"figcaption"});

        workImage.src = i.imageUrl;
        workImage.alt = i.title;
        workTitle.innerText = i.title;

        galleryElement.appendChild(workFigure);
        workFigure.append(workImage, workTitle);
    });
}
