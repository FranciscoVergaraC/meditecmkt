import React from 'react';
import './Mediaplayer.css';

class Mediaplayer extends React.Component {
    render () {
        return (
            <div>
                <h1>Titulo de la media</h1>
                <iframe src={this.props.videoId} 
                width='640' height='360' allow='autoplay; fullscreen; encrypted-media' 
                frameborder='0' allowfullscreen allowscriptaccess='always' scrolling='no'>
                </iframe>
                <p>Descripcion de la media</p>
            </div>
        )
    }
}

export default Mediaplayer;