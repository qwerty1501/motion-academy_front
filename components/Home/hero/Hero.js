import React  from 'react'
import {useIntl} from "react-intl"
import Link from 'next/link'
import Image from "next/image";
import HeroImg from '../../../assets/img/bigLogo.png';


export default function Hero() {
    const {formatMessage} = useIntl();

    return (
        <section id="hero">
            <div className="container md:container container-3sm mx-auto">
                <div className="grid md:grid-cols-2  lg:grid-cols-2  ">
                    <div className="pt-[100px] hero_tit ">
                        <h2 className="upTitle font-normal leading-8 text-[14px] md:text-[18px] lg:text-[20px]  text-white">
                            {formatMessage({id: "heroTitle"})}
                        </h2>
                        <h1 className=" title_hero text-white leading-relaxed  font-bold">
                            MOTION WEB LLC
                        </h1>
                        <h2 className="upTitle mb-4 font-normal leading-8 text-[14px] md:text-[18px] lg:text-[20px]  text-white">

                        Заманбап билим - жаркын келечек!
                        </h2>

                        <div className="flex">
                            <Link href="#subscribe">
                                <a className="btn">{formatMessage({id: "heroBtn1"})}</a>
                            </Link>

                        </div>
                    </div>
                    <div className="relative">
                        <div className="hero_img">

                            <Image src={HeroImg}/>
                        </div>
                        <span className="hero-shadow"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

