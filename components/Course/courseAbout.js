import {useSelector} from "react-redux";
import Link from 'next/link'
import CourseAboutLoader from "../ContentLoaders/courseAboutLoader";
export default function TeamAbout() {
    const course = useSelector(state => state.course.course)
    console.log(course)
    return (
        <>
            <div className="container team_about">
                <div className="flex">
                    <h1 className="text-white text-[36px] font-bold leading-[54px] my-3">Курс боюнча</h1>
                </div>
                <div>

                        {course ? (
                            <span className="list-disc text-white  text-[16px] lg:text-[18px]  font-light leading-[22px] "
                                key={course.id}>
                                {course.free.subtitle_ru}
                            </span>

                        ) : null}

                </div>
                {/*<div>*/}
                {/*    <ul className=" p-4">*/}
                {/*        {course ? (*/}
                {/*            <li className="list-disc text-white w-[60%] text-[14px]  font-light leading-[22px] my-2"*/}
                {/*                key={course.id}>*/}
                {/*                {course.overview}*/}
                {/*            </li>*/}

                {/*        ) : (<h1>Loading</h1>)}*/}
                {/*    </ul>*/}
                {/*</div>*/}
                {/*<div>*/}

                {/*    <ul className=" p-4">*/}
                {/*        {course ? (*/}
                {/*            <li className="list-disc text-white w-[60%] text-[14px]  font-light leading-[22px] my-2"*/}
                {/*                key={course.id}>*/}
                {/*                {course.overview}*/}
                {/*            </li>*/}
                {/*        ) : (<h1>Loading</h1>)}*/}

                {/*    </ul>*/}

                {/*</div>*/}
                <div className='flex my-4'>
                    <Link href={"/#program"}><a  className="btn">Катталуу</a></Link>
                </div>
            </div>

        </>
    )
}
