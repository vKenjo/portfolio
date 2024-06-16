import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
    return (
        <section className='skills section' id='skills'>
            <h2 class='section_title'>Skills</h2>
            <span class='section_subtitle'>My technical level</span>

            <div className='skills_container container grid'>
                <Frontend />
                <Backend />
            </div>

        </section>
    )
}

export default Skills