import React from "react";
import {useLocation} from "react-router-dom";

export default function NavLinks() {
    const location = useLocation();

    const getClassName = (path) =>
        location.pathname === path ? "text-foreground" : "text-foreground/60";

    return (
        <div className="flex items-center space-x-6 text-md">
            <a
                href="/events"
                className={`transition-colors hover:text-foreground/80 ${getClassName("/events")}`}
            >
                Events
            </a>
            <a
                href="/team"
                className={`transition-colors hover:text-foreground/80 ${getClassName("/team")}`}
            >
                Team
            </a>
            <a
                href="/projects"
                className={`transition-colors hover:text-foreground/80 ${getClassName("/projects")}`}
            >
                Projects
            </a>
            <a
                href="/about"
                className={`transition-colors hover:text-foreground/80 ${getClassName("/about")}`}
            >
                About
            </a>
        </div>
    );
}
