import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import AboutMe from "../../pages/AboutMe";
import Projects from "../../pages/Projects";
import Tops from "../../pages/Tops";
import SocialLinks from "../../pages/SocialLinks";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path:'/AboutMe',
        element: <AboutMe/>
    },
    {
        path:'/SocialLinks',
        element: <SocialLinks/>
    },
    {
        path:'/Projects',
        element: <Projects/>
    },
    {
        path:'/Tops',
        element: <Tops/>
    },
])

export default router