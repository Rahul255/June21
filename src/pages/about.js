//import React
import * as React from 'react';
import {Link} from 'gatsby';

//define your component
const About = () => {
    return (
        <main>
            <title>About Me</title>
            <h1>About Me</h1>
            <Link to='/'>Home</Link>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>
    )
}

//export your component
export default About