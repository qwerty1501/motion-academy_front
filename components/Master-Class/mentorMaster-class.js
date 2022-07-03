import { useSelector} from "react-redux";

import {useIntl} from "react-intl";
import MyLoader from "../ContentLoaders/content-loader";

export default function MentorMasterClass() {
    const masterClass = useSelector(state => state.masterClass.masterClass);
    const {locale} = useIntl()

    return (
        <section>
            <div className="container">
                {masterClass ? (
                    <div className="grid grid-cols-3  mt-10 TeamCurseMaster" key={masterClass.id}>
                        <div className=" relative col-span-2 ">
                            <h6 className="capitalize leading-18 text-[12px] text-[#9099A3]">МАСТЕР-КЛАССТЫН СПИКЕРИ</h6>
                            <h1 className="title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">
                                {masterClass.mentor.full_name}
                            </h1>
                            <p className="capitalize leading-18 text-[16px] font-[500] text-[white] mt-1"  dangerouslySetInnerHTML={{ __html: masterClass.mentor[`short_bio_${locale}`]}}/>
                            <p className="capitalize leading-18 text-[16px] font-[500] text-[white] mt-1"  dangerouslySetInnerHTML={{ __html: masterClass.mentor[`bio_${locale}`]}}/>


                        </div>
                        <div className="DontworkingMaster_block ">
                            <img src={masterClass.mentor.image} alt="Фото тренера" className="mentor-img"/>
                        </div>
                    </div>
                ) : (
                    Array(1).fill(0).map((_, i) => (
                        <MyLoader key={i}/>
                    ))
                )}

                {/*<div className="mt-20 sm:w-[55%]">*/}
                {/*    <h1 className="capitalize title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">ПРЕИМУЩЕСТВА*/}
                {/*        ОБУЧЕНИЯ*/}
                {/*        С КОУЧ-ТРЕКЕРОМ</h1>*/}
                {/*</div>*/}
                {/*<div className="grid sm:grid-cols-2 lg:grid-cols-4  mt-4 TeamCurseMaster3">*/}
                {/*    <div className="p-6 ">*/}
                {/*        <span className="text-[#1A5CFF]  leading-[54px] text-[40px] font-extrabold  capitalize">1</span>*/}
                {/*        <h1 className="capitalize leading-[30px] my-3  text-[20px] text-[white] font-black">Сопровождение*/}
                {/*            коуч-трекера</h1>*/}
                {/*        <p className="capitalize mt-1 mb-3 leading-[24px]  text-[15px] text-[white]">Путь с проводником*/}
                {/*            в 2 раза*/}
                {/*            легче и быстрее - потому на*/}
                {/*            весь период обучения тебя б*/}
                {/*            удет сопровождать опытный*/}
                {/*            коуч-трекер</p>*/}
                {/*    </div>*/}
                {/*    <div className="p-6 ">*/}
                {/*        <span className="text-[#1A5CFF]  leading-[54px] text-[40px] font-extrabold  capitalize">2</span>*/}
                {/*        <h1 className="capitalize leading-[30px] my-3  text-[20px] text-[white] font-black">Специальная*/}
                {/*            система*/}
                {/*            домашних заданий</h1>*/}
                {/*        <p className="capitalize mt-1 mb-3 leading-[24px]  text-[15px] text-[white]">Уникальная система*/}
                {/*            заданий*/}
                {/*            и тестов поможет намного*/}
                {/*            эффективно усвоить ценные*/}
                {/*            навыки и знания и применить*/}
                {/*            их уже во время обучения</p>*/}
                {/*    </div>*/}
                {/*    <div className="p-6 ">*/}
                {/*        <span className="text-[#1A5CFF]  leading-[54px] text-[40px] font-extrabold  capitalize">3</span>*/}
                {/*        <h1 className="capitalize leading-[30px] my-3  text-[20px] text-[white] font-black">Помощь*/}
                {/*            куратора и*/}
                {/*            ответы на вопросы</h1>*/}
                {/*        <p className="capitalize mt-1 mb-3 leading-[24px]  text-[15px] text-[white]">Все задания будут*/}
                {/*            проверять*/}
                {/*            твой куратор и давать*/}
                {/*            обратную связь по каждому*/}
                {/*            из них. В любой момент ты*/}
                {/*            сможешь получить ответы*/}
                {/*            на свои вопросы</p>*/}
                {/*    </div>*/}
                {/*    <div className="p-6 w-[100%] ">*/}
                {/*        <span className="text-[#1A5CFF]  leading-[54px] text-[40px] font-extrabold  capitalize">4</span>*/}
                {/*        <h1 className="capitalize leading-[30px] my-3  text-[20px] text-[white] font-black">Закрытый чат*/}
                {/*            с*/}
                {/*            единомышленниками</h1>*/}
                {/*        <p className="capitalize mt-1 mb-3 leading-[24px]  text-[15px] text-[white]">Путь с проводником*/}
                {/*            в 2 раза*/}
                {/*            легче и быстрее - потому на*/}
                {/*            весь период обучения тебя б*/}
                {/*            удет сопровождать опытный*/}
                {/*            коуч-трекер</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}