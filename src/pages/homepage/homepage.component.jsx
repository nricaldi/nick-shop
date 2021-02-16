import React from 'react';

import Directory from '../../components/diectory/directory.component';

import './homepage.styles.scss';



const HomePage = ({history}) => {
    return(
        <div className="homepage">
            <header>
                <div className="container">
                   <h1 className="logo">RCLD</h1>

                </div>

                {/* <nav>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav> */}
            </header>

            <section className="hero">
                <div className="container">
                    <h1>High Fashion On A Low Budget</h1>
                </div>
            </section>
            <Directory/>
        </div>
    )
}

export default HomePage; 