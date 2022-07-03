import HomeLayout from "../../components/HomeLayout";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import api from "../../components/axiosAPI/api";
import {useEffect} from "react";
import WebinarHero from "../../components/Webinar/webinar-hero";
import WebinarVideo from "../../components/Webinar/webinar-video";
import {setWebinar} from "../../redux/reducers/webinar";
import WebinarAbout from "../../components/Webinar/webinar-about";
import WebinarMentor from "../../components/Webinar/webinar-mentor";
import MainForm from "../../components/Home/FormReq/Form";

export default function Webinar() {
    const dispatch = useDispatch()
    const router = useRouter()
    const fetchWebinar = async (id) => {
        dispatch(setWebinar(null))
        const {data} = await api.get(`api/v1/webinar-detail/${id}`)
        dispatch(setWebinar(data))

    }

    useEffect(() => {
        if (router.isReady === false) {
            return;
        }
        fetchWebinar(router.query.id);
    }, [router.isReady, router.query]);
    return (
        <HomeLayout>
            <WebinarHero/>
            <WebinarVideo/>
            <WebinarAbout/>
            <WebinarMentor/>
            <MainForm/>
        </HomeLayout>
    )
}