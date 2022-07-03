import Image from "next/image";
import PersonClubMision from '../../assets/img/bigLogo.png'


export default function ClubMision() {
    return (

        <div className="container mx-auto">
            <div>
                <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mb-6 mt-12">КЛУБТУН МИССИЯСЫ</h1>
            </div>
            <div className="grid  lg:grid-cols-2  clubMisionBlock">
                <div className="w-[98%] lg:w-[88%] md:w-[88%]">
                    <div className="w-[100%] relative hidden lg:block  ">
                        <Image src={PersonClubMision} />
                    </div>
                </div>
                <div className="w-[98%] lg:w-[88%] md:w-[88%]">
                    <h1 className="capitalize leading-[24px] text-[#2C3E50] mb-4  font-extra-light md:font-light text-[15px] sm:text-[16px] ">
                        Биздин миссия келечектүү жаштарга комплекстүү окуу
                        программасын, стажировкаларды жана жумуш менен камсыз
                        кылуу аркылуу дүйнө жүзү боюнча суроо-талапка ээ болгон IT
                        адистери болууга жардам беребиз.
                    </h1>

                    <div className="mt-8">
                        <h2 className="text-[#2C3E50] leading-[21px]  font-bold  md:font-normal text-[16px] sm:text-[20px] lg:text-[17  px]">
                            Биздин өзгөчөлүгүбүз кандай?</h2>
                        <div className="p-3">
                            <p className="font-extra-light text-[#2C3E50] text-[14px] leading-[25px]  md:font-light "><span>✓</span>
                                Биз өзүн-өзү өнүктүрүүгө умтулган адамдарды бириктиребиз.
                            </p>
                            <p className="font-extra-light text-[#2C3E50]  text-[14px] leading-[25px]   md:font-light">
                                <span>✓</span>Биз өзүн-өзү өнүктүрүүнүн бардык мыкты ыкмаларын жана тажрыйбаларын бириктиребиз.
                            </p>
                            <p className="font-extra-light  text-[#2C3E50] text-[14px] leading-[25px]   md:font-light">
                                <span>✓</span> Биз өзүбүздү өнүктүрүү жолунда бири-бирибизди колдойбуз.
                            </p>
                            <p className="font-extra-light text-[#2C3E50] text-[14px] leading-[25px]   md:font-light"><span>✓</span>
                                Биз озубуздун билимибиз менен бөлүшөбүз.
                            </p>
                        </div>

                    </div>
                    <div className="grid grid-cols-5 mt-12 md:mt-2 flex items-center">
                        <div className="col-span-3">
                            <p className="font-extra-light text-[#2C3E50] text-[14px] leading-[25px] md:font-light text-[16px] sm:text-[16px] ">Урматтоо менен,</p>
                            <h2 className="text-[#2C3E50] leading-[21px] text-[14px] font-bold text-[16px] sm:text-[16px] ">Motion Web IT-Клуб командасы</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
