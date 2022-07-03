import Image  from "next/image";
import ImgI from  "../../../assets/img/img_4.png"


export default function ClubProcess() {
    return (
        <div className="container mx-auto">
            <div className="mt-20 flex justify-center">
                <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mb-6 ">КЛУБГА КОШУЛУУ ПРОЦЕССИ </h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 flex items-start mt-10 gap-8" >
                <div className="flex flex-col justify-center items-center w-[97%] p-2 ">
                    <div className="w-[60px] h-[60px] relative">
                        <h1 className="absolute  text-[36px] leading-[54px] text-white font-extrabold -ml-5 -mt-10">1</h1>
                        <div className="relative w-[100%] h-[100%]">
                            <Image src={ImgI} layout="fill"/>
                        </div>
                    </div>
                    <h1 className="text-center text-[14px] text-white mt-3">Выбираете пакет участия</h1>
                    <p className="text-center text-[12px] text-white font-light mt-2">Подаете заявку и выбираете
                        пакет
                        участия с вашим менеджером</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[97%] p-2 ">
                    <div className="w-[60px] h-[60px] relative">
                        <h1 className="absolute  text-[36px] leading-[54px] text-white font-extrabold -ml-5 -mt-10">2</h1>
                        <div className="relative w-[100%] h-[100%]">
                            <Image src={ImgI} layout="fill"/>
                        </div>
                    </div>
                    <h1 className="text-center text-[14px] text-white mt-3">Проходите отбор</h1>
                    <p className="text-center text-[12px] text-white font-light mt-2">Проходите отбор в кандидаты
                        членов
                        Клуба и оплачиваете выбранный пакет
                        участия (на 6 месяцев)</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[97%] p-2 ">
                    <div className="w-[60px] h-[60px] relative">
                        <h1 className="absolute  text-[36px] leading-[54px] text-white font-extrabold -ml-5 -mt-10">3</h1>
                        <div className="relative w-[100%] h-[100%]">
                            <Image src={ImgI} layout="fill"/>
                        </div>                    </div>
                    <h1 className="text-center text-[14px] text-white mt-3">Проходите онбординг</h1>
                    <p className="text-center text-[12px] text-white font-light mt-2">Проходите онбординг и
                        заполняете
                        подробную анкету о себе,
                        синхронизируете гугл календарь
                        и телеграмм с Платформой</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[97%] p-2 ">
                    <div className="w-[60px] h-[60px] relative">
                        <h1 className="absolute  text-[36px] leading-[54px] text-white font-extrabold -ml-5 -mt-10">4</h1>
                        <div className="relative w-[100%] h-[100%]">
                            <Image src={ImgI} layout="fill"/>
                        </div>                    </div>
                    <h1 className="text-center text-[14px] text-white mt-3">Участвуете в жизни клуба</h1>
                    <p className="text-center text-[12px] text-white font-light mt-2">Участвуете во всех
                        мероприятиях
                        и встречах Клуба</p>
                </div>
                <div className="hidden lg:block"/>
                <div className="flex flex-col justify-center items-center w-[97%] p-2 ">
                    <div className="w-[60px] h-[60px] relative">
                        <h1 className="absolute  text-[36px] leading-[54px] text-white font-extrabold -ml-5 -mt-10">5</h1>
                        <div className="relative w-[100%] h-[100%]">
                            <Image src={ImgI} layout="fill"/>
                        </div>                    </div>
                    <h1 className="text-center text-[14px] text-white mt-3">Мы принимаем решение о
                        вашем членстве в клубе</h1>
                    <p className="text-center text-[12px] text-white font-light mt-2">Через 6 месяцев после проверки
                        и собеседований мы принимаем
                        решение о вашем полноправном
                        членстве в Клубе</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[97%] p-2 ">
                    <div className="w-[60px] h-[60px] relative">
                        <h1 className="absolute  text-[36px] leading-[54px] text-white font-extrabold -ml-5 -mt-10">6</h1>
                        <div className="relative w-[100%] h-[100%]">
                            <Image src={ImgI} layout="fill"/>
                        </div>                    </div>
                    <h1 className="text-center text-[14px] text-white mt-3">Становитесь полноправным
                        членом клуба</h1>
                    <p className="text-center text-[12px] text-white font-light mt-2">Оплачиваете выбранный годовой
                        пакет членства и становитесь
                        полноправным членом клуба</p>
                </div>
                <div/>
            </div>
            {/*<div className="mt-20 flex justify-center ">*/}
            {/*    <div className="flex flex-col items-center w-[100%] sm:w-[72%]">*/}
            {/*        <h1 className="font-bold text-white text-center lg:text-[36px] md:text-[32px] text-[26px] mb-6">ВЫБЕРИТЕ СВОЙ ПАКЕТ*/}
            {/*            УЧАСТИЯ </h1>*/}
            {/*        <p className="text-white text-center text-[15px] leading-[24px] sm:text-[16px] sm:font-normal font-light">Мы очень ответственно относимся к отбору*/}
            {/*            членов Клуба во избежание мошенничества и порчи репутации*/}
            {/*            Кайдзен Клуба и его участников. Потому все, кто желает вступить в Кайдзен Клуб, могут стать*/}
            {/*            на полгода*/}
            {/*            кандидатами в члены Клуба (со всеми правами и функциями члена Клуба), тем самым*/}
            {/*            протестировав все*/}
            {/*            функции и программы Клуба, а наблюдательный совет Клуба, в свою очередь, сможет дать*/}
            {/*            оценку надежности кандидата для дальнейшего полноправного членства в Кайдзен Клубе.</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="grid grid-cols-1 gap-1 lg:gap-4 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-20">*/}
            {/*            <div className="package">*/}
            {/*                <div className=" w-[100%] px-2 py-0.5 sm:py-1  sm:px-3   lg:py-2  lg:px-4  bg-white rounded-[15px]">*/}
            {/*                    <h1 className="text-[#2C3E50] mt-4">f</h1>*/}
            {/*                    <div className="flex items-end mt-2">*/}
            {/*                        <h2 className="text-[#2C3E50] text-[36px]  leading-[54px] font-bold">21</h2>*/}
            {/*                        <p className="text-[#9099A3] newPrice ">12</p>*/}
            {/*                    </div>*/}
            {/*                    <h5 className="text-[12px] text-white rounded-[5px]  bg-[#9099A3] w-[80px] h-[20px] flex justify-center items-center">Полгода</h5>*/}
            {/*                    <p className="text-[#2C3E50] text-[16px] font-light mt-6">12</p>*/}
            {/*                    <div className="mt-12 w-[100%] flex flex-col items-center ">*/}
            {/*                        <button className="pt-2 pb-2  md:text-[18px]  pl-8 pr-8 bg-[#2C3E50] rounded-[15px] text-white ClubPackage_btn ">Оформить подписку</button>*/}
            {/*                        <a href="#" className="my-2 text-[18px] text-[#2C3E50]">Подробнее</a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*</div>*/}
        </div>

    )
}
