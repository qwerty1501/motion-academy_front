import React, {useState} from "react";
import Link from 'next/link'
import {useIntl} from "react-intl";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import Image from "next/image"
import Card from "../../../assets/img/img_3.png"
import Card2 from "../../../assets/img/Group (1).png"
import Card3 from "../../../assets/img/img_1.png"
import Lesson from "../lesson";
import {useSelector} from "react-redux";
import CourseProgramLoader from "../../ContentLoaders/courseProgramLoader";


export default function CourseProgram() {
    const {locale} = useIntl()
    const [state, setState] = useState()
    const course = useSelector(state => state.course.course);

    const Program = index => {
        if (state === index) {
            return setState(null)
        }
        return setState(index)
    }


    return (
        <section id="program ">
            <div className="container">
                <div className="pt-14">
                    <h1 className="title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">
                        Курстун программасы
                    </h1>
                    {course ? (
                            course.free.modules?.map((elem, i) => {
                                return (
                                    <div className="flex md:w-[80%] flex-col md:flex-row  programCard" key={course.id}>
                                        <div className="programCard_modal">
                                            <h1 className="text-white">Модуль<span
                                                className="ml-1">{i + 1}</span></h1>
                                        </div>
                                        <div>
                                            <div className="programCard_block" onClick={() => Program(i)}>
                                                <h1 className="flex"> {elem.title}<span className="programCard_block_line">
                                                        {i === state ? <IoIosArrowUp/> : <IoIosArrowDown/>
                                                    }
                                                    </span>
                                                </h1>
                                            </div>
                                            {state === i ? (

                                                <ul className="text-white flex justify-around flex-col">
                                                    {elem.lessons.map((el, idx) => <Lesson el={el} idx={idx} key={idx}/>)}
                                                </ul>

                                            ) : null}
                                        </div>
                                    </div>
                                )

                                return null;
                            })
                        )
                        : (<h1>loading</h1>)
                    }
                    <div className="flex flex-col sm:flex-row">

                        <Link href={'#subscribe'}>
                            <a className="btn">
                                Катталуу
                            </a>
                        </Link>


                        {/*<div className="sm:ml-4"><Link href={'#courseLoren  '}>*/}
                        {/*    <a className="btn2">*/}
                        {/*        Чему я научусь*/}
                        {/*    </a>*/}
                        {/*</Link>*/}
                    </div>
                </div>
                <div className="pt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className=" flex-initial md:w-[90%]  ProgramCard">
                        <div className="relative p-1 w-[46px] ml-3 mt-3"><Image src={Card}/></div>
                        <h1 className="mt-10">Видео материалдар *</h1>
                        <p>Ар бир сабак видеого жазылып жабык Telegram группага жиберилет</p>
                    </div>
                    <div className="md:w-[90%] flex-initial  ProgramCard">
                        <div className="relative p-1 w-[46px] ml-3 mt-3"><Image src={Card2}/></div>
                        <h1 className="mt-10">100% практика</h1>
                        <p>Курс 100% практика жана кыргыз тилинде отулот </p>
                    </div>
                    <div className=" md:w-[90%] flex-initial  ProgramCard">
                        <div className="relative p-1 w-[46px] ml-3 mt-3"><Image src={Card3}/></div>
                        <h1 className="mt-10">Группада максимум 12-15 студент </h1>
                        <p>Ар бир студентге жекече козомол, жана ошондойле 2 ментор колдоо корсотот</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
