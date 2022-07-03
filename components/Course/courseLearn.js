import {useEffect} from "react";
import {gsap} from "gsap";
import {useSelector} from "react-redux";
import {useIntl} from "react-intl";
import CourseContentLoader from "../ContentLoaders/courseContentLoader";
import CourseLearnLoader from "../ContentLoaders/courseLearnLoader";

export default function CourseLearn() {
    const {locale} = useIntl()
    useEffect(() => {
        gsap.from(".rigth9", {})
    })
    useEffect(() => {
        gsap.from(".left9", {})
    })
    const course = useSelector(state => state.course.course)
    return (
        <section id="courseLoren">
            <div className="container">
                <div className="grid md:grid-cols-3 mt-12 mb-4">

                        <h1 className="title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">
                            Курста</h1>

                    {course ? (
                        <div className=" col-span-2 mt-2  " key={course.id}>
                            <div className="flex items-center mb-3">

                                <p className="font-light text-white course__text "  dangerouslySetInnerHTML={{ __html: course.free[`learning_topics_${locale}`] }}/>
                            </div>
                        </div>
                    ) : (
                        Array(1).fill(0).map((_, i) => (
                            <CourseLearnLoader key={i}/>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}

