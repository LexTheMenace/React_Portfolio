import React from 'react';
import './Portfolio.css';
import TroubleLog from '../TroubleshootingLog.png';
import BartenderBook from '../Bartender-Book.png';

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px'
}

function Images() {
   return <div className='row'> 
    <div style={{display: 'inline-block', margin: 'auto'}} >
    <a style={linkStyle} href='https://github.com/LexTheMenace/Troubleshooting-Log'><img className='projectCard' src={TroubleLog} alt='Troubleshooting Log Screenshot'/></a>
    <a  style={linkStyle} href='https://github.com/LexTheMenace/Bartender_Book'><img className='projectCard' src={BartenderBook} alt='Bartender Book Screenshot'/></a>
    </div>
</div>
}

export default function Portfolio() {
    return (
        <div id='port'>
            <div className='row' style={{justifyContent: 'center'}}>
            <a rel='noopener noreferrer' target='_blank' style={linkStyle} href='http://www.github.com/lexthemenace'>{'My Latest Work. Take a Look >'}</a>
            </div>
            <Images/>
         
        </div>
    )
}
