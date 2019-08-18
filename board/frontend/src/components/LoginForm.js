import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from "../actions/auth";
import {Button, Form, Message} from "semantic-ui-react";

class LoginForm extends React.Component {
    state = {
        password: '',
        loading: false,
        error: ''
    };

    onSubmit = () => {
        this.setState({loading: true});
        this.props.onLogin(this.state.password)
            .catch(error => {
                this.setState({ error, loading: false })
            });
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} loading={this.state.loading}>
                { this.state.error &&
                    <Message negative>
                        <Message.Header>Something went wrong!</Message.Header>
                        <p>{ this.state.error }</p>
                    </Message>
                }

                    <Form.Input
                        type="password"
                        label="Password"
                        onChange={ e => this.setState({ password: e.target.value }) }
                        action={ <Button color="blue" >Login</Button> }
                    />
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLogin: (password) => dispatch(login(password))
});


LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(LoginForm);
