import React, {useState} from 'react'
import "./services.css"

const Services = () => {
  const[toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className='services section' id='services'>
      <h2 className='section_title'>Technical Services</h2>
      <span className='section_subtitle'>What I bring to the table</span>

      <div className='services_container container grid'>
        <div className='services_content'>
          <div>
            <i className='uil uil-web-grid services_icon'></i>
            <h3 className='services_title'>UI/UX <br /> Devevloper</h3>
          </div>

          <span className='services_button' onClick={() => toggleTab(1)}>View More
            <i className='uil uil-arrow-right services_button-icon'></i>
          </span>

          <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
            <div className='services_modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services_modal-close'></i>

              <h3 className='services_modal-title'>Product Designer</h3>
              <p className='services_modal-description'>Experience with more than 2 years
                of experience</p>

              <ul className='services_modal-services grid'>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'>
                    <p className='service_modal-info'>I develop the user interface</p>
                  </i>
                </li>

                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'>
                    <p className='service_modal-info'>Web development</p>
                  </i>
                </li>

                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'>
                    <p className='service_modal-info'>UX interactions</p>
                  </i>
                </li>

                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'>
                    <p className='service_modal-info'>Design and build mockups of websites via Figma</p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services_content'>
          <div>
            <i className='uil uil-web-grid services_icon'></i>
            <h3 className='services_title'>Backend <br /> Developer</h3>
          </div>

          <span className='services_button' onClick={() => toggleTab(2)}>View More
            <i className='uil uil-arrow-right services_button-icon'></i>
          </span>

          <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
            <div className='services_modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services_modal-close'></i>

              <h3 className='services_modal-title'>Product Designer</h3>
              <p className='services_modal-description'>Service with more than 2 years
                of experience</p>

              <ul className='services_modal-services grid'>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'>
                    <p className='service_modal-info'>I develop the backend of your website</p>
                  </i>
                </li>

                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'>
                    <p className='service_modal-info'>Proficiency in using PHP, Java, and JavaScript</p>
                  </i>
                </li>

                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'>
                    <p className='service_modal-info'>Efficient yet functional website utilities</p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className='services_content'>
          <div>
            <i className='uil uil-web-grid services_icon'></i>
            <h3 className='services_title'>Data <br /> Roles</h3>
          </div>

          <span className='services_button' onClick={() => toggleTab(3)}>View More
            <i className='uil uil-arrow-right services_button-icon'></i>
          </span>

          <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
            <div className='services_modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services_modal-close'></i>

              <h3 className='services_modal-title'>Data Management and Engineering</h3>
              <p className='services_modal-description'>Experience with less than a year
                of experience</p>

              <ul className='services_modal-services grid'>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'>
                    <p className='service_modal-info'>Create statistical models with data sets using R and Python</p>
                  </i>
                </li>

                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'>
                    <p className='service_modal-info'>Data analaysis from interpretation for business projections and insights</p>
                  </i>
                </li>

                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'>
                    <p className='service_modal-info'>Formal work experience in data management and data filtering</p>
                  </i>
                </li>

                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'>
                    <p className='service_modal-info'>Proficient query of datasets alongside data valadations</p>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services