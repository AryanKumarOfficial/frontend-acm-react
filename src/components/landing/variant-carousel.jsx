import React from "react";
import {
    Card,
    CardContent,
    CardHeader
} from "@/components/ui/card";
import {Link} from "react-router-dom";

export default function VariantCarousel() {
    return (
        <div className="flex lg:flex-row flex-col gap-10">
            <div
                className="transition-all duration-300 hover:scale-105 p-2 shadow-md hover:shadow-xl dark:shadow-md dark:hover:shadow-xl hover:dark:shadow-cyan-300/50 dark:shadow-cyan-300/50">
                <Link to="/events/ai">
                    <Card className="p-20 lg:p-36 bg-[url('/ai.jpg')] bg-cover relative z-0">
                        <CardHeader className="flex flex-row items-center justify-between space-y-1 pb-2"/>
                        <CardContent/>
                    </Card>
                </Link>
                <div className="pt-4"></div>
            </div>

            <Link to="/events/git">
                <div
                    className="rounded-lg transition-all duration-300 hover:scale-105 p-2 shadow-md hover:shadow-xl dark:shadow-md dark:hover:shadow-xl hover:dark:shadow-cyan-300/50 dark:shadow-cyan-300/50">
                    <Card className="p-20 lg:p-36 bg-[url('/git.jpg')] bg-cover relative z-0">
                        <CardHeader className="flex flex-row items-center justify-between space-y-1 pb-2"/>
                        <CardContent/>
                    </Card>
                    <div className="pt-4"></div>
                </div>
            </Link>

            <Link to="/events/blockchain">
                <div
                    className="transition-all hidden sm:block duration-300 hover:scale-105 p-2 shadow-md hover:shadow-xl dark:shadow-md dark:hover:shadow-xl hover:dark:shadow-cyan-300/50 dark:shadow-cyan-300/50">
                    <Card className="p-20 lg:p-36 bg-[url('/blockchain.JPG')] bg-cover relative z-0">
                        <CardHeader className="flex flex-row items-center justify-between space-y-1 pb-2"/>
                        <CardContent/>
                    </Card>
                    <div className="pt-4"></div>
                </div>
            </Link>
        </div>
    );
}
