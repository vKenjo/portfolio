import React from 'react'

const Orgs = () => {
    return (
      <div className='about_info grid'>
        <div className='about_box'>
          <i className='bx bx-support about_icon'></i>
              <h3 className='about_title'>Perfumity</h3>
              <span className='about_subtitle'>Web Development Intern</span>
          </div>
          <div className='about_box'>
              <i className='bx bx-award about_icon'></i>
              <h3 className='about_title'>Auditor</h3>
              <span className='about_subtitle'>UST Computer Science Society</span>
          </div>
  
          <div className='about_box'>
          <i className='bx bx-briefcase-alt about_icon'></i>
              <h3 className='about_title'>Auditor</h3>
              <span className='about_subtitle'>UST ICS Student Council</span>
          </div>
      </div>
    )
  }

export default Orgs