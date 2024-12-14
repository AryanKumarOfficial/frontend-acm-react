import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {GitHubLogoIcon} from "@radix-ui/react-icons";
import {MdMailOutline} from "react-icons/md";
import {Edit} from "lucide-react";
import {Button} from "../ui/button";
import ModeToggle from "../shared/mode-toggle";
import NavLinks from "../shared/nav-links";
import VVLogo from "../shared/vv-logo";
import NavSheet from "./nav-sheet";

export default function MainNav() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleEditClick = () => {
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            navigate('/edit');
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-2xl border-b">
            <nav className="mx-auto flex w-full lg:max-w-7xl items-center justify-between p-4">
                <div className="flex items-center gap-x-12">
                    <VVLogo/>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <NavLinks/>
                    </div>
                </div>

                <div className="flex lg:hidden">
                    <NavSheet/>
                </div>

                <div className="hidden lg:flex items-center space-x-2">
                    <a
                        href="mailto:deepshikhapatel@oriental.ac.in"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Button variant="ghost" size="icon">
                            <MdMailOutline className="h-4 w-4"/>
                        </Button>
                    </a>

                    <a
                        href="https://github.com/Nev-Labs/ACM_OIST"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Button variant="ghost" size="icon">
                            <GitHubLogoIcon className="h-4 w-4"/>
                        </Button>
                    </a>

                    <ModeToggle/>

                    {/* Edit Button */}
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleEditClick}
                        className="relative group"
                    >
                        <Edit className="h-4 w-4"/>
                        <span className="sr-only">Edit Profile</span>
                        {!isLoggedIn && (
                            <span
                                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Login required
              </span>
                        )}
                    </Button>

                    {!isLoggedIn ? (
                        <>
                            <Button variant="outline" onClick={() => navigate('/register')}>
                                Register
                            </Button>
                            <Button variant="default" onClick={() => navigate('/login')}>
                                Login
                            </Button>
                        </>
                    ) : (
                        <Button
                            variant="ghost"
                            onClick={() => setIsLoggedIn(false)}
                        >
                            Logout
                        </Button>
                    )}
                </div>
            </nav>
        </header>
    );
}
