import Image from "next/image";
import Link from "next/link";
import Logo from '../../../assets/img/Vector (2).svg'
import Visa from '../../../assets/img/Visa_Inc._logo 1.png'
import MasterCard from '../../../assets/img/1609314895logo-mastercard-mobile 1.png'
import {useIntl} from "react-intl";

export default function Footer() {
    const {formatMessage} = useIntl();
    return (

        <footer>
            <div className="container md:container sm:container mx-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                    <div className="md:block hidden">
                        <Image src={Logo} className=""/>
                    </div>
                    <div className="md:block hidden">
                        <Link href={'/'}>
                            <h1 className="text-white font-bold mb-4 cursor-pointer">motionweb.edu</h1>

                        </Link>
                        <ul>
                            <li className="mb-4">
                                <Link href={'/'}><a
                                    className="font-medium text-gray-400 text-sm leading-5 mx-4 hover:text-white">
                                    {formatMessage({'id': 'home'})}
                                </a>
                                </Link>

                            </li>

                            <li className="mb-4">
                                <Link href={'/it-club'}><a
                                    className="font-medium text-gray-400 text-sm leading-5 mx-4 hover:text-white">
                                    {formatMessage({"id": "club"})}
                                </a>
                                </Link>

                            </li>
                            <li className="mb-4">
                                <a
                                    className="font-medium text-gray-400 text-sm leading-5 mx-4 hover:text-white">
                                    {formatMessage({"id": "tripLink"})}
                                </a>


                            </li>
                            {/*<li className="mb-4 ml-4">*/}
                            {/*    <Link href={"/login"}>*/}
                            {/*        <a className=" btn w-[30%] ">войти</a>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="text-white font-bold mb-4">{formatMessage({id: "Connect"})}</h1>
                        <p className="font-medium text-gray-400 text-sm leading-5">
                            {formatMessage({id: "footerText"})} :
                            <a href="mailto:motionweb312@gmail.com"> motionweb312@gmail.com</a>
                        </p>
                        <div className="flex justify-between items-center flex-wrap mt-4">
                            <a href="https://www.instagram.com/motion_web/?hl=ru">
                                <i className="fab fa-instagram text-white  text-2xl rounded-full px-2 py-2	"/>
                            </a>
                            {/*<a href="https://instagram.com">*/}
                            {/*    <i className="fab fa-facebook text-white  text-2xl rounded-full px-2 py-2	"/>*/}
                            {/*</a>*/}
                            <a href="https://t.me/motion_web_company">
                                <i className="fab fa-telegram-plane text-white  text-2xl rounded-full px-2 py-2	"/>
                            </a>
                            <a href="https://www.linkedin.com/company/motion-web/mycompany/">
                                <i className="fab fa-linkedin-in text-white  text-2xl rounded-full px-2 py-2	"/>
                            </a>

                            <a href="https://www.youtube.com/channel/UCO3609q78G8v8pC0Wp6hgow">
                                <i className="fab fa-youtube text-white  text-2xl rounded-full px-2 py-2	"/>
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <h3 className="text-white font-bold leading-3 md:-ml-4	mt-4 md:mt-0 mb-6 md:mb-2">
                            Адрес
                        </h3>
                        {/*<div className="relative">*/}
                        {/*    <input type="email" placeholder="  Ваш e-mail"*/}
                        {/*           className="footer_input leading-4 text-[#2C3E50] rounded-full w-60 rounded  py-3 px-2"/>*/}
                        {/*    <Link href={"/login"}>*/}
                        {/*        <a className=" btn absolute top-[0px] right-[30px]">войти</a>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                        <p className="font-medium text-gray-400 text-sm leading-5 mt-4   mb-4">
                            ОсОО Моушн-Веб, Кыргызстан, г.Бишкек
                            ул. Турусбекова. 109/3
                        </p>
                    </div>
                </div>
                <div
                    className="flex  justify-between items-center    flex-col-reverse sm:flex-row">

                    <h4 className="font-medium text-gray-400 text-sm leading-5 mx-4 mb-4">
                        Автордук укук © 2022
                        "Motion Web LLC"</h4>
                    <div className="mb-4 flex">
                        <h4 className="font-medium text-gray-400 text-sm leading-5 mx-4">
                            Көрсөтүүнүн шарттары
                        </h4>
                        <h4 className="font-medium text-gray-400 text-sm leading-5 mx-4">
                            Кайтаруу саясаты
                        </h4>
                    </div>
                    <div className="flex   justify-between items-center mb-4">

                        <a href="#" className="ml-4"><Image src={Visa}/></a>
                        <a href="#" className="ml-4"><Image src={MasterCard}/></a>
                    </div>
                </div>
            </div>

        </footer>


    )
}
