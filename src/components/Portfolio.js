import React from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom'
import TroubleLog from '../TroubleshootingLog.png'
import BartenderBook from '../Bartender-Book.png'
const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px'
}

function Images() {
   return <div className='row'> 
    <div style={{display: 'inline-block', margin: 'auto'}} >
    <Link style={linkStyle} to='/projects'><img className='projectCard' src={TroubleLog} alt='Troubleshooting Log Screenshot'/></Link>
    <Link  style={linkStyle} to='/projects'><img className='projectCard' src={BartenderBook} alt='Bartender Book Screenshot'/></Link>
    </div>
</div>
}

export default function Portfolio() {
    return (
        <div id='port'>
            <div className='row' style={{justifyContent: 'center'}}>
            <Link style={linkStyle} to='/projects'>{'My Latest Work. Take a Look >'}</Link>
            </div>
            <Images/>
         
        </div>
    )
}
