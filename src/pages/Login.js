import React, {Component} from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Icon,
} from 'semantic-ui-react';
import {toast} from 'react-toastify';
import {attemptLogin} from '../main/Auth';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            token: null,
            email: "",
            password: ""
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }

    handleSubmit(event) {
        if (this.state.email.trim() !== "" && this.state.password.trim() !== "") {
            attemptLogin(this.state.email, this.state.password)
                .then(response => {
                    console.log(response);
                })
                .catch(() => {
                    toast.error('Authentication Failed!');
                    this.setState({email: "", password: ""})
                })
        } else {
            toast('Please fill in your login information!');
        }
    }

    render() {
        return (
            <Grid centered columns={3}>
                <Grid.Column>
                    <Segment>
                        <Header as="h2" textAlign="center">
                            Login
                        </Header>
                        <Segment>
                            <Form size="large">
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Email address"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                />

                                <Button animated color="green" fluid size="large" onClick={this.handleSubmit}>
                                    <Button.Content visible>Login</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right'/>
                                    </Button.Content>
                                </Button>
                            </Form>
                        </Segment>
                        <Message>
                            Not registered yet? <a href="#">Sign Up</a>
                        </Message>
                    </Segment>
                </Grid.Column>

            </Grid>
        );
    }
}

export default Login;