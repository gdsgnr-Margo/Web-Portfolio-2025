const navigation =
    document.querySelector('.nav-bar');

const navigationHeight =
    navigation.offsetHeight;

document.documentElement.style.setProperty (
    "--scroll-padding",
    navigationHeight + "px"
);

const projects = [
    {
        title: "Retro Nichi",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //link: "https://example.com/project-one",
        image: "Pictures/project-retronichi.png"
    },
    {
        title: "Project Two",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //link: "https://example.com/project-two",
        image: "Pictures/project-retronichi.png"
    },
    {
        title: "Project Three",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //link: "https://example.com/project-three",
        image: "Pictures/project-retronichi.png"
    }
];

let currentIndex = 0;

function updateProject(index) {
    const card = document.getElementById('projectCard');
    card.classList.add("fade");
    setTimeout(() => {

        document.getElementById('projectTitle').textContent = projects[index].title;
        document.getElementById('projectDesc').textContent = projects[index].description;
        // document.getElementById('projectLink').href = projects[index].link;
        document.getElementById('projectImg1').src = projects[index].image;

        card.classList.remove("fade");
    }, 300);
}

function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateProject(currentIndex);
}

function prevProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateProject(currentIndex);
}