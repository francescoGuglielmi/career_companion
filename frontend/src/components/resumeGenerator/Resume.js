import React from 'react';
import "./resume.css"

function Resume() {
    return (
        <div>
            <NavbarHP className="navbar" />
            <iframe src="/Resume.html" title="Resume" className="fullscreen" />
        </div>
    );
}


export default Resume;