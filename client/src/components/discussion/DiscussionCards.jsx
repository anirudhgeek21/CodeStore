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
            <div className="heading mt-10 md:w-[90%] bg-black text-sky-500 w-[90%] text-center md:text-5xl text-2xl font-extrabold pt-5 mx-auto">
                Join other open Discussions
            </div>
           

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-black mt-0 md:w-full w-[90%] mx-auto mb-24">


                {discussion.toReversed().map((card)=>(
                    <div key={card.id} className="flex-row mt-10 p-6 rounded-md hover:bg-blue-600 bg-black border-[1px] border-blue-600">
                        
                        <div className="text-center mb-3 text-3xl font-extrabold text-white">
                            {card.title}
                        </div>
                        <div className="text-center text-[#CDF5FD] font-extralight text-lg">
                            " {card.description} "
                        </div>
                    </div>
                ))}

            </div>

            
        </Fragment>
    )
}