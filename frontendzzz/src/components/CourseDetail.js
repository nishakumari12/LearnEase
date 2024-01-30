import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../style/style.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

function CourseDetail() {
  const [course, setCourse] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    axios
      .get("http://127.0.0.1:8080/course/course_detail?id=" + id)
      .then((response) => {
        setCourse(response.data.response);
      });
      // .catch((error) => {
      //   console.error("Error fetching blog data:", error);
      // });
  }, []);

  return (
    <div>
      {/* Navigation */}
      <Navigation activePage={"coursePage"} />
      {/*Home*/}
      <section id="about-home">
        <h2>Enroll Our Popular Courses And Skill Up</h2>
      </section>
      <section id="course-inner">
        {course ? (
          <div className="overview">
            <div class="post">
              {course.title_image && (
                <img src={course.title_image} alt="Course" />
              )}
              <div className="course-head">
                <div className="c-name">
                  <h2>{course.name}</h2>
                  
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
                    </div>
                    <h4>Last Updated : {course.last_updated} </h4>
                    <h4>Students Enrolled  : {course.enrolled_number} </h4>
                </div>
                <span>{"$" + course.price}</span>
              </div>
              <h3>Instructor : {course.content_creator}</h3>
              <hr />
              <h3>Course Overview</h3>
              <p>{course.content}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default CourseDetail;
