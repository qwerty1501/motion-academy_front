import Header from "./Home/Header/Header"
import Footer from "./Home/Footer/Footer";


export default function HomeLayout({children}) {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <Header/>
                            <main>{children}</main>
                            <Footer/>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

