import { ThreeDCard } from "./others/3d-card";

const ThreeDCards = () => {
    return Projects.map(({ name, image, description, stack, link, liveLink }) => (
        <ThreeDCard
            key={name}
            name={name}
            image={image}
            description={description}
            stack={stack}
            link={link}
            liveLink={liveLink}
        />
    ));
};

export default ThreeDCards;

const Projects = [
    {
        name: "Jhoom",
        image: "/projects/jhoom.png",
        description: "web-based video-conferencing platform",
        stack: [
            { id: 1, name: "MongoDB", image: "/nextdotjs-color.svg" },
            { id: 2, name: "Express", image: "/express-color.svg" },
            { id: 3, name: "React", image: "/react-color.svg" },
            { id: 4, name: "NodeJS", image: "/typescript-color.svg" },
        ],
        link: "/",
        liveLink: "https://videoconferenceapp.vercel.app/",
    },
    {
        name: "Project-1",
        image: "/image.png",
        description: "Lorem Ipsum",
        stack: [
            { id: 1, name: "MongoDB", image: "/mongodb-color.svg" },
            { id: 2, name: "Express", image: "/express-color.svg" },
            { id: 3, name: "React", image: "/react-color.svg" },
            { id: 4, name: "NodeJS", image: "/nodedotjs-color.svg" },
        ],
        link: "/",
        liveLink: "https://github.com/ChinmayNoob",

    },
    {
        name: "Project-1",
        image: "/image.png",
        description: "Lorem Ipsum",
        stack: [
            { id: 1, name: "MongoDB", image: "/mongodb-color.svg" },
            { id: 2, name: "Express", image: "/express-color.svg" },
            { id: 3, name: "React", image: "/react-color.svg" },
            { id: 4, name: "NodeJS", image: "/nodedotjs-color.svg" },
        ],
        link: "/",
        liveLink: "https://github.com/ChinmayNoob",

    },
    {
        name: "Project-1",
        image: "/image.png",
        description: "Lorem Ipsum",
        stack: [
            { id: 1, name: "MongoDB", image: "/mongodb-color.svg" },
            { id: 2, name: "Express", image: "/express-color.svg" },
            { id: 3, name: "React", image: "/react-color.svg" },
            { id: 4, name: "NodeJS", image: "/nodedotjs-color.svg" },
        ],
        link: "/",
        liveLink: "https://github.com/ChinmayNoob",

    },

];
