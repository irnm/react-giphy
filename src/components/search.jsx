import React, { Component } from 'react';

class Search extends Component {
    handleUpdate = (events) => {
        console.log(event.target.value)
    }
    
    render () {
        return (
            <div>
                <input type="text" className="form-control form-search" onUpdate={this.handleUpdate}></input>
            </div>
        )
    }
}

export default Search;