import Link from 'next/link'
import {useIntl} from "react-intl";
import api from "../axiosAPI/api";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setMasterClasses} from "../../redux/reducers/master-class";
import MasterClassLoader from "../ContentLoaders/masterClassLoader";


export default function MasterClass() {
    const fetchMasterClasses = async () => {
        dispatch(setMasterClasses(null))
        const {data} = await api.get(`api/v2/master-classes`)
        dispatch(setMasterClasses(data.results))

    }
    const dispatch = useDispatch()


    useEffect(() => {
        fetchMasterClasses();
    }, []);
    const data = useSelector(state => state.masterClass.masterClasses)

    const { locale} = useIntl();
    return (
        <section id="master-class">
            <div className="container container-2sm md:container mx-auto">
                <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mb-6">Мастер-Класстар</h1>
                {/*<div className="flex ">*/}
                {/*    <button className="btn3">{formatMessage({"id": "all"})}</button>*/}
                {/*    <div className="ml-2">*/}
                {/*        <button className="btn2">{formatMessage({"id": "progress"})}</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-auto gap-4">
                    {data ? (
                        data.map((el) => (
                            <Link href={`/master-class/${el.id}`} key={el.id}>
                                <div className="bg-white rounded-xl  px-2 py-2 sm:py-5  sm:px-5 md:p-3 mt-12 mb-12 hover:transform hover:translate-y-4 hover:-translate-y-4 duration-200 hover:duration-200 cursor-pointer	">
                                    <span
                                        className="bg-[#9099A3] text-[14px] sm:text-[16px] lg:text-[17px] rounded text-white px-[10px]">{el.themes[`title_${locale}`]}</span>
                                    <span
                                        className="text-[#9099A3] ml-2 text-[14px] sm:text-[16px] lg:text-[17px]">мастер-класс</span>
                                    <h1 className="font-bold text-[20px] md:text-[17px] mb-5 mt-5" dangerouslySetInnerHTML={{ __html: el[`title_${locale}`] }}/>
                                    <p className="text-[#2C3E50] md:text-[15px] leading-5 mb-5" dangerouslySetInnerHTML={{ __html: el[`subtitle_${locale}`] }} />
                                    <div className=" bg-[#9099A3] w-full h-1 "/>
                                     <div className="flex items-center">
                                        <div className="w-[40x] relative h-[40px] rounded-[50%]">
                                            <img src={el.mentor.image} alt="image" className="w-[45px]  h-[45px] rounded-[50%]"/>
                                        </div>
                                        <div className="ml-3">
                                            <h4 className="text-[#2C3E50] text-[16px] font-bold leading-7">{el.mentor.full_name}</h4>
                                            <p className="text-[#9099A3] text-[14px] font-medium" dangerouslySetInnerHTML={{ __html: el.mentor[`short_bio_${locale}`] }}/>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        Array(6).fill(0).map((_, i) => (
                            <MasterClassLoader key={i}/>
                        ))
                    )}
                </div>
                <div className="flex justify-center">
                    <Link href={'/all-master-classes'}>
                        <a className="btn2"> Баардык мастер-класстар</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}
