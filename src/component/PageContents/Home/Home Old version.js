import React from 'react';
import {ShortText} from '../../../assets/Others/Placeholder_text';
import Auxiliary from '../../../hoc/Auxiliary';
import './Home.css';

const Home = props => {
    return(
        <Auxiliary>
            {/* <div className="Homepage__image">
                <img src={Tosca_Interior} alt='Tosca interior' />
            </div>
            <div className="Homepage__text">
                <h1> HOME PAGE</h1>
                <p> {ShortText}</p>
            </div> */}

            <div className="pImg1">
                <p className="pText">
                    <span className="border">
                        Tosca 1991
                    </span>
                </p>
            </div>

            <section className="section">
                <h1> TOSCA 1991 </h1>
                <p> {ShortText}</p>
            </section>

            <div className="pImg2">
                <p className="pText">
                    <span className="border">
                        Despre Noi
                    </span>
                </p>
            </div>

            <section className="section">
                <h1> TOSCA 1991 </h1>
                <p> {ShortText}</p>
            </section>

            <div className="pImg3">
                <p className="pText">
                    <span className="border">
                        Menu
                    </span>
                </p>
            </div>

            <section className="section">
                <h1> TOSCA 1991 </h1>
                <p> {ShortText}</p>
            </section>

        </Auxiliary>
    )
}

export default Home;