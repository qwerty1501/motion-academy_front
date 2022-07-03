import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../assets/img/Vector (2).svg'
import Lang from '../../../assets/img/til.svg'
import {LOCALES} from "../../../intl/locales";
import {languages} from "../../../constants/languages";
import {useDispatch} from "react-redux";
import {useIntl} from "react-intl";
import {setLocale} from "../../../redux/reducers/main";
import BurgerMenu from "./Burger-Menu/BurgerMenu";
import {useEffect, useState} from "react";


export default function Header() {
    const dispatch = useDispatch();
    const {formatMessage, locale} = useIntl()

    function RU() {
        return document.querySelector(".optionRU").style.display = "none" , document.querySelector(".optionKYR").style.display = "block"

    }

    function KYR() {
        return document.querySelector(".optionRU").style.display = "block" , document.querySelector(".optionKYR").style.display = "none"

    }

    const menuBg = () => {
        if (process.browser) {
            let nav = document.querySelector('#header');
            window.pageYOffset > 15 ? nav.classList.add('menu-bg') : nav.classList.remove('menu-bg');
            console.log(nav)
        }

    }

    useEffect(() => {
        window.onscroll = menuBg;
    },[])


    return (

        <header id="header">
            <div className="container sm:container md:container mx-auto">
                <div className="header_flex">
                    <Link href={'/'}>
                        <div className="flex items-center justify-center">
                            <Image src={Logo} alt="Логотип" width={'40px'} height={'40px'}/>
                            <h2 className="header--logo ml-2 uppercase">
                                motion <br/> web llc
                            </h2>

                        </div>
                    </Link>
                    <nav className="nav-items">
                        <Link href={'/'}><a
                            className="font-medium text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
                            {formatMessage({id: "home"})}
                        </a>
                        </Link>
                        <Link href={'/all-courses'}>
                            <a
                                className="font-medium text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
                                Курстар
                            </a>
                        </Link>
                        <Link href={'it-club'}>
                            <a
                                className="font-medium text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
                                IT-Клуб
                            </a>
                        </Link>

                        {/*<Link href={'/trips'}>*/}
                        <span
                            className="font-medium text-gray-700 text-xl leading-5  mx-4 nav-item">
                               IT-Кемп
                           </span>
                        {/*</Link>*/}


                    </nav>
                    <button className="ml-2   lang flex" name="main">
                        <Image src={Lang}/>
                        <ul className="flex ">
                            <li className="opacity-0  languages">
                                <button aria-current="page" value={locale}
                                        onClick={(e) => dispatch(setLocale(e.target.value))}
                                        className="btn_lang ">
                                    <div className=" optionRU ">
                                        {languages.map((el) => (
                                            <button
                                                onClick={() => RU()}
                                                value={LOCALES[el.key]}
                                                className="btn_tit">
                                                {el.text1}
                                            </button>
                                        ))}
                                    </div>
                                    <div className=" optionKYR  ">
                                        {languages.map((el) => (
                                            <button
                                                onClick={() => KYR()}
                                                value={LOCALES[el.key]}
                                                className="btn_tit">
                                                {el.text}
                                            </button>
                                        ))}
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </button>

                </div>
            </div>
            <BurgerMenu/>
        </header>

    )
}
