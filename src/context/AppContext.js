import React, { Component, createContext } from 'react';

export const AppContext = createContext()



class AppProvider  extends Component{

    constructor(){
        super()

        this.changeLocale = () => {
            this.setState(
                state => {
                    const newLocale =  state.locale === 'es' ? 'en' :'es';
                    return{
                        locale:newLocale,
                    }
                }
            )
        }
    
        this.changeTheme = (theme) => {
            this.setState(
                {theme:theme}
            )
        }

        this.state = {
            locale:"es",
            theme:"Black",
            changeLocale:this.changeLocale,
            changeTheme:this.changeTheme
        }
    }

    

   

    render() {
        return(
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )


    }



}

export default  AppProvider;