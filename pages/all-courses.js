import {useIntl} from "react-intl";
// import Pagination from 'rc-pagination';
import {useDispatch, useSelector} from "react-redux";
import api from "../components/axiosAPI/api";
import {useEffect} from "react";
import {setAllCourses, setAllCoursesLoaded, setTotalCourses, setCurrentPage} from "../redux/reducers/course";
import CourseItem from "../components/Course/CourseItem";
import HomeLayout from "../components/HomeLayout";
import CourseContentLoader from "../components/ContentLoaders/courseContentLoader";
import AllCoursesLoader from "../components/ContentLoaders/all-coursesLoader";


export default function AllCourses() {
    const {formatMessage} = useIntl();
    const dispatch = useDispatch();
    const course = useSelector(state => state.course);


    const fetchAllCourses = async () => {
        dispatch(setAllCoursesLoaded(false));
        const {data} = await api.get(`/ru/api/v2/course-list/?page=${course.currentPage}`);
        // dispatch(setTotalCourses(data.total));
        dispatch(setAllCourses(data));
        dispatch(setAllCoursesLoaded(true));
    }

    useEffect(() => {
        fetchAllCourses();
    }, []);

    // const handlePageChange = (page) => {
    //     dispatch(setCurrentPage(page));
    // }
    console.log(course)
    return (
        <HomeLayout>
            <section id="courses">
                <div className="container container-2sm md:container mx-auto">
                    <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mb-6">
                        Баардык
                        курстар
                    </h1>
                    <div className="flex ">
                        <button className="btn3">{formatMessage({"id": "all"})}</button>
                        <div className="ml-2">
                            <button className="btn2">{formatMessage({"id": "progress"})}</button>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 m-auto gap-6 mb-24">
                        {course.allCoursesLoaded ? (
                            course.allCourses.map((elem) => (
                                <CourseItem el={elem} key={elem.id}/>
                            ))
                        ) : (
                            Array(4).fill(0).map((_, i) => (
                                <AllCoursesLoader key={i}/>
                            ))
                        )}
                    </div>
                    {/*<Pagination*/}
                    {/*    total={course.totalCourses}*/}
                    {/*    pageSize={7}*/}
                    {/*    current={course.currentPage}*/}
                    {/*    onChange={handlePageChange}*/}
                    {/*/>*/}
                </div>
            </section>
        </HomeLayout>
    )
}