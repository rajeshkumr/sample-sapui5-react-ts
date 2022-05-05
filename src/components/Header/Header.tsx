import { Button, Bar, Title } from '@ui5/webcomponents-react';
import React from 'react';
import Menu from '../Menu';
import './Header.css';

class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { toggle: "hide" };
    this.openMenuBar = this.openMenuBar.bind(this);
  }

  openMenuBar() {
    this.setState((state: any) => ({
      toggle: state.toggle === "hide" ? "show" : "hide",
    }));
  }

  render() {
    return (
      <>
        <Bar
          startContent={<Button icon="menu" onClick={this.openMenuBar} />}
          endContent={<Button icon="connected" />}
        >
          <Title>{this.props.title}</Title>
        </Bar>
        <div className={this.state.toggle + ' main-menu'}>
          <Menu />
        </div>
      </>
    );
  }
}

export default Header;
