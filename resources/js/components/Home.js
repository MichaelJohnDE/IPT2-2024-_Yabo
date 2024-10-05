import React from 'react';
import Navlist from './Navlist';

export default function Home() {
    return (
            <div className='home'>
                <Navlist />
            {/* <img src="https://waves.ca/wp-content/uploads/2017/12/2839048C-495D-4B6F-95CC-90E6CBFA3709.jpeg" alt="Description of image" />*/} {/*backup ni sya if di mugana ang ubos */}
                <img src="https://cdn.discordapp.com/attachments/1292042686789845064/1292042902456893491/CBE_Building_Nhanced.jpg?ex=67024c38&is=6700fab8&hm=d9958c879cb5b563ec8592b050d064aac9b25268715be3d95e25bef1b16dae26&" alt="Description of image" />
                <h1> Welcome to Smart Enrollment System</h1>
            </div>
    );
}