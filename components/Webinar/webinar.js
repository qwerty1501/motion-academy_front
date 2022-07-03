import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {useIntl} from "react-intl";
import {setWebinarList} from "../../redux/reducers/webinar";
import api from "../axiosAPI/api";
import {useEffect} from "react";
import CourseContentLoader from "../ContentLoaders/courseContentLoader";
import MyLoader from "../ContentLoaders/content-loader";



export default function Webinar() {
    const dispatch = useDispatch();
    const {formatMessage,locale} = useIntl()
    const fetchWebinars = async () => {
        dispatch(setWebinarList(null))
        const {data} = await api.get(`api/v1/webinar-list/`)
        dispatch(setWebinarList(data.results))
    }

    useEffect(() => {
        fetchWebinars();
    }, []);
    const data = useSelector(state => state.webinar.webinarList)
    return (
        <section id="master-class " className="pb-12">
            <div className="container  mx-auto">
                <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mb-6">
                    {formatMessage({id: "webinarTitle"})}
                </h1>
                <div className="grid  md:grid-cols-2 gap-6 ">
                    {data ? (
                        data.map((el) => (
                                <div key={el.id} className=" ">
                                    <div className="  bg-white rounded-2xl pl-3 ">
                                        <div className="grid md:grid-cols-2 course__item ">
                                            <div className="flex items-between text-left flex-col pt-3">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center">
                                                        <i className="fas fa-book-open"/>
                                                        <h6 className="text-[#9099A3] ml-2">Вебинар</h6>
                                                    </div>
                                                    <h6 className="text-[#9099A3]">{el.start_date}</h6>
                                                    <h6 className="text-[#9099A3]">{el.new}</h6>
                                                </div>
                                                <h2 className="font-bold h-[66px] sm:mt-6 mt-3 leading-6   sm:mb-4 mb-3 p-2 md:text-[18px] text-[20px]">{el[`title_${locale}`].substr(0,120)}</h2>
                                                <div className="w-[100%] h-[55px] bg-red ">
                                                    <p className="md:text-[15px]">{el[`subtitle_${locale}`].substr(0,60)}</p>
                                                </div>
                                                <div className="course-sdl-1-btn sm:mt-10 relative">
                                                    <Link href={`/webinar/${el.id}`}>
                                                        <a className="course-btn w-[60%] flex items-center">
                                                            Кененирээк
                                                            <i className="fas fa-arrow-right ml-10"/>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="course-sld-2 rounded-tr-xl rounded-br-xl ">
                                                <img src={el.image} alt="ментор" className="course-img "/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    ) : (
                        Array(4).fill(0).map((_, i) => (
                            <CourseContentLoader key={i}/>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}
