import imgAbout from "@/public/img-about.png";
import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "700" });

const About = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 2xl:px-0">
                <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
                    <Image src={imgAbout} alt="img-about" className="w-full" />
                    <article className="h-full flex flex-col justify-center items-start">
                        <h2 className={`${poppins.className} title-section`}>
                            About Us
                        </h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered in some
                            form, by injected humour.
                        </p>

                        <ul className="list-about-us mt-4">
                            <li>
                                <strong>User experience design</strong> - UI/UX{" "}
                                <br className="hidden lg:block" />
                                Delight the user and make it work.
                            </li>
                            <li>
                                <strong>Web and user interface design</strong> -
                                Development <br className="hidden lg:block" />{" "}
                                Websites, web experiences
                            </li>
                            <li>
                                <strong>Interaction design</strong> - Animation{" "}
                                <br className="hidden lg:block" />I like to move
                                it move it.
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default About;
