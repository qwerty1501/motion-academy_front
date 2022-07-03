import {useIntl} from "react-intl";
import Link from "next/link";
import {useSelector} from "react-redux";
import MyLoader from "../ContentLoaders/content-loader";

export default function MasterClassItem({el}) {
    const {locale} = useIntl();
    const masterClass = useSelector(state => state.masterClass.masterClass)

    return (

        <Link href={`/master-class/${el.id}`} key={el.id}>

            <div
                className="bg-white rounded-xl  px-2 py-2 sm:py-5  sm:px-5 md:p-5  hover:transform hover:translate-y-4 hover:-translate-y-4 duration-200 hover:duration-200 cursor-pointer mt-4">
                <span
                    className="bg-[#9099A3] text-[14px] sm:text-[16px] lg:text-[17px] rounded text-white px-[10px]">{el.themes[`title_${locale}`]}</span>
                <span className="text-[#9099A3] ml-2 text-[14px] sm:text-[16px] lg:text-[17px]">мастер-класс</span>
                <h1 className="font-bold text-[20px] md:text-[17px] mb-5 mt-5"
                    dangerouslySetInnerHTML={{__html: el[`title_${locale}`]}}/>
                <div className="w-[100%] h-[120px] overflow-hidden relative">
                    <p className="text-[#2C3E50] md:text-[15px] leading-5 "
                       dangerouslySetInnerHTML={{__html: el[`subtitle_${locale}`]}}/>
                </div>
                <div className="bg-[#9099A3] w-full h-1 "/>
                {masterClass ? (
                    <div className="flex items-center   ">
                        <div className="w-[40x] relative h-[40px] rounded-[50%]">
                            <img src={masterClass.mentor.image} alt="image"
                                 className="w-[45px]  h-[45px] rounded-[50%]"/>
                        </div>
                        <div className="ml-3">
                            <h4 className="text-[#2C3E50] text-[16px] font-bold leading-7">{masterClass.mentor.full_name}</h4>
                            <p className="text-[#9099A3] text-[14px] font-medium"
                               dangerouslySetInnerHTML={{__html: masterClass.mentor[`short_bio_${locale}`]}}/>

                        </div>
                    </div>
                ) : (
                    Array(1).fill(0).map((_, i) => (
                        <MyLoader key={i}/>
                    ))
                )}

            </div>

        </Link>

    )
}

