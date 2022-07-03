import {useIntl} from "react-intl";
import {useSelector} from "react-redux";
import MyLoader from "../ContentLoaders/content-loader";


export default function MasterClassAbout() {
    const {locale} = useIntl()
    const masterClass = useSelector(state => state.masterClass.masterClass)
    return (
        <section id="DontworkingHero">
            <div className="container mx-auto">
                <div className="  pt-[101px]">
                    {masterClass ? (
                        <div className="DontworkingHero_block" key={masterClass.id}>
                            <h1 className=" text-white leading-relaxed  md:text-[22px]" dangerouslySetInnerHTML={{__html: masterClass[`overview_${locale}`]}}/>
                        </div>
                    ) : (
                        Array(1).fill(0).map((_, i) => (
                            <MyLoader key={i}/>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}
