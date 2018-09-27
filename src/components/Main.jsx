import React, { Component } from 'react';
import {AppContext} from  '../context/AppContext'

class Main extends Component{


    render(){
        return(
           <AppContext.Consumer>
            {
                val => (
                    <div className="main">
                        <p className="App-intro">
                            {val.locale === "es" ? "Para empezar, edita 'src/App.js'  y guarda para recargar ": "To get started, edit 'src/App.js' and save to reload."}
                        </p>
                        <div className="control">
                            <button className={val.theme} onClick={() => { val.changeTheme("Black") }} >
                                {val.locale === "es" ? "Tema Negro": "Black Theme" }
                            </button>
                            <button className={val.theme} onClick={() => { val.changeTheme("Blue") }}>
                                {val.locale === "es" ? "Tema Azul": "Blue Theme" }
                            </button>
                            <button className={val.theme} onClick={() => { val.changeTheme("Green") }}>
                                {val.locale === "es" ? "Tema Verde": "Green Theme" }
                            </button>
                            <button className={val.theme}onClick={val.changeLocale}>
                                {val.locale === "es" ? "Cambiar Idioma": "Change Language" }
                            </button>
                        </div>
    
                    </div>


                )

            }
           </AppContext.Consumer>
        )
    }


}

export default Main;