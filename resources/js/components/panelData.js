import React from 'react';
import PanelWithBlocks from './PanelWithBlocks';

const panel = [
    {
        imgUrl: '/files/7073047/asian-boy-1.jpg?lmsauth=631c2f572e36445fda3d53fc4530ef2ba4415d86',
        title: 'Captivating classes',
        description: 'Interactive classes will keep students engaged and they will be able to learn at a faster pace.',
        btnText: 'Class catalog',
        btnLink: '#',
        btnColor: '#379eed',
    },
    {
        imgUrl: '/files/7073047/teachers.png?lmsauth=971ccc577bd4348aa7826f047112eb6979bba98c',
        title: 'The best teachers',
        description: 'Our staff comes from diverse teaching backgrounds and they are some of the best in the country.',
        btnText: 'About FSUU',
        btnLink: '/page/show/470453',
        btnColor: '#379eed',
    },
    {
        imgUrl: '/files/7073047/asian-group-6.png?lmsauth=3ecd29a9120143d7906cb457fac6629c9d9e8661',
        title: 'Engaging activities',
        description: 'FSUU has exciting annual activities planned for 2020. Have a look right now.',
        btnText: 'Calendar',
        btnLink: '/portal_calendar',
        btnColor: '#379eed',
    },
    {
        imgUrl: '/files/7073047/literature.png?lmsauth=080c8646ad9da24e5e9fd2d0a428ab69ace13c0a',
        title: 'Come to FSUU',
        description: 'Our enrollment is open now for 2021. Drop us a message on our contact form and we will be in touch.',
        btnText: 'Contact us',
        btnLink: '/contact_visitor',
        btnColor: '#379eed',
    },
];

export default function panelData() {
    return (
        <div>
            <PanelWithBlocks panel={panelData} />
        </div>
    );
}
