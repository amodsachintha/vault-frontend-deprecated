import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class MenuBar extends Component {
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu size='small'>
                <Menu.Item>
                    <img src='/img/logo_sm.png' alt='logo'/>
                </Menu.Item>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to='/'/>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='about'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                        as={Link} to='/about'
                    />
                    <Menu.Item>
                        <Button primary as={Link} name='Login' to='/login'>Login</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
