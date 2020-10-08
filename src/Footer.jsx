import React from 'react'
import Clock from 'react-digital-clock';

let currdate = new Date();
currdate =currdate.getFullYear();

const Footer = () =>{

    return(<>
        <footer className="w-100 bg-light text-center">
            
            <p style={{color:"black", backgroundColor:"black"}}><Clock/></p>
            <p className="footp">© {currdate} Suraj Patil.</p>
        </footer>
    </>)

}

export default Footer;