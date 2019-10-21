import React, { Component } from 'react';
import Search from "./search.jsx";
import Gif from "./gif.jsx";
import List from "./list.jsx";
import giphy from "giphy-api";

class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            gifs: [],
            selectedGifId: "l4FGqXZZQzzfYgM2A"
        }

        this.search("last kingdom");
    }

    search = (query) => {
        // To do: Call API
        giphy('1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm').search({
            q: 'pokemon',
            rating: 'g',
            limit: 10
            // Res contains gif data!
        }, (error, result) => {
            this.setState({
                gifs: result.data
            });
        })
    };
    
    render () {
        return (
            <div>
                <div className="left-scene">
                    <Search searchFunction={this.search}/>      
                    <div className="selected-gif">
                        <Gif gifid={this.state.selectedGifId} />
                    </div>
                </div>

                <div className="right-scene">
                    <List gifs={this.state.gifs}/>
                </div>
            </div>
        );
    }
}

export default App;