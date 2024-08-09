import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className='qualification section' id='qualification'>
      <h2 className='section_title'>Qualifications</h2>
      <span className='section_subtitle'>My personal history</span>

      <div className='qualification_container container'>
        <div className='qualification_tabs'>
          <div
            className={
              toggleState === 1
                ? 'qualification_button qualification_active button--flex'
                : 'qualification_button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-graduation-cap qualification_icon'></i>
            Education

          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification_button qualification_active button--flex'
                : 'qualification_button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-briefcase-alt qualification_icon'></i>
            Experience
          </div>

        </div>

        <div className='qualification_sections'>
          <div
            className={
              toggleState === 1
                ? 'qualification_content qualification_content-active'
                : 'qualification_content'
            }
          >
            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>BS Computer Science specializing in Data Science</h3>
                <span className='qualification_subtitle'>University of Santo Tomas</span>
                <span className='qualification_subtitle'>
                {'\u2B24'} DLUS Hackercup 2024 - 2nd Place
                {'\u2B24'} FEU Tech ACM Codequest 2024 - 2nd Place and Best Poster Recipient<br></br>
                {'\u2B24'} ASES Manila ASES Bootcamp for Career Design 2024 - 2nd Runner Up <br></br>
                {'\u2B24'} MAPUA NextGen IS StartUp Challenge 2024 - Top 4 Finalist <br></br>

                </span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> Aug 2022 - Present
                </div>
              </div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>

            </div>

            <div className='qualification_data'>
              <div></div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>Senior High School</h3>
                <span className='qualification_subtitle'>University of Santo Tomas<br></br>Graduated with Honors</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> Aug 2020 - June 2022
                </div>
              </div>
            </div>

            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>Junior High School</h3>
                <span className='qualification_subtitle'>Olivarez College <br></br>- Graduated with High Academic Distinctions</span>
                <span className='qualification_subtitle'>
                {'\u2B24'} Hon. Cong. Eric L. Olivarez Award of Academic Excellence Recipient
                <br></br>{'\u2B24'} Philippine Normal University (PNU) Regional Interschool Science
                and Mathematics Olympiad (PRISMO) 2019 - Top 30
                <br></br>{'\u2B24'} PSAP-ALAM Science Investigatory Project 1st Runner-Up
                <br></br>{'\u2B24'} PSAP-ALAM Best Presentor

                </span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> June 2018 - May 2020
                </div>
              </div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>

            </div>

            <div className='qualification_data'>
              <div></div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>Junior High School</h3>
                <span className='qualification_subtitle'>Olivarez College</span>
                <span className='qualification_subtitle'>{'\u2B24'} MathScore Competition - Bronze Medalist</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> Aug 2020 - June 2022
                </div>
              </div>
            </div>

          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification_content qualification_content-active'
                : 'qualification_content'
            }
          >
            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>Data Management Intern</h3>
                <span className='qualification_subtitle'>realme - Taguig, Philippines</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> June 2024 - Present
                </div>
              </div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>

            </div>

            <div className='qualification_data'>
              <div></div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>Web Development Intern</h3>
                <span className='qualification_subtitle'>Perfumity LLC - New Jersey, USA</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> Dec 2023 - Mar 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Qualification