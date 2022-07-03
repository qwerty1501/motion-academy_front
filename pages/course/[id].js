import HomeLayout from "../../components/HomeLayout";
import CourseHero from "../../components/Course/courseHero/course-hero";
import CourseLearn from "../../components/Course/courseLearn";
import MentorCourse from "../../components/Course/mentor-course";
// import Faq from "../../components/Home/FAQ/FAQ";
import {useDispatch, useSelector} from "react-redux";
import {setCourse} from "../../redux/reducers/course";
import api from "../../components/axiosAPI/api";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import CourseProgram from "../../components/Course/courseProgram/courseProgram";
import TeamAbout from "../../components/Course/courseAbout";
import MainForm from "../../components/Home/FormReq/Form";
import {getData} from "../../components/axiosAPI/api_axios";

export default function Course() {
    const dispatch = useDispatch()

    const router = useRouter()
    const fetchCourse = async (id) => {
        dispatch(setCourse(null))
        const data = await getData(`/ru/api/v2/course-detail/${id}`)
        dispatch(setCourse(data))


    }

    useEffect(() => {
        if (router.isReady === false) {
            return;
        }
        fetchCourse(router.query.id);
    }, [router.isReady, router.query]);
    const data = useSelector(state => state.course.course)

    console.log(data)

    return (
        <HomeLayout>
            <CourseHero/>
            <TeamAbout/>
            <CourseProgram/>
            <CourseLearn/>
            <MentorCourse/>
            <MainForm/>
            {/*<Faq/>*/}
        </HomeLayout>
    )
}