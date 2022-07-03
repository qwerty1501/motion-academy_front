import MasterClassHero from "../../components/Master-Class/MasterClassHero/MasterClassHero";
import MasterClassVideo from "../../components/Master-Class/MasterClassVideo";
import MasterClassAbout from "../../components/Master-Class/MasterClassAbout";
import HomeLayout from "../../components/HomeLayout";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import api from "../../components/axiosAPI/api";
import {useEffect} from "react";
import {setMasterClass} from "../../redux/reducers/master-class";
import MainForm from "../../components/Home/FormReq/Form";
import MentorMasterClass from "../../components/Master-Class/mentorMaster-class";

export default function MasterClass() {
    const dispatch = useDispatch()
    const router = useRouter()
    const fetchMasterClass = async (id) => {
        dispatch(setMasterClass(null))
        const {data} = await api.get(`api/v2/master-classes/${id}`)
        dispatch(setMasterClass(data))

    }

    useEffect(() => {
        if (router.isReady === false) {
            return;
        }
        fetchMasterClass(router.query.id);
    }, [router.isReady, router.query]);
    const data = useSelector(state => state.masterClass.masterClass)
    return (
        <HomeLayout>
            <MasterClassHero/>
            <MasterClassVideo/>
            <MasterClassAbout/>
            <MentorMasterClass/>
            <MainForm/>
        </HomeLayout>
    )
}