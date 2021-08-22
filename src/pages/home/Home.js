import React from 'react';
import './Home.css';
import NavC from '../nav/Nav';
import '../../plugins/jquery.ripples.js';
import '../../plugins/ripples.js';




function Home() {

    return (
        <div className="Home_">
            <div>
                <NavC>
                </NavC>
            </div>
            <section>
                <h5>Bonjour</h5>
                <h2>Bertrand Menel</h2>
                <h4>Développeur web et web mobile</h4>
            </section>
        </div>

    )

}

export default Home;
