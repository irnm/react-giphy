import React, { Component } from 'react';

class Gif extends Component {
    render () {
        const src = `https://media.giphy.com/media/${this.props.gifid}/giphy.gif`
        return (
            <div>
                <img src={src} alt="" className="gif"/>
            </div>
        )
    }
}

export default Gif;