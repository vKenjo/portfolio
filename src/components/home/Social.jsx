import React from 'react'

const Social = () => {
  return (
    <div className='home_social'>
        <a href='https://www.instagram.com/vkenjo/' className='home_social-icon' target='_blank' rel='noreferrer'>
            <i className='uil uil-instagram'></i>
        </a>

        <a href='https://www.linkedin.com/in/vkenjo' className='home_social-icon' target='_blank' rel='noreferrer'>
            <i className='uil uil-linkedin'></i>
        </a>

        <a href='https://github.com/vKenjo' className='home_social-icon' target='_blank' rel='noreferrer'>
            <i className='uil uil-github-alt'></i>
        </a>

        {/* just add fb here later on yada yada */}
    </div>
  )
}

export default Social