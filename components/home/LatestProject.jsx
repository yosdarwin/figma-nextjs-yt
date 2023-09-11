import React from "react";
import { Poppins } from "next/font/google";
import project1 from "@/public/project-1.png";
import project2 from "@/public/project-2.png";
import project3 from "@/public/project-3.png";
import project4 from "@/public/project-4.png";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });
const LatestProject = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 2xl:px-0">
                <h2 className={`${poppins.className} title-section`}>
                    Our Latest Project
                </h2>
                <p className="text-center max-w-[514px] mx-auto">
                    There are many variations of passages of Lorem Ipsum
                    available,but the majority have suffered alteration.
                </p>

                <div className="grid grid-cols-12 gap-[21px] mt-[29px]">
                    <div className="col-span-12 lg:col-span-5">
                        <Image
                            src={project1}
                            alt="project 1"
                            className="w-full"
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                        {" "}
                        <Image
                            src={project2}
                            alt="project 2"
                            className="w-full"
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                        {" "}
                        <Image
                            src={project3}
                            alt="project 3"
                            className="w-full"
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        {" "}
                        <Image
                            src={project4}
                            alt="project 4"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestProject;
