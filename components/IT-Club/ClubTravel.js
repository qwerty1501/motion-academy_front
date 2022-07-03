import Image from "next/image"
import ImgF from "../../assets/img/To_be_youself 1.png"

export default function ClubTravel() {
    return (

        <div className="container mx-auto">
            <div className="mt-20 flex justify-center">
                <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] m-6">БИРГЕЛЕШКЕН САЯКАТ</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[15px] mb-5">
                <div className="p-3  md:p-4 lg:p-10 bg-white">
                    <h1 className="  text-[20px] leading-[30px] font-bold">Кыргызстан ичи боюнча саякат</h1>

                    <p className="mt-10">Команда менен Кыргызстандын ар бир региондордогу кооз жана суктанчуу жерлерге чыгып саякат кылуу жана саякат менен жаны эмоция жана мотивация алуу.</p>

                    <div className="flex p-8  mb-4 flex-col">
                        <div className="flex">
                            <span className="mr-2 text-[#1A5CFF]">✓</span>
                            <p className="text-[16px] leading-[21px] font-light">Жаңы жаркыраган эмоциялар жана түшүнүктөр</p></div>
                        <div className="flex md:my-2 mt-4"><span className="mr-2 text-[#1A5CFF]">✓</span><p
                            className="md:ml-4 text-[16px] leading-[21px] md:ml-0 font-light">Учурдагы кайра карап чыгуу
                            милдеттер жана пландар</p></div>
                    </div>
                    {/*<div className="flex justify-center">*/}
                    {/*    <button className="btn3 w-[80%] flex justify-center">Кененирээк</button>*/}
                    {/*</div>*/}
                </div>
                <div className="relative w-[100%] hidden md:block">
                    <Image src={ImgF} layout="fill"/>
                </div>
            </div>

            {/*<div className="mt-20 flex justify-center">*/}
            {/*    <h1 className="text-white font-bold text-[36px] leading-[54px] m-4 ">ИНВЕСТ КЛУБ</h1>*/}
            {/*</div>*/}
            {/*<div className="grid  grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[15px] mb-5">*/}
            {/*    <div className="relative w-[100%]  hidden md:block">*/}
            {/*        <Image src={ImgF} layout="fill"/>*/}
            {/*    </div>*/}
            {/*    <div className="p-3  md:p-5 lg:p-10  bg-white">*/}
            {/*        <h1 className="  text-[20px] leading-[30px] font-bold">Обучение инвестированию</h1>*/}
            {/*        <p className=" text-[16px] leading-[21px] font-light mt-4">Это сообщество частных инвесторов и*/}
            {/*            партнеров которое дает*/}
            {/*            возможность делать совместные сделки с Маргуланом Сейсембаем</p>*/}
            {/*        <div className=" p-2 sm:p-8 mt-8 mb-4 ">*/}
            {/*            <div className="flex md:my-2"><span className="mr-2 text-[#1A5CFF]">✓</span><p*/}
            {/*                className="text-[16px] leading-[21px] font-light">Доступ к проектам,*/}
            {/*                отобранным Маргуланом</p></div>*/}
            {/*            <div className="flex my-4"><span className="mr-2 text-[#1A5CFF]">✓</span><p*/}
            {/*                className="md:ml-4  text-[16px] leading-[21px] font-light md:ml-0">Возможность стать*/}
            {/*                партнером Маргулана</p></div>*/}
            {/*        </div>*/}
            {/*        <div className="flex justify-center">*/}
            {/*            <button className="btn3 w-[80%] flex justify-center">Подробнее</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}

        </div>

    )
}
