import {useIntl} from "react-intl";
import {useSelector} from "react-redux";
import MyLoader from "../ContentLoaders/content-loader";
import ContentLoader from "../ContentLoaders/content-loader";
import WebinarAboutLoader from "../ContentLoaders/webinarAboutLoader";


export default function WebinarAbout() {
    const {locale} = useIntl()
    const webinar = useSelector(state => state.webinar.webinar)
    return (
        <section id="DontworkingHero">
            <div className="container mx-auto">
                <div className="  pt-[101px]">
                    {webinar ? (
                        <div className="DontworkingHero_block" key={webinar.id}>

                            <h1 className=" text-white leading-relaxed  lg:text-[22px]   "
                                dangerouslySetInnerHTML={{__html: webinar[`overview_${locale}`]}}
                            />

                        </div>
                    ) : (
                        Array(1).fill(0).map((_, i) => (
                            <WebinarAboutLoader key={i}/>
                        ))
                    )
                    }

                </div>
            </div>
        </section>
    )
}
