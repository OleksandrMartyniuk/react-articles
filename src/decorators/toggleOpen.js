import React, { Component as ReactComponent } from 'react';

export default (OriginalComponent) =>
    class WrappedComponent extends ReactComponent {
        state = {
            isOpen: false
        };

        render() {
            return <OriginalComponent
                {...this.state}
                {...this.props}
                toggleOpen={this.toggleOpen}
            />
        }

        toggleOpen = ev => {
            ev && ev.preventDefault && ev.preventDefault();
            this.setState({ isOpen: !this.state.isOpen });
        }
    }