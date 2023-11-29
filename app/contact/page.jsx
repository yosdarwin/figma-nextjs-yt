"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "600" });
const poppinsLight = Poppins({ subsets: ["latin"], weight: "300" });
import emailjs from "@emailjs/browser";
const Contact = () => {
    const [loading, setLoading] = useState(false);
    const formRef = useRef();
    const [message, setMessage] = useState("");
    const [inputVal, setInputVal] = useState({
        nama: "",
        email: "",
        pesan: "",
    });
    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        emailjs
            .sendForm(
                process.env.SERVICE_ID,
                process.env.TEMPLATE_ID,
                formRef.current,
                process.env.PUBLIC_KEY
            )
            .then(
                (result) => {
                    if (result.text == "OK") {
                        setMessage("Pesan berhasil dikirim");
                        setInputVal({
                            ...inputVal,
                            nama: "",
                            email: "",
                            pesan: "",
                        });
                        setLoading(false);
                        setTimeout(() => {
                            setMessage("");
                        }, 3000);
                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="container mx-auto my-10 px-10 xl:px-40">
            <div className="flex gap-10 items-center">
                <div className="hidden lg:block flex-1 w-full h-[728px] relative">
                    <Image
                        src={"/contact.png"}
                        alt="contact"
                        fill={true}
                        sizes="100%"
                    />
                </div>
                <div className={`flex-1`}>
                    <h2
                        className={`title-section mb-5 !text-left ${poppins.className}`}
                    >
                        Contact
                    </h2>
                    <p className={`${poppinsLight.className}`}>
                        Tim kami akan membalas pesan anda dalam waktu 3 hari
                        kerja
                    </p>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-10 flex flex-col gap-5"
                    >
                        <input
                            type="text"
                            name="nama"
                            placeholder="Nama"
                            className="px-6 w-full py-4 rounded-md outline-none text-black"
                            value={inputVal.nama}
                            onChange={(e) =>
                                setInputVal({
                                    ...inputVal,
                                    nama: e.target.value,
                                })
                            }
                        />
                        <input
                            type="email"
                            value={inputVal.email}
                            name="email"
                            placeholder="Email"
                            className="px-6 w-full py-4 rounded-md outline-none text-black"
                            onChange={(e) =>
                                setInputVal({
                                    ...inputVal,
                                    email: e.target.value,
                                })
                            }
                        />
                        <textarea
                            value={inputVal.pesan}
                            name="pesan"
                            placeholder="Pesan"
                            className="w-full h-[207px] rounded-md outline-none px-6 py-4 text-black"
                            onChange={(e) =>
                                setInputVal({
                                    ...inputVal,
                                    pesan: e.target.value,
                                })
                            }
                        ></textarea>
                        <button className="px-6 py-4 rounded-md text-white bg-[#C10505] max-w-max">
                            {loading ? "Processing..." : "Kirim Pesan"}
                        </button>
                        {message && (
                            <div className="p-5 bg-green-500 text-center text-white rounded-md">
                                {message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
