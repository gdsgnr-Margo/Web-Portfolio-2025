/*
const projects = [
    {
        title: "Project One",
        desc: "UI design and user flow planning"
    },
    {
        title: "Project Two",
        desc: "Web interface and interaction design"
    },
    {
        title: "Project Three",
        desc: "Visual system and branding concepts"
    }
];

let currentIndex = 0;

function updateProject() {
    const card = document.getElementById("projectCard");

    card.classList.add("fade");

    setTimeout(() => {
        document.getElementById("projectTitle").textContent = projects[currentIndex].title;
        document.getElementById("projectDesc").textContent = projects[currentIndex].desc;
        card.classList.remove("fade");
    }, 200);
    }

    function nextProject() {
        currentIndex = (currentIndex + 1) % projects.length;
        updateProject();
    }

    function prevProject() {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateProject();
    }
*/

document.addEventListener("DOMContentLoaded", () => {
    updateProject(currentIndex);
});

let currentIndex = 0;

function updateProject(index) {
    const card = document.getElementById("projectCard");
    card.classList.add("fade");
    setTimeout(() => {

        document.getElementById("projectImage-link").href = projects[index].link;
        document.getElementById("projectTitle").textContent = projects[index].title;
        document.getElementById("projectDate").textContent = projects[index].date;
        document.getElementById("projectDesc").textContent = projects[index].description;
        document.getElementById("projectImage").src = projects[index].image;
        document.getElementById("projectBtn-link").href = projects[index].link;

        card.classList.remove("fade");
    }, 300);
}

