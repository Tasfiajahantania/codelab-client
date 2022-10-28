import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LeftSiteNav from '../LeftSiteNav/LeftSiteNav'

const Courses = () => {
    const [courseDetails, setCourseDetails] = useState([])
    useEffect(() => {
        fetch('https://assignment-10-server-side-kappa.vercel.app/courses-details')
            .then(res => res.json())
            .then(data => setCourseDetails(data))
    }, [])
    return (
        <div className='bg-white	'>

           
            <div>
                <Row>
                    <Col lg="3">
                        <LeftSiteNav></LeftSiteNav>
                    </Col>
                    <Col lg="9">
                        <h1 className='text-pink-700 text-center'>All Courses</h1>
                        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-3'>
                            {
                                courseDetails.map(course => <div key={course._id} className="card shadow-xl my-3">
                                    <figure className='m-0'><img src={course.image_url} alt="course" /></figure>
                                    <div className="card-body bg-dark text-white">
                                        <h2 className="card-title">{course.title}</h2>
                                        <p className='text-sm'>Price: <span>{course.price}</span>$</p>

                                        <div className="card-actions justify-center">
                                            <Link to={`/course-detail/${course._id}`}><button className="text-white text-sm px-4 py-2 rounded bg-pink-700">Course Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Courses;