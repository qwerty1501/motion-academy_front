import Image from "next/image"
import CourseImg from "../../../assets/img/Vector 40.png"
// import {Data} from "./Data";
import {useSelector} from "react-redux";
import ReactPlayer from "react-player";
import Link from 'next/link'
import {useIntl} from "react-intl";

import CourseHeroNameLoader from "../../ContentLoaders/courseHeroNameLoader";
import CourseHeroScheduleLoader from "../../ContentLoaders/courseHeroScheduleLoader";
import CourseHeroVideoLoader from "../../ContentLoaders/courseHeroVideoLoader";

const border = {
    borderRadius: "20px"
}

export default function CourseHero() {
    const course = useSelector(state => state.course.course)
    console.log(course)
    const { locale} = useIntl();
    return (
        <section id="courses">
            <div className="container">
                <div className="grid md:grid-cols-2">
                    <div className="mt-8">
                        <div className="flex">
                            <div className="w-[25px] relative ">
                                <Image src={CourseImg} layout="fill"/>
                            </div>
                            <p className="text-white text-[14px] font-light ml-4">Курс</p>
                        </div>
                        {course ? (
                            <div className="mt-8 lg:w-[70%] md:w-[97%]" key={course.id}>
                                <h1 className="title_hero text-white leading-tight mb-3   md:text-[32px] lg:text-[40px] text-[22px]  font-bold"
                                    dangerouslySetInnerHTML={{__html: course.free[`title_${locale}`]}}/>
                                <p className="text-white font-light  leading-[24px]"
                                   dangerouslySetInnerHTML={{__html: course.free[`subtitle_${locale}`]}}/>
                            </div>
                        ) : (
                            Array(1).fill(0).map((_, i) => (
                                <CourseHeroNameLoader key={i}/>
                            ))
                        )}

                        <div className="mt-8">
                            <Link href={"#subscribe"} >
                                <a className="btn w-[200px] text-center">Катталуу</a></Link>
                            {/*<p className="text-white mt-2 font-light  leading-[24px]">*/}
                            {/*    Открыта регистрация на курс по самой низкой цене 425,00 $</p>*/}
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="grid lg:grid-cols-2 gap-6">
                                    <div className="TeamBuildingHero_block_card">
                                    <h1>График:</h1>
                                    {course ? (
                                        <div>
                                            <h5 className="text-white"
                                                dangerouslySetInnerHTML={{__html: course.free[`schedule_${locale}`]}}/>
                                            <h5 className="text-white"
                                                dangerouslySetInnerHTML={{__html: course.free[`duration_months_${locale}`]}}/>
                                        </div>  ) : (
                                        Array(1).fill(0).map((_, i) => (
                                            <CourseHeroScheduleLoader key={i}/>
                                        ))
                                    )}
                                </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>

                    <div className="w-[95%]  my-8 rounded-[3px] h-[70vh]">
                        <div className="TeamBuildingHeroLight"/>
                        {course ? (
                            <ReactPlayer
                                controls url={course.free.video}
                                style={border}
                                className="border"
                                width="100%"
                                height="60vh"
                                />
                        ) : (
                            Array(1).fill(0).map((_, i) => (
                                <CourseHeroVideoLoader key={i}/>
                            ))
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}