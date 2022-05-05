import { Page, Icon, Text } from '@ui5/webcomponents-react';
import React from 'react';
import './Main.css';
import SearchPanel from '../SearchPanel';
import UserPanel from '../UserPanel';
import userApi from "../../api/User";

class Main extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.initiateSearch = this.initiateSearch.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.parentClickHandler = {clearSearch: this.clearSearch, initiateSearch:  this.initiateSearch}
        this.state = {
            isLoaded: false,
            items: [],
            toggleClass: 'show'
        }
    }

    initiateSearch() {
        userApi.Users().then((res: any) => res.json())
        .then(
          (result: any) => {
            this.setState({
              isLoaded: true,
              items: result,
              toggleClass: 'hide'
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error: Error) => {
            this.setState({
              isLoaded: false,
              error,
              toggleClass: 'show'
            });
          }
        );
    }

    clearSearch() {
        this.setState({
            isLoaded: false,
            items: [],
            toggleClass: 'show'
        })
    }

    parentClickHandler: {}
    

    render() {
        return (
            <Page className="main-content">
                <SearchPanel parentClickHandler={this.parentClickHandler} appConstant={this.props.appConstant} />
                <div className="placeholder">
                    <Icon className={"icon-holder "+this.state.toggleClass} name="inspection" />
                    <Text className={"text-holder "+this.state.toggleClass}>{this.props.appConstant.PLACEHOLDER_TITLE}</Text>
                    <UserPanel resultData={this.state}/>
                </div>
            </Page>
        );
    }
}

export default Main;