const projects = [
    {
        link: "https://www.figma.com/design/03jcEbzOtPPwG91OFROIUe/Projects--Copy-?node-id=1-1287&t=gxf0VWFrYjlxQ2A4-1",
        title: "PapaBibs Kitchen",
        date: "April 2025 - May 2025",
        description: "PapaBib’s Kitchen is a web-based food ordering platform designed to provide customers with a seamless and engaging experience from browsing the menu to completing their purchase. As the UI/UX designer of the team, my role focused on crafting intuitive user flows, ensuring visual consistency, and optimizing the overall customer experience through clear layouts, responsive design, and engaging interactions.",
        image: "Pictures/cs-papabibs.png"
    },
    {
        link: "https://talk-n-sip-v2.vercel.app/",
        title: "Talk 'n Sip",
        date: "April 2024 - May 2024",
        description: "Talk 'N Sip is a web-based café platform designed to create a welcoming digital space where customers can explore the menu, learn about the brand, and engage with the café's story. As the developer, I was responsible for building the entire system from designing the UI/UX to implementing the backend logic, using HTML, CSS, JavaScript, and PHP.",
        image: "Pictures/cs-talknsip.png"
    },
    {
        link: "https://retro-nichi.vercel.app/Shop.html",
        title: "Retro Nichi",
        date: "November 2023 - December 2023",
        description: "Retro Nichi is a web-based fashion platform designed to create a stylish digital space where customers can browse clothing selections, discover trendy outfits, and shop for apparel that reflects their style. As the developer, I was responsible for building the entire system from designing the UI/UX to implementing the backend logic, using HTML, CSS, and JavaScript.",
        image: "Pictures/cs-retronichi.png"
    },
    {
        link: "https://complexity-delta.vercel.app/",
        title: "Portfolio",
        date: "April 2023 - May 2023",
        description: "My first portfolio project is a web-based platform created to showcase my skills and abilities as a designer. The site serves as a professional portfolio where I present my experience and skills. As the developer, I was responsible for building the entire system from designing the UI/UX to implementing the backend logic, using HTM and CSS.",
        image: "Pictures/cs-portfolio.png"
    },
    {
        link: "https://www.figma.com/design/03jcEbzOtPPwG91OFROIUe/Projects--Copy-?node-id=2-13841&t=VBJTGT29gMngMFWj-1",
        title: "Quest Commute",
        date: "November 2025",
        description: "Quest Commute is a mobile application created to transform daily commuting into an interactive and engaging experience. The app serves as a gamified navigation tool where users can plan routes, track their journeys, and earn rewards through quests, points, and avatar customization. As the UI/UX designer, I was responsible for prototyping the entire design, focusing on immersive user flows, intuitive interfaces, and engaging visual elements to ensure a responsive, interactive, and user-centered mobile experience.",
        image: "Pictures/cs-quest.png"
    },
    {
        link: "https://www.figma.com/design/03jcEbzOtPPwG91OFROIUe/Projects--Copy-?node-id=2-13840&t=GTtxL3wupxugWT5z-1",
        title: "Math Wiz",
        date: "April 2023",
        description: "Math Wiz is a mobile application created to provide an engaging and educational experience for users learning mathematics. The app serves as an interactive tool where users can solve basic arithmetic and unit conversions. As the UI/UX designer, I created the full prototype, and as the developer, I built the system using MIT App Inventor, combining design and functionality into a responsive and interactive mobile application.",
        image: "Pictures/cs-mathwiz.png"
    },
    {
        link: "https://www.figma.com/design/03jcEbzOtPPwG91OFROIUe/Projects--Copy-?node-id=2-13624&t=GTtxL3wupxugWT5z-1",
        title: "Move Motive",
        date: "May 2023",
        description: "Move Motive is a mobile application created to provide an engaging and motivating experience for users focused on fitness and health. The app serves as an interactive tool where users can track activities, calculate BMI, and receive personalized exercise and dietary recommendations. As the UI/UX designer, I created the full design prototype for this group project, ensuring intuitive user flows and a responsive interface.",
        image: "Pictures/cs-movemotive.png"
    },
    {
        link: "https://www.figma.com/design/03jcEbzOtPPwG91OFROIUe/Projects--Copy-?node-id=1-4114&t=GTtxL3wupxugWT5z-1",
        title: "Kando",
        date: "October 2025 - November 2025",
        description: "Kando is a web-based platform developed as part of a project by Raykan Technologies, focused on providing streamlined solutions for automated timesheets, payroll, and HR services. The platform's landing page was designed to highlight its core features, pricing options, and professional branding in a clear and engaging way. Apart from my internship tasks, one of the biggest contributions I provided was creating the landing page of Kando, a project of Raykan Technologies. I focused on intuitive navigation, consistent visual hierarchy, and a user-centered layout that effectively communicates the product's value.",
        image: "Pictures/project-kando.png"
    },
    {
        link: "https://www.figma.com/design/03jcEbzOtPPwG91OFROIUe/Projects--Copy-?node-id=2-27550&t=gxf0VWFrYjlxQ2A4-1",
        title: "MediSync",
        date: "August 2025 - December 2025",
        description: "MediSync is a medicine tracking and inventory forecasting system developed as a thesis project for the Barangay Sumilang Super Health Center in Pasig City. It was designed to solve recurring issues in medicine inventory such as shortages, overstocking, and manual documentation inefficiencies. Using the ARIMA forecasting model, the system predicts future stock demand and supports data-driven decision-making. My main contributions included leading the system design and planning, creating user flows and interface designs in Figma, designing the database structure, and conducting user research based on the health center's workflow.",
        image: "Pictures/project-medisync.png"
    },
    {
        link: "https://drive.google.com/drive/folders/1-u-oLgnYhJyuOBwgmzk6uu3W5hP-oiNW?usp=sharing",
        title: "PapaBibs Kitchen Publication Materials",
        date: "May 2025  - November 2025",
        description: "PapaBibs Kitchen Publication Materials is a compilation of the various designs I created during my internship as a Graphic Design Intern. The project showcases a wide range of outputs including social media posts, marketing materials, and print collateral that supported the brand's promotions and customer engagement. I produced clean and professional layouts for menus, promotional posters, and branding assets, ensuring that each design reflected the identity and vision of PapaBibs Kitchen. I supported design needs for online platforms such as Facebook and Grab, maintaining consistency across all materials to strengthen the brand's presence both online and offline.",
        image: "Pictures/project-papabibs.png"
    },
    {
        link: "https://drive.google.com/drive/folders/1LpA-GyqThxFxUh7QRh0smpvRxjy9Fyhq?usp=sharing",
        title: "PLP Computer Society Publication Materials",
        date: "August 2023 - April 2025",
        description: "PLP Computer Society Publication Materials is a compilation project showcasing the various digital posters, announcements, and promotional graphics I created during my time as a Graphic Designer and Public Relations Officer at PLP Computer Society Inc,. These materials were designed to support organizational events, campaigns, and outreach programs, reflecting both creativity and effective communication. My role involved conceptualizing and producing visually engaging designs that aligned with the organization’s identity, promoted student activities, and strengthened community engagement.",
        image: "Pictures/project-comsoc.png"
    }

];



function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateProject(currentIndex);
}

function prevProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateProject(currentIndex);
}