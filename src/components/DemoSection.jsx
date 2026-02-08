import React from 'react';

const DemoSection = ({ id, title, className }) => {
    return (
        <section id={id} className={`demo-section ${className}`}>
            <h1 className="demo-title">{title}</h1>
        </section>
    );
};

export default DemoSection;
