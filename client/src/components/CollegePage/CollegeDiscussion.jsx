import React ,{Fragment }from "react";
import Navigation from '../Navigation';
import Featured from '../featured/FeaturedSection'

export default function CollegeHome() {
    return(
        <Fragment>
            <Navigation x="X" college="IITD"/>
            <div className='mt-[-3%] w-[90%] mx-auto'>
                <Featured name="Trending Discussions in IITD" />
            </div>
        </Fragment>
    )
}