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
        }
    ]
    return(
        <Fragment>
            <div className="heading md:w-[35%] bg-[#CDF5FD] w-[90%] absolute top-[56.5%] left-[32.3%] text-4xl font-extralight pt-5 text-center">
                Join other open Discussions
            </div>
            <div className="border-b border-gray-300 mt-0 md:mt-20 md:w-full w-[90%]"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-[#CDF5FD] mt-6 md:w-full w-[90%] mx-auto">


                {Discussions.map((card)=>(
                    <div key={card.id} className="flex-row hover:bg-[#00A9FF] mt-10 p-6 rounded-md bg-blue-500 hover:shadow-[#89CFF3] hover:shadow-lg">
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