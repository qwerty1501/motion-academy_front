import {LOCALES} from "./locales";
import {Hero} from "./messages/hero";
import {Header} from "./messages/header";
import {Footer} from "./messages/footer";
import {Faq} from "./messages/faq";
import {Dontworking} from "./messages/dontworking";
import {Arcticle} from "./messages/arcticle";
import {MasterClass} from "./messages/master-class";
import {Courses} from "./messages/courses";
import {Webinar} from "./messages/webinar";

export const MESSAGES = {
    [LOCALES.KYRGYZ]:{
        ...Hero[LOCALES.KYRGYZ],
        ...Header[LOCALES.KYRGYZ],
        ...Footer[LOCALES.KYRGYZ],
        ...Faq[LOCALES.KYRGYZ],
        ...Dontworking[LOCALES.KYRGYZ],
        ...Arcticle[LOCALES.KYRGYZ],
        ...MasterClass[LOCALES.KYRGYZ],
        ...Courses[LOCALES.KYRGYZ],
        ...Webinar[LOCALES.KYRGYZ],

    },
    [LOCALES.RUSSIAN]:{
        ...Hero[LOCALES.RUSSIAN],
        ...MasterClass[LOCALES.RUSSIAN],
        ...Header[LOCALES.RUSSIAN],
        ...Footer[LOCALES.RUSSIAN],
        ...Faq[LOCALES.RUSSIAN],
        ...Dontworking[LOCALES.RUSSIAN],
        ...Courses[LOCALES.KYRGYZ],
        ...Arcticle[LOCALES.RUSSIAN],
        ...Webinar[LOCALES.RUSSIAN],
    }

}
