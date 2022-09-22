import React from 'react';

 function Info(){
    return (
        <div className="info-container">
        <img src={require("./images/tolu.jpeg")} className= "tolu" alt="tolulope"/>
        <h2 className="name">Tolulope Oyewumi</h2>
        <p className="job-title">Product Designer </p>
        <a href="tolulopeoyewumi.dorik.io" className="website" target="blank"><p>tolulopeoyewumi.dorik.io</p></a>
        <div className= "info-btn">
        <a href="mailto:adetolulopet@gmail.com"><button className="email-btn">Email</button></a>
        <a href="https://www.linkedin.com/in/tolulope-adeleye-oyewumi-615a71164/" target="blank"><button className="linkedin-btn">Linkedin</button></a>
        </div>
        </div>)
}

export default Info;