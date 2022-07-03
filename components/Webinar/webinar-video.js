import React from 'react'
import ReactPlayer from 'react-player'
import {useSelector} from "react-redux";
import MyLoader from "../ContentLoaders/content-loader";
import CourseHeroVideoLoader from "../ContentLoaders/courseHeroVideoLoader";

export default function WebinarVideo() {
    const border = {
        borderRadius: "20px"
    }
    const data = useSelector(state => state.webinar.webinar)

    return (
        <section>
            <div className="container mx-auto">
                <div className="Video pt-[100px]  flex justify-center m-auto ">
                    {data ? (
                        <ReactPlayer controls url={data.video} style={border} className="border" loop width={1040}
                                     height={500}/>
                    ) : (
                        Array(1).fill(0).map((_, i) => (
                            <CourseHeroVideoLoader key={i}/>
                        ))
                    )
                    }
                </div>
            </div>
        </section>
    )
}

