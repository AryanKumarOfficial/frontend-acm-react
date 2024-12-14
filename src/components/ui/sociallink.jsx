import * as React from "react";
import {GitHubLogoIcon} from "@radix-ui/react-icons";
import {MdMailOutline} from "react-icons/md";
import {FaLinkedin, FaInstagram, FaTwitter} from "react-icons/fa";
import {Button} from "../ui/button"; // Adjust this import based on your project structure
import {Link} from "react-router-dom"; // Assuming you're using React Router

const SocialIconList = ({links}) => {
    const renderIcon = (platform) => {
        switch (platform) {
            case "email":
                return <MdMailOutline className="h-4 w-4"/>;
            case "github":
                return <GitHubLogoIcon className="h-4 w-4"/>;
            case "linkedin":
                return <FaLinkedin className="h-4 w-4"/>;
            case "insta":
                return <FaInstagram className="h-4 w-4"/>;
            case "twitter":
                return <FaTwitter className="h-4 w-4"/>;
            default:
                return null;
        }
    };

    return (
        <div className="hidden lg:flex space-x-1 z-50">
            {links.map((linkObj, index) => (
                <a href={linkObj.link} rel="noreferrer" target="_blank" key={index}>
                    <Button className="flex items-center" variant="ghost" size="icon">
                        {renderIcon(linkObj.platform)}
                    </Button>
                </a>
            ))}
        </div>
    );
};

export default SocialIconList;
