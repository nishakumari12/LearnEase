import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../style/style.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import axios from "axios";
import CourseDetail from "./CourseDetail";
import { useNavigate } from "react-router-dom";

function Course() {
  const [courses, setCourses] = React.useState([]);

  const navigate=useNavigate();

  React.useEffect(() => {
    console.log("random text from posts");

    axios.get("http://127.0.0.1:8080/course/course_list").then((response) => {
      setCourses(response.data.response);
      console.log(response);
    });
  }, []);

  const handleButtonClick = (id) =>{
    navigate(`/course/course_detail/${id}`)
  }

  return (
    <div>
      {/* Navigation */}
      <Navigation activePage={"coursePage"} />
      {/*Home*/}
      <section id="about-home">
        <h2>Courses</h2>
      </section>
      <section id="course">
        <h1>Our Popular Courses</h1>
        <p>
          Discover our most popular courses and join the learning revolution
        </p>
        <div className="course-box">
          {courses.map((course) => (
            <Link to={`/course/course_detail/${course.id}`} style={{ textDecoration: 'none' }} onClick={() => handleButtonClick(course.id)}>
              <div className="courses">
                <img src={course.title_image} alt="" />
                <div className="details">
                  <span>{course.last_updated}</span>
                  <h6>{course.name}</h6>
                  <div class="star">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#4A4A88" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#4A4A88" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#4A4A88" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#4A4A88" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#4A4A88" }}
                    />

                    <span>(239)</span>
                  </div>
                </div>
                <div className="cost">{"$" + course.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Course;
