import Image from "next/image";
import Number from '../assets/img/404.png'
import Capa from '../assets/img/Capa 2.png'
import Link from "next/link";

export default function Error() {
    return (
        <>
            <div className="container mx-auto ">
                <div className="flex justify-center items-center pt-20">
                    <div className="absolute -mt-64">
                        <Image src={Number}/>
                    </div>
                    <div className="flex flex-col items-center text-center w-[100%]">
                        <Image src={Capa}/>
                        <h1 className="text-white text-3xl font-bold"> Страница не найдена</h1>
                        <Link href="/"><a className="text-white text-2xl border-b-2 border-[white] font-bold">На Главную</a></Link>
                    </div>

                </div>
            </div>
        </>
    )
}
