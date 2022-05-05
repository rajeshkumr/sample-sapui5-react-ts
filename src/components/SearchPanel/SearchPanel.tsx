import React from 'react';
import './SearchPanel.css';
import SearchBar from '../SearchBar';

class SearchPanel extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="search-panel">
                <SearchBar parentClickHandler={this.props.parentClickHandler} appConstant={this.props.appConstant} />
            </div>
        );
    }
}

export default SearchPanel;