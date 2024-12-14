import React, {useState} from "react";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "../ui/button";
import {GitHubLogoIcon, HamburgerMenuIcon} from "@radix-ui/react-icons";
import ModeToggle from "./mode-toggle";
import {MdMailOutline} from "react-icons/md";
import {Link} from "react-router-dom"; // Assuming you are using react-router for navigation

const projects = [
    {name: "Home", href: "/"},
    {name: "Event", href: "/events"},
    {name: "Team", href: "/team"},
    {name: "About", href: "/about"},
    {name: "Projects", href: "/projects"},
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function NavSheet() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
                    <HamburgerMenuIcon/>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>ACM OIST</SheetTitle>
                    <SheetDescription>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <Link
                                    to="mailto:deepshikhapatel@oriental.ac.in"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Button className="flex items-center" variant="ghost" size="icon">
                                        <MdMailOutline className="h-4 w-4"/>
                                    </Button>
                                </Link>
                                <Link to="#" target="_blank" rel="noreferrer">
                                    <Button className="flex items-center" variant="ghost" size="icon">
                                        <GitHubLogoIcon className="h-4 w-4"/>
                                    </Button>
                                </Link>
                            </div>
                            <div>
                                <ModeToggle/>
                            </div>
                        </div>
                        <div>
                            <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                                {projects.map((project) => (
                                    <Link
                                        key={project.name}
                                        to={project.href}
                                        className="col-span-1 flex rounded-md shadow-sm hover:bg-primary-foreground transition-all duration-200"
                                        onClick={() => setOpen(false)} // Close the sheet on button click
                                    >
                                        <div
                                            className="flex flex-1 items-center justify-between truncate rounded-md border">
                                            <div className="flex-1 truncate px-4 py-2 text-sm">
                                                <h1 className="font-medium">{project.name}</h1>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
