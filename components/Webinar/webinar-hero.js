import {useSelector} from "react-redux";
import {useIntl} from "react-intl";
import MyLoader from "../ContentLoaders/content-loader";
import WebinarHeroLoader from "../ContentLoaders/webinarHeroLoader";

export default function WebinarHero() {
    const webinar = useSelector(state => state.webinar.webinar)
    const { locale} = useIntl();

    return (
        <section id="webinar">
            <div className="container mx-auto">
                <div className=" pt-[10%]">
                    {webinar ? (
                        <div className="DontworkingHero_block grid md:grid-cols-2">
                            <div>
                                <h1 className=" text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">
                                    {webinar[`title_${locale}`]}
                                </h1>
                                <p className="leading-24 text-[16px] font-[260px] text-[white]  mt-4" dangerouslySetInnerHTML={{__html: webinar[`subtitle_${locale}`]}}/>
                            </div>
                            <div className="grid lg:grid-cols-2 grid-cols-1 lg:ml-4 mt-6 md:mt-0  gap-4 ">
                                <div>
                                    <div className="DontworkingHero_block_card">
                                        <h1 className="text-[white] text-[16px] md:text-[14px] mb-4">
                                            Вебинардын старт алуу убактысы:
                                        </h1>
                                        <span className="text-[white] text-14px md:text-[15px]">{webinar.start_date}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="DontworkingHero_block_card">
                                        <h1 className="text-[white] text-[16px] md:text-[14px] mb-4">
                                            Узактыгы:
                                        </h1>
                                        <span className="text-[white] text-14px md:text-[15px]">{webinar.duration_ky}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ) : (
                        Array(1).fill(0).map((_, i) => (
                            <WebinarHeroLoader key={i}/>
                        ))
                    )}
                </div>
            </div>

        </section>
    )
}
