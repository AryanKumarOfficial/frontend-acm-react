import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Events from "@/pages/events.jsx";
import Event from "@/pages/event.jsx";
import Login from "@/pages/login.jsx";
import EventDashboard from "@/pages/manage.jsx";
import Projects from "@/pages/projects.jsx";
import Project from "@/pages/project.jsx";
import Register from "@/pages/register.jsx";
import Team from "@/pages/team.jsx";
import EventsPage from "@/pages/test.jsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/events",
                element: <Events/>,
            },
            {
                path: "/events/:slug",
                element: <Event/>,
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/manage",
                element: <EventDashboard/>,
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            {
                path: "/projects/:slug",
                element: <Project/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/team",
                element: <Team/>
            },
            {
                path: "/test",
                element: <EventsPage/>
            }
        ],
    },
]);
