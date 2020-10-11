import React from 'react'
import { Link } from 'react-router-dom';

const headerStyle = {
    background: 'black',
    color: '#fff',
    padding: '15px',
    textAlign: 'center',
    borderBottom: 'gray 1px solid'
}
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}


const onClick = (e) => {
    e.preventDefault();
    window.open(`/${e.target.name}`)
};
export default function Navbar() {
    return (
        <header style={headerStyle}>
            <Link style={linkStyle} to='/'> Home </Link> ||
            <Link style={linkStyle} to='/projects'> Projects </Link>
        </header>
    )
}

