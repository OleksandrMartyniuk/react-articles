import React, { Component } from 'react';

class UserForm extends Component {
    state = {
        username: ''
    }

    render() {
        return (
            <form>
                Username: 
                <input type="text" value={this.state.username} onChange={this.onUsernameChange} />
            </form>
        )
    }

    onUsernameChange = (evt) => {
        if (evt.target.value.length < 10) return;

        this.setState({ username: evt.target.value });
    }
}

export default UserForm;