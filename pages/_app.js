import {useSelector} from 'react-redux'
import {IntlProvider} from "react-intl";
import {MESSAGES} from "../intl/messages";
import {wrapper} from "../redux/reducer";
import 'tailwindcss/tailwind.css'
import '../styles/scss/index.scss';
import Head from "next/head";

function MyApp({Component, pageProps}) {
    const locale = useSelector(state => state.main.locale);
    return (


        <>
            <Head>
                <title>Motion Web</title>
                <link rel="icon" href="/favicon.png/"/>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <meta
                    name="description"
                    content="
                Motion Web LLC IT-Академиясынын платформасы.
                Замабап кесиптер:
                ◾️Full-stack (ReactJs/NodeJs)
                ◾️Python (Django)
                ◾️Android(Kotlin)
                ◾️UX/UI дизайн
                ◾️Интернет маркетолог"
                />


            </Head>


            <IntlProvider locale={locale} messages={MESSAGES[locale]}>
                <Component {...pageProps}/>
            </IntlProvider>
        </>

    )
}

export default wrapper.withRedux(MyApp);
