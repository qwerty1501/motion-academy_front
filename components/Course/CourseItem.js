import Link from "next/link";
import {useIntl} from "react-intl";

export default function CourseItem({el}) {
    const {locale} = useIntl();
    return (
        <div key={el.id} className=" bg-white rounded-2xl  max-w-[96%] ml-2   ">
            <div className="grid md:grid-cols-2 course__item relative">
                <div className="course-sdl-1 pl-2">
                    <div className="flex justify-between items-start flex-col p-2">
                        <div className="flex items-center justify-start">
                            <i className="fas fa-book-open"/>
                            <h6 className="text-[#9099A3] ml-2">Курс</h6>
                            <h6 className="text-[#9099A3] ml-6">{el.modules.length} модуль</h6>
                        </div>
                        <h2 className="font-bold mt-8 mb-1 md:text-[22px] text-[20px]"
                            dangerouslySetInnerHTML={{__html: el[`title_${locale}`]}}/>

                        <h6 className="text-[#9099A3]"
                            dangerouslySetInnerHTML={{__html: el[`subtitle_${locale}`]}}/>
                    </div>
                    <Link href={`/course/${el.id}`}>
                        <a className="course-btn  ">
                            Кененирээк
                            <i className="fas fa-arrow-right ml-12 mt-1"/>
                        </a>
                    </Link>
                </div>
                <div className="course-sld-2 ">
                    <img src={el.image} alt=" Photo" className="course-img"/>
                </div>
            </div>
        </div>
    )

}