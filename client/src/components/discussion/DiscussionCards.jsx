import React,{Fragment,useState,useEffect} from "react";

export default function DiscussionCards() {


    const [discussion, setDiscussion] = useState([]);

    useEffect(() => {
        const getDiscussion = async () => {
            try {
                const response = await fetch("http://localhost:5555/discussions");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                console.log(jsonData);
                setDiscussion(jsonData.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        getDiscussion();
    }, []);

   

    
    return(
        <Fragment>
            <div className="heading md:w-[35%] bg-black text-sky-500 w-[90%] absolute md:top-[56.5%] md:left-[32.3%] top-[70%] md:text-4xl text-2xl font-extralight pt-5 text-center hidden md:block">
                Join other open Discussions
            </div>
            <div className="border-b border-gray-300 mt-16 md:mt-20 md:w-full w-[90%]"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-black mt-6 md:w-full w-[90%] mx-auto mb-24">


                {discussion.map((card)=>(
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