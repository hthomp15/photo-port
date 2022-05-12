import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About () {
    return (
        <section className="my-5">
            <h1 id="about"> Who am I? </h1>
            <img src={coverImage} style={{ width: "100%" }} alt="cover" className="my-2" />
        </section>
    );
}

export default About;