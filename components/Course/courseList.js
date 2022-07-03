import Slider from "react-slick";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {useIntl} from "react-intl";
import {setCourses} from "../../redux/reducers/course";
import api from "../axiosAPI/api";
import {useEffect} from "react";
import CourseItem from "./CourseItem";
import MasterClassLoader from "../ContentLoaders/masterClassLoader";
import CourseContentLoader from "../ContentLoaders/courseContentLoader";


const settings = {
    infinite: true,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        }]


};


export default function CourseList({el}) {
    const dispatch = useDispatch()
    const fetchCourses = async () => {
        dispatch(setCourses(null))
        const {data} = await api.get(`api/v2/course-list/`)
        dispatch(setCourses(data))
    }
    useEffect(() => {
        fetchCourses();
    }, []);
    const data = useSelector(state => state.course)
    const {formatMessage} = useIntl();

    return (
        <section id="courses" className="mt-14 lg:mt-0">
            <div className="container  mx-auto">
                <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mb-6">
                    {formatMessage({id: "courSes"})}
                </h1>
                <div>
                    <Slider {...settings} className="CourseSlider">
                        {data.courses ? (
                            data.courses.map((elem) => (
                                <CourseItem el={elem} key={elem.id}/>
                            ))
                        ) : (
                            Array(6).fill(0).map((_, i) => (
                                <CourseContentLoader key={i}/>
                            ))
                        )}
                    </Slider>
                </div>
                <div className="flex justify-start">
                    <Link href={'/all-courses'}>
                        <a className="btn2"> Баардык курстар</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}