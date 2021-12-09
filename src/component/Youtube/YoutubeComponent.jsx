import React from 'react';
import './YoutubeComponent.css';




const YoutubeComponent = (props) => {
    return  <div className = "card">
                <div className="img-thumbnail">
                    <img src="https://placeimg.com/640/480/tech" alt="" />
                    <p className="time">{props.time}</p>
                </div>
                <p className="title">{props.judul}</p>
                <p className="description">{props.description}</p>
            </div>
}

YoutubeComponent.defaultProps = {
    judul:'Judul default',
    time : '00.00',
    description : 'description default'
}



export default YoutubeComponent;