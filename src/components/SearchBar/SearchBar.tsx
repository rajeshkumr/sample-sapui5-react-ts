import { Input, Button } from "@ui5/webcomponents-react";
import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
        toggle: "hide",
        error: null,
        isLoaded: false,
        items: [],
    };
    this.openMenuBar = this.openMenuBar.bind(this);
    this.initSearch = this.initSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  openMenuBar() {
    this.setState((state: any) => ({
      toggle: state.toggle === "hide" ? "show" : "hide",
    }));
  }

  initSearch() {
    this.props.parentClickHandler.initiateSearch();
  }

  clearSearch(event: any) {
    if(!event.value) {
        this.props.parentClickHandler.clearSearch();
    } 
  }

  render() {
    return (
      <>
        <Input
          className="search-bar"
          placeholder={this.props.appConstant.SEARCHBOX_PLACEHOLDER}
          onInput={this.clearSearch}
          showClearIcon
        />
        {/* <input></input> */}
        <Button icon="search" onClick={this.initSearch} />
      </>
    );
  }
}

export default SearchBar;
