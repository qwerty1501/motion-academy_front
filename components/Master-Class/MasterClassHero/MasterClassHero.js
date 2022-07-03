import {useSelector} from "react-redux";
import {useIntl} from "react-intl";
import MyLoader from "../../ContentLoaders/content-loader";

export default function MasterClassHero() {
    const masterClass = useSelector(state => state.masterClass.masterClass)
    const {locale} = useIntl();

    return (
        <section id="master-class">
            <div className="container mx-auto">
                <div className="  pt-[101px]">
                    {masterClass ? (
                        <div className="DontworkingHero_block grid md:grid-cols-2  ">
                            <div>

                                <h1 className=" text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">
                                    {masterClass[`title_${locale}`]}
                                </h1>

                                <p className="leading-24 text-[16px] font-[260px] text-[white]  mt-4" dangerouslySetInnerHTML={{__html: masterClass[`subtitle_${locale}`]}}/>
                            </div>
                            <div className="grid lg:grid-cols-2 grid-cols-1 lg:ml-4 mt-6 md:mt-0  gap-4 ">
                                <div>
                                    <div className="DontworkingHero_block_card">
                                        <h1 className="text-[white] text-[16px] md:text-[14px] md:mb-4">
                                            Мастер-класстын старт алуу убактысы:
                                        </h1>
                                        <span className="text-[white] text-14px md:text-[15px]">{masterClass.start_date}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="DontworkingHero_block_card">
                                        <h1 className="text-[white] text-[16px] md:text-[14px]">
                                            Узактыгы:
                                        </h1>
                                        <span className="text-[white] text-14px md:text-[15px]">{masterClass.duration_ky}</span>
                                    </div>
                                </div>

                            </div>

                        </div>

                    ) : (
                        Array(2).fill(0).map((_, i) => (
                            <MyLoader key={i}/>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}
