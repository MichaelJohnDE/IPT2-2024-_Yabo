import React from 'react';
import cbe from '../../../src/CBE_Building_Enhanced.png'; // Import your image
import Footer from './Footer'; // Import Footer
import PanelWithBlocks from './PanelWithBlocks'; // Import PanelWithBlocks
import panelData from './Paneldata';


export default function Home() {
    return (
        <div className='home'>
            {/* Optional backup image */}
            {/* <img src="https://waves.ca/wp-content/uploads/2017/12/2839048C-495D-4B6F-95CC-90E6CBFA3709.jpeg" alt="Description of image" />*/}
            
            {/* Main Image */}
            <img src={cbe} alt="Description of image" />
            
            {/* Headings */}
            <h1> Welcome to Father Saturnino Urios University</h1><br/>
            <h1 className="heading">Online Processing Information System</h1>

            {/* Panel Section */}
            <PanelWithBlocks panelData={panelData} />

            {/* Footer */}
            <Footer />
        </div>
    );
}
