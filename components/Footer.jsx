import Image from "next/image";
import React from "react";
import fb from "@/public/icon-fb.svg";
import telegram from "@/public/icon-telegram.svg";
import twitter from "@/public/icon-twitter.svg";
import linkedin from "@/public/icon-linkedin.svg";
const Footer = () => {
    return (
        <div className="bg-[#0F0F0F]">
            <div className="container mx-auto px-4 2xl:px-0">
                <div className="flex flex-col justify-center items-center md:flex-row md:justify-between gap-[15px] py-[50px]">
                    <div>webdevindo©Copyright 2023</div>
                    <div className="socmed flex justify-end items-center gap-[12px] ">
                        <a href="#">
                            <Image src={fb} alt="fb" />
                        </a>
                        <a href="#">
                            <Image src={telegram} alt="telegram" />
                        </a>
                        <a href="#">
                            <Image src={twitter} alt="twitter" />
                        </a>
                        <a href="#">
                            <Image src={linkedin} alt="linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
