import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSiteNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://assignment-10-server-side-kappa.vercel.app/courses/')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className='text-gray-900 text-3xl bg-sky-200 p-12 rounded mt-12'>
            <h3 className='text-pink-500'>Choose your Course</h3>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link className='text-gray-900 font-medium text-xl no-underline hover:underline decoration-orange-500 decoration-wavy decoration-4 border-sky-600' to={`/course-detail/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSiteNav;