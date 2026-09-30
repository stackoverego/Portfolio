<<<<<<< HEAD
import React from 'react';

const DemoSection = ({ id, title, className }) => {
    return (
        <section id={id} className={`demo-section ${className}`}>
            <h1 className="demo-title">{title}</h1>
        </section>
    );
=======
import React from "react";

const DemoSection = ({ id, title, className }) => {
  return (
    <section id={id} className={`demo-section ${className}`}>
      <h1 className="demo-title">{title}</h1>
    </section>
  );
>>>>>>> deb721e (feat: add new components and assets for profile and contact sections)
};

export default DemoSection;
