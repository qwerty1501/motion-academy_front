import React from "react";
import Image from "next/image";
import Link from 'next/link'
import Mask2 from '../../assets/img/mask2.png'
import {useIntl} from "react-intl";

export default function ClubHero() {
    const {formatMessage} = useIntl();
    return (
        <div id="ClubHero">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2  lg:grid-cols-2  flex items-center ">
                    <div className=" pt-[130px] hero_tit ">
                        <h1 className="title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">IT-Клуб</h1>
                        <p className=" text-white text-[14px] lg:text-[18px] md:text-[16px] md:mb-8 lg:mb-8 sm:mb-8 mb-2">
                            Кыл жана ишен, башкача айтканда,
                            ойлогондун бардыгын ишке ашырууга
                            болот.
                        </p>
                        <div className="flex">
                            <Link href={"#subscribe"}>
                                <a className="btn">
                                    Жазылуу
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ClubHero_img">

                            <div className="hero-shadow2"/>
                      >
                        <Image src={Mask2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
