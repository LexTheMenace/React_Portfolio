import React from 'react'
import './About.css'
import Me from '../me.jpg'


export default function About() {
    return (
        <div id='colorblock'>
            <div className='nameSkill'>
            <div className='col- 6 content row'>
                <div id='myName' >
                    <h1> LEX </h1>
                    <h1> PRYOR </h1>
                    <p id='jobtitle' style={{ color: 'white', fontSize: '24px' }}>- FULL STACK DEVELOPER -</p>
                </div>
            </div>
       
            <div id='skills' className='col-6 content row right'>
            <ul id='tech'>
            <li></li>
            <li>Javascript</li>
            <li>MongoDB</li>
            <li>AWS</li>
            <li>React</li>
            <li>Node.js </li>
            <li>Express.js</li>
        </ul>
            </div>
</div>
            <div style={{ justifyContent: 'center' }} className='content row '>
                <div className='info'>
                    <p>Hello, my name is Lex Pryor.

                    I am a full-stack developer, with a focus on the MERN stack.

                    I earned my Full-Stack Coding Certification from VUSE Bootcamp (Vanderbilt Univerity School of Engineering).

                    I am currently in search of coding career positions and contracts.

                    Additionally, I'm honing and expanding my skills on personal projects.

{/* My full resume is downloadable below. */} </p>
{/* <div id='extLinks'><a rel="noopener noreferrer" href="http://www.github.com/lexthemenace" target="_blank">Link Here</a></div> */}
              {/*   <button id='resumeDownload' style={{padding: '15px 40px', backgroundColor: 'rgb(103, 87, 190)', border: 'green solid 2px', color: 'white'}}>Download Resume</button> */}
              <a href='../lex-pryor-resume.pdf' download><i title='Download my resume!' class="fas fa-file"></i></a> 
         <a rel="noopener noreferrer" href='http://www.github.com/lexthemenace' target='_blank'> <i class="fab fa-github-square"></i></a> 
         <a rel="noopener noreferrer" href='https://www.linkedin.com/in/lex-pryor-8a4a53132/' target='_blank'> <i className="fab fa-linkedin"></i></a>
          <i class="fab fa-facebook"></i> 
                </div>

            </div>

        </div>
    )
}
