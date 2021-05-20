import React from 'react';
import './Body.css';
import Home from '../Home/Home'

class Body extends React.Component {
    render (){
        console.log(this.props.navegationOption)
        switch (this.props.navegationOption){
            case "Home":
                console.log('Estamos en el flujo Home')
                return <Home/>
            case "Link 1":
                return (
                    <div>
                        <h1>Este es Link 1</h1>
                    </div>
                )
        }
    }
}

export default Body;