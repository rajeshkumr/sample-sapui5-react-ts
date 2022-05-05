import { Button, Bar, Title } from '@ui5/webcomponents-react';
import React from 'react';
import './UserDetail.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// Icon from webcomponents
import '@ui5/webcomponents-icons/dist/json-imports/Icons.js';
import APP_CONFIG from '../../config/app';
import * as Constants from '../../constants';
import userApi from '../../api/User';

class UserDetail extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      item: []
    };
  }

  componentDidMount() {
    const id = window.location.href.at(window.location.href.lastIndexOf("/") + 1)
    userApi.UserDetail(id).then(res => res.json())
      .then(
        (result) => {
          this.setState({
            item: result
          });
        },
        (error) => {
          this.setState({
            item: []
          });
        }
      )
  }

  render() {
    const { item } = this.state;
    return( <>
    <Header appConstant={Constants} title={APP_CONFIG.title}/>
    <ul>
            <li>
              {item.title}
            </li>
            <li>
              {item.body}
            </li>
        </ul>
    <Footer appConstant={Constants} />
    </> );

  }
}

export default UserDetail;