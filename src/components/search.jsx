import React, { Component } from 'react';

class Search extends Component {
    handleUpdate = (event) => {
        this.props.searchFunction(event.target.value);
    }
    
    render () {
        return (
            <div>
                <input type="text" className="form-control form-search" onChange={this.handleUpdate}></input>
            </div>
        )
    }
}

export default Search;