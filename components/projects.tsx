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
            { id: 1, name: "NextJS", image: "/nextdotjs-color.svg" },
            { id: 2, name: "TailwindCSS", image: "/tailwind-css.svg" },
            { id: 3, name: "React", image: "/react-color.svg" },
            { id: 4, name: "TypeScript", image: "/typescript-color.svg" },
        ],
        link: "https://github.com/ChinmayNoob/videoconferenceapp",
        liveLink: "https://videoconferenceapp.vercel.app/",
    },
    {
        name: "GOJO-CLI",
        image: "/projects/gojo-cli.png",
        description: "CLI-Book Tracker",
        stack: [
            { id: 1, name: "Golang", image: "/golang.svg" },
        ],
        link: "https://github.com/ChinmayNoob/gojo-cli-a-book-tracker",
        liveLink: "https://github.com/ChinmayNoob/gojo-cli-a-book-tracker",

    },
    {
        name: "Pixel Vault",
        image: "/projects/pixel-vault.png",
        description: "Gallery -Upload,Edit,Like",
        stack: [
            { id: 1, name: "NextJS", image: "/nextdotjs-color.svg" },
            { id: 2, name: "TailwindCSS", image: "/tailwind-css.svg" },
            { id: 3, name: "Typescript", image: "/typescript-color.svg" },
            { id: 4, name: "Cloudinary", image: "/cloudinary.svg" },
        ],
        link: "https://github.com/ChinmayNoob/PixelVault",
        liveLink: "https://github.com/ChinmayNoob",

    },
    {
        name: "DailyHipHop",
        image: "/projects/dailyhiphop.png",
        description: "Old School Newspaper Landing Page",
        stack: [
            { id: 1, name: "React", image: "/react-color.svg" },
            { id: 2, name: "TailwindCSS", image: "/tailwind-css.svg" },
            { id: 3, name: "GSAP", image: "/gsap.svg" },
        ],
        link: "https://github.com/ChinmayNoob/dailyhiphop",
        liveLink: "https://dailyhiphop.vercel.app/",

    },

];
