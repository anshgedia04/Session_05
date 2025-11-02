import Card from "./Card";
import React, { useState } from 'react';

const Cards = (props) => {
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    const getCourses = () => {
        // Return an empty array if courses haven't loaded yet to prevent crash
        if (!props.courses) {
            return [];
        }

        if (category === "All") {
            let allCourse = [];
            Object.values(props.courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourse.push(course);
                });
            });
            console.log( "answer :",Object.values(props.courses));
            return allCourse;
        } else {
            // Return the specific category's courses, or an empty array if not found
            return props.courses[category] || [];
        }
    };

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => (
                    <Card
                        course={course}
                        key={course.id} // Corrected key
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                    />
                ))
            }
        </div>
    );
};

export default Cards;