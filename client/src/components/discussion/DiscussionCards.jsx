import React,{Fragment} from "react";

export default function DiscussionCards() {

    const Discussions =[
        {
            id:1,
            title : "Hello",
            description : " helooo everyone who "
        },
        {
            id:2,
            title : "Hello",
            description : " helooo everyone who "
        },
        {
            id:3,
            title : "Hello",
            description : " helooo everyone who "
        },
        {
            id:4,
            title : "Hello",
            description : " helooo everyone who "
        },
        {
            id:5,
            title : "Hello",
            description : " helooo everyone who "
        },
        {
            id:6,
            title : "Hello",
            description : " helooo everyone who "
        }
    ]
    return(
        <Fragment>
            <div className="heading md:w-[35%] bg-black text-sky-500 w-[90%] absolute top-[56.5%] left-[32.3%] text-4xl font-extralight pt-5 text-center">
                Join other open Discussions
            </div>
            <div className="border-b border-gray-300 mt-0 md:mt-20 md:w-full w-[90%]"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-black mt-6 md:w-full w-[90%] mx-auto">


                {Discussions.map((card)=>(
                    <div key={card.id} className="flex-row mt-10 p-6 rounded-md hover:bg-blue-600 bg-black border-[1px] border-blue-600">
                        <div className="text-center mb-3 text-3xl font-medium text-white">
                            {card.title}
                        </div>
                        <div className="text-center text-[#CDF5FD] font-light text-md">
                            " {card.description} "
                        </div>
                    </div>
                ))}

            </div>

            
        </Fragment>
    )
}