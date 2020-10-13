import React from 'react';

function Form() {
    return(
        <form>
            <input placeholder='Name'></input><input placeholder='Email'></input>
            <input placeholder='Phone'></input>               
            <textarea style={{height: '200px', width: '182px'}}></textarea>        
        </form>
    )
}

function ContactBox() {
    return <div
                className='row contact'
                style={{
                    border: 'solid black 3px',
                    padding: '100px',
                    maxWidth: '800px',
                    backgroundColor: 'transparent',
                    border: 'solid rgba(227, 227, 227, 1) 6px',
                    margin: 'auto',
                    overflow: 'auto',
                    display: 'flex'
                }} >
                <div className='col-5' >
                        <h4>CONTACT ME</h4>
                </div>
                <div className='col'></div>
                <div className='col-6' >
                    <h5>Email: lexthemenace@gmail.com </h5>
                    <br />
                    <h5>Phone: 860.983.5858</h5>
                </div>
            </div>
}

export default function Contact() {
    return (
        <div style={{
            backgroundColor: 'rgb(80, 64, 175)',
            width: '100%',
            maxHeight: '400px',
            padding: '20px 30px',
            alignItems: 'center',
            overflow: 'hidden'

        }}>
           <ContactBox/> 
        </div>
    )
}
