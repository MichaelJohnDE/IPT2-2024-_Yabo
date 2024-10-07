import React from 'react';

// Sample data for the 4 blocks
const panelData = [
    {
        imgUrl: '/files/7073047/asian-boy-1.jpg?lmsauth=631c2f572e36445fda3d53fc4530ef2ba4415d86',
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        btnText: 'Lorem Ipsum',
        btnLink: '#',
        btnColor: '#007bff',
    },
    {
        imgUrl: '/files/7073047/teachers.png?lmsauth=971ccc577bd4348aa7826f047112eb6979bba98c',
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        btnText: 'Lorem Ipsum',
        btnLink: '/#',
        btnColor: '#007bff',
    },
    {
        imgUrl: '/files/7073047/asian-group-6.png?lmsauth=3ecd29a9120143d7906cb457fac6629c9d9e8661',
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        btnText: 'Lorem Ipsum',
        btnLink: '/About Us',
        btnColor: '#007bff',
    },
    {
        imgUrl: '/files/7073047/literature.png?lmsauth=080c8646ad9da24e5e9fd2d0a428ab69ace13c0a',
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        btnText: 'Contact us',
        btnLink: '/#',
        btnColor: '#007bff',
    },
];

export default function PanelWithBlocks() {
    return (
        <section className="panel panel1" data-panel-id="104146">
            <div className="row-4-blocks">
                {panelData.map((block, index) => (
                    <div className="block" key={index}>
                        <div className="flexFixer">
                            <div className="imgCrop" style={{ backgroundImage: `url(${block.imgUrl})` }}></div>
                        </div>

                        <p>
                            <strong>{block.title}</strong>
                        </p>

                        <p>{block.description}</p>

                        <div className="btnHolder">
                            <a
                                href={block.btnLink}
                                className="colorBtn roundedBtn panelBtn"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ backgroundColor: block.btnColor }}
                            >
                                {block.btnText}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
