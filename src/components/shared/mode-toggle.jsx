import React from "react";
import {LaptopIcon, MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {useState} from "react";
import {Button} from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function ModeToggle() {
    const [theme, setTheme] = useState("system");

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
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    <SunIcon className="mr-2 h-[1.2rem] w-[1.2rem]"/>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <MoonIcon className="mr-2 h-[1.2rem] w-[1.2rem]"/>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    <LaptopIcon className="mr-2 h-[1.2rem] w-[1.2rem]"/>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
