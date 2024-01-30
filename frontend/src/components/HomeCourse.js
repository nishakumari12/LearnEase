import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "../style/style.css";
import axios from "axios";


function HomeCourse() {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    console.log("random text from posts");

    axios.get("http://127.0.0.1:8080/course/course_list").then((response) => {
      setCourses(response.data.response);
      console.log(response);
    });
  }, []);

  return (
    <div>
      <section id="course">
        <h1>Our Popular Courses</h1>
        <p>
          Discover our most popular courses and join the learning revolution
        </p>
        <div className="course-box">
            {courses.map((course) => (
              <div
                onclick="window.location.href='courseinner.html';"
                className="courses"
              >
                <img src={course.title_image} alt="" />
                <div className="details">
                  <span>{course.last_updated}</span>
                  <h6>{course.name}</h6>
                  <div class="star">
                  <FontAwesomeIcon icon={faStar} style={{color: "#4A4A88",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#4A4A88",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#4A4A88",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#4A4A88",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#4A4A88",}} />

                        <span>(239)</span>
                    </div>
                </div>
                <div className="cost">{"$"+course.price}</div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default HomeCourse;