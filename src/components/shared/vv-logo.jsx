import React from "react";
import {Button} from "../ui/button";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {Link} from "react-router-dom"; // Assuming you're using react-router for routing

export default function VVLogo() {
    return (
        <HoverCard>
            <Link to="/">
                <Button variant="link" className="pt-12 text-lg">
                    <img
                        alt="Student Chapter OIST Logo"
                        src="/logo1.png"
                        width={100}
                        height={100}
                        className="w-20 h-20"
                    />
                    Student Chapter OIST
                </Button>
            </Link>
        </HoverCard>
    );
}
