import React, { Component } from 'react';
import Search from "./search.jsx";
import Gif from "./gif.jsx";
import List from "./list.jsx";

class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            gifs = [],
            selectedGifId = "l4FGqXZZQzzfYgM2A"
        }
    }

    render () {
        const gifs = [
            { id: "31R6hAWXVnaGEfyfJS"},
            { id: "MaB1HvmjU92JW"},
            { id: "emSHK0zbWRCBq"},
            { id: "vgzs4HpGWGa9LMDfGh"},
            { id: "3og0IToRp5lUiBGvKw"},
            { id: "lfgy3xlsywZBT7D6g0"},
            { id: "5T0qtC1TIyqybTq2zC"}
        ];

        return (
            <div>
                <div className="left-scene">
                    <Search />      
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