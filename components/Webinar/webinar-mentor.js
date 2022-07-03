import {useIntl} from "react-intl";

import React from "react";
import {useSelector} from "react-redux";
import MyLoader from "../ContentLoaders/content-loader";
import MasterClassLoader from "../ContentLoaders/masterClassLoader";
import MentorCourseLoader from "../ContentLoaders/mentorCourseLoader";

export default function WebinarMentor() {
    const data = useSelector(state => state.webinar.webinar)

    const {locale, formatMessage} = useIntl()
    return (
        <section>
            <div className="container mx-auto">

                    {data ? (
                        <div className="grid grid-cols-3  mt-10 TeamCurseMaster" key={data.id}>
                            <div className=" relative col-span-2  ">
                                <h6 className="capitalize leading-18 text-[12px] text-[#9099A3]">КУРС ВЕДЕТ</h6>
                                <h1 className="title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">
                                    {data.mentor.full_name}
                                </h1>
                                <p className="capitalize leading-18 text-[16px] font-[500] text-[white] mt-1"
                                   dangerouslySetInnerHTML={{__html: data.mentor[`short_bio_${locale}`]}}/>
                                <p className="capitalize leading-18 text-[16px] font-[500] text-[white] mt-1"
                                   dangerouslySetInnerHTML={{__html: data.mentor[`bio_${locale}`]}}/>


                            </div>
                            <div className="DontworkingMaster_block ">
                                <img src={data.mentor.image} alt="Фото тренера" className="mentor-img"/>
                            </div>
                        </div>
                    ) : (
                        Array(1).fill(0).map((_, i) => (
                            <MentorCourseLoader key={i}/>
                        ))
                    )}
                {/*<div className="mt-20 sm:w-[55%]">*/}
                {/*    <h1 className="capitalize title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">*/}
                {/*        ПРЕИМУЩЕСТВА*/}
                {/*        ОБУЧЕНИЯ*/}
                {/*        С КОУЧ-ТРЕКЕРОМ</h1>*/}
                {/*</div>*/}
                {/*<div className="grid sm:grid-cols-2 lg:grid-cols-4  mt-4 TeamCurseMaster3">*/}
                {/*    <div className="p-6 ">*/}
                {/*            <span*/}
                {/*                className="text-[#1A5CFF]  leading-[54px] text-[40px] font-extrabold  capitalize">1</span>*/}
                {/*        <h1 className="capitalize leading-[30px] my-3  text-[20px] text-[white] font-black">Сопровождение*/}
                {/*            коуч-трекера</h1>*/}
                {/*        <p className="capitalize mt-1 mb-3 leading-[24px]  text-[15px] text-[white]">Путь с*/}
                {/*            проводником*/}
                {/*            в 2 раза*/}
                {/*            легче и быстрее - потому на*/}
                {/*            весь период обучения тебя б*/}
                {/*            удет сопровождать опытный*/}
                {/*            коуч-трекер</p>*/}
                {/*    </div>*/}
                {/*    <div className="p-6 ">*/}
                {/*            <span*/}
                {/*                className="text-[#1A5CFF]  leading-[54px] text-[40px] font-extrabold  capitalize">2</span>*/}
                {/*        <h1 className="capitalize leading-[30px] my-3  text-[20px] text-[white] font-black">Специальная*/}
                {/*            система*/}
                {/*            домашних заданий</h1>*/}
                {/*        <p className="capitalize mt-1 mb-3 leading-[24px]  text-[15px] text-[white]">Уникальная*/}
                {/*            система*/}
                {/*            заданий*/}
                {/*            и тестов поможет намного*/}
                {/*            эффективно усвоить ценные*/}
                {/*            навыки и знания и применить*/}
                {/*            их уже во время обучения</p>*/}
                {/*    </div>*/}
                {/*    <div className="p-6 ">*/}
                {/*            <span*/}
                {/*                className="text-[#1A5CFF]  leading-[54px] text-[40px] font-extrabold  capitalize">3</span>*/}
                {/*        <h1 className="capitalize leading-[30px] my-3  text-[20px] text-[white] font-black">Помощь*/}
                {/*            куратора и*/}
                {/*            ответы на вопросы</h1>*/}
                {/*        <p className="capitalize mt-1 mb-3 leading-[24px]  text-[15px] text-[white]">Все задания*/}
                {/*            будут*/}
                {/*            проверять*/}
                {/*            твой куратор и давать*/}
                {/*            обратную связь по каждому*/}
                {/*            из них. В любой момент ты*/}
                {/*            сможешь получить ответы*/}
                {/*            на свои вопросы</p>*/}
                {/*    </div>*/}
                {/*    <div className="p-6 w-[100%] ">*/}
                {/*            <span*/}
                {/*                className="text-[#1A5CFF]  leading-[54px] text-[40px] font-extrabold  capitalize">4</span>*/}
                {/*        <h1 className="capitalize leading-[30px] my-3  text-[20px] text-[white] font-black">Закрытый*/}
                {/*            чат*/}
                {/*            с*/}
                {/*            единомышленниками</h1>*/}
                {/*        <p className="capitalize mt-1 mb-3 leading-[24px]  text-[15px] text-[white]">Путь с*/}
                {/*            проводником*/}
                {/*            в 2 раза*/}
                {/*            легче и быстрее - потому на*/}
                {/*            весь период обучения тебя б*/}
                {/*            удет сопровождать опытный*/}
                {/*            коуч-трекер</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="grid lg:grid-cols-4 md:grid-cols-2  mt-10 DontworkingMaster3 p-10">*/}
                    {/*<div className="p-6 ">*/}
                    {/*        <span*/}
                    {/*            className="text-[#1A5CFF]  leading-[54px] text-[40px] font-extrabold  capitalize">1</span>*/}
                    {/*    <h1 className="capitalize leading-[30px] mt-4  mb-4  text-[20px] text-[white] font-black">{formatMessage({id: "DontworkingMaster3Tit1"})}</h1>*/}
                    {/*    <p className="capitalize mt-1 mb-3 leading-[24px]  text-[15px] text-[white]">{formatMessage({id: "DontworkingMaster3Desc1"})}</p>*/}
                    {/*</div>*/}
                    {/*<div className="p-6 ">*/}
                    {/*        <span*/}
                    {/*            className="text-[#1A5CFF]  leading-[54px] text-[40px] font-extrabold  capitalize">2</span>*/}
                    {/*    <h1 className="capitalize leading-[30px] mt-4  mb-4  text-[20px] text-[white] font-black">{formatMessage({id: "DontworkingMaster3Tit2"})}</h1>*/}
                    {/*    <p className="capitalize mt-1 mb-3 leading-[24px]  text-[15px] text-[white]">{formatMessage({id: "DontworkingMaster3Desc2"})}</p>*/}
                    {/*</div>*/}
                    {/*<div className="p-6 ">*/}
                    {/*        <span*/}
                    {/*            className="text-[#1A5CFF]  leading-[54px] text-[40px] font-extrabold  capitalize">3</span>*/}
                    {/*    <h1 className="capitalize leading-[30px] mt-4  mb-4  text-[20px] text-[white] font-black">{formatMessage({id: "DontworkingMaster3Tit3"})}</h1>*/}
                    {/*    <p className="capitalize mt-1 mb-3 leading-[24px]  text-[15px] text-[white]">{formatMessage({id: "DontworkingMaster3Desc3"})}</p>*/}
                    {/*</div>*/}
                    {/*<div className="p-6 ">*/}
                    {/*        <span*/}
                    {/*            className="text-[#1A5CFF]  leading-[54px] text-[40px] font-extrabold  capitalize">4</span>*/}
                    {/*    <h1 className="capitalize leading-[30px] mt-4  mb-4  text-[20px] text-[white] font-black">{formatMessage({id: "DontworkingMaster3Tit4"})}</h1>*/}
                    {/*    <p className="capitalize mt-1 mb-3 leading-[24px]  text-[15px] text-[white]">{formatMessage({id: "DontworkingMaster3Desc4"})}</p>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}
