import React from 'react'

class SearchComponent extends React.Component {

    constructor(searchText) {
        super();
        this.searchText = "What are you looking for";
    }

    render() {
        return (
            <form className="form-inline searchForm my-2 my-lg-0 mx-auto">
                    <input className="form-control" type="text" placeholder={this.searchText} aria-label="Search"/>
            </form>
        );
    }

}

export default SearchComponent;