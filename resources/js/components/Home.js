import React from 'react';
import cbe from '../../../src/CBE_Building_Enhanced.png';
import Footer from './Footer';

export default function Home() {
    return (
            <div className='home'>
            {/* <img src="https://waves.ca/wp-content/uploads/2017/12/2839048C-495D-4B6F-95CC-90E6CBFA3709.jpeg" alt="Description of image" />*/} {/*backup ni sya if di mugana ang ubos */}
                <img src={cbe} alt="Description of image" />
                <h1> Welcome to FSUU Enrollment System</h1>
                <Footer />
            </div>
    );
}