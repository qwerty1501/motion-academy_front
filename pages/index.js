import HomeLayout from "../components/HomeLayout";
import Hero from "../components/Home/hero/Hero";
import Form from "../components/Home/FormReq/Form";
import Webinar from "../components/Webinar/webinar";
import CourseList from "../components/Course/courseList";
import MasterClass from "../components/Master-Class/MasterClass";


export default function Home() {
  return (
      <HomeLayout>

          <Hero/>
          <CourseList/>
          <Webinar/>
          <MasterClass/>
          <Form/>
      </HomeLayout>

  )
}
