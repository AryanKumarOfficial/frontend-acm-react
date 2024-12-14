import React, { useEffect, useState } from "react";
import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function ModeToggle() {
    const [theme, setTheme] = useState("system");

    useEffect(() => {
        // Check saved theme preference from localStorage
        const savedTheme = localStorage.getItem("theme") || "system";
        setTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const applyTheme = (theme) => {
        if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <SunIcon
                        className={`h-[1.2rem] w-[1.2rem] transition-all ${
                            theme === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"
                        }`}
                    />
                    <MoonIcon
                        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                            theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
                        }`}
                    />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleThemeChange("light")}>
                    <SunIcon className="mr-2 h-[1.2rem] w-[1.2rem]"/>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
                    <MoonIcon className="mr-2 h-[1.2rem] w-[1.2rem]"/>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThemeChange("system")}>
                    <LaptopIcon className="mr-2 h-[1.2rem] w-[1.2rem]"/>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}


