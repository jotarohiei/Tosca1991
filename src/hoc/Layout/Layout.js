import React, { Component } from 'react';
import "./Layout.css"

import Auxiliary from '../Auxiliary';
import Footer from '../../component/UI/Footer/Footer';
import Navbar from '../../component/UI/Navbar/Navbar';
import SideDrawer from '../../component/UI/Navbar/SideDrawer/SideDrawer';
import Backdrop from '../../component/UI/Backdrop/Backdrop';

class Layout extends Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState( (prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    }

    backdropClickHandler = () => {
        // Can add other functionality here, like closing modals if needed
        this.setState( (prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    }

    render () {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler}/>
        }

        return (
            <Auxiliary>
                <div style={{backgroundColor: "#1a1a1a" ,color:'white'}}>   
                    <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>            
                    <SideDrawer show={this.state.sideDrawerOpen}/>
                    {backdrop}
                    <main className='Content'>
                        {this.props.children}
                    </main>
                    
                    <Footer/>
                </div>
            </Auxiliary>
        )
    }
}

export default Layout;