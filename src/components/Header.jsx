import React, { Component } from 'react'
import logo from '../logo.svg';
import {AppContext} from '../context/AppContext'

class  Header extends  Component{

render(){
    return(

            <AppContext.Consumer> 
                {   
                    val => (
                        <header className={`App-header ${val.theme}`}>
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">
                            {val.locale === "es" ? "Bienvenido a React": "Welcome to React"}
                            </h1>
                        </header>

                    )

                }
            </AppContext.Consumer>

           
        )

}


}

export default Header;