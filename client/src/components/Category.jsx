import React, { Fragment } from "react";

export default function Footer(prop) {
    const Categories = [
        { title: "NSUT" },
        { title: "DTU" },
        { title: "IIITD" },
        { title: "IITD" },
        { title: "MAIT" },
        { title: "MSIT" },
        { title: "IPU" },
        { title: "IGDTU" },
        { title: "" },
        
    ];

    return (
        <Fragment>
            <div>
                <div className="text-sm mt-7 text-sky-500 uppercase max-md:max-w-full ml-[2.49rem] font-extrabold">
                    🌐 {prop.name} Communities
                </div>
                <div className="grid md:grid-cols-9 grid-cols-3 md:mt-6 mt-6 max-md:max-w-full ml-[2.49rem]">
                    {Categories.map((category, index) => (
                        <div key={index} className="bg-black mt-3 font-[1000] md:w-[72%] w-[87%] hover:bg-blue-500 md:py-8 py-8 md:text-2xl text-md border-[1px] border-blue-500 rounded-full">
                            <div className="text-white text-center">{category.title}</div>
                        </div>
                    ))}
                </div>

                
            </div>
        </Fragment>
    );
}
