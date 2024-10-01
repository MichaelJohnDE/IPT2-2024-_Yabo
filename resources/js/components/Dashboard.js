import React from 'react';
import Navlist from './Navlist';

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='sidebar'>
                <ul>
                    <li><a href='/home'>Home</a></li>
                    <li><a href='/aboutus'>About Us</a></li>
                    <li><a href='/contactus'>Contact Us</a></li>
                    <li><a href='/students'>Students</a></li>
                    <li><a href='/courses'>Courses</a></li>
                </ul>
            </div>
            <div className='content'>
                <h1>Dashboard</h1>
                <p>Welcome to the Enrollment System Dashboard!</p>
                {/* Add more dashboard content here */}
            </div>
        </div>
    );
}
