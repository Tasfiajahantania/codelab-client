import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSiteNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses/')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <Card className='p-10 rounded'>
             <div className='text-gray-900 text-3xl'>
            <h3>Total Courses {courses.length}</h3>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link className='text-gray-900 font-medium text-xl no-underline hover:underline decoration-orange-500 decoration-wavy decoration-4' to={`/course-detail/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
       </Card>
    );
};

export default LeftSiteNav;