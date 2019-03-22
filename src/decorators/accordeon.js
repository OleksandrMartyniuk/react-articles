import React, { Component as ReactComponent } from 'react';

export default (OriginalComponent) =>
    class AccordeonComponent extends ReactComponent {
        state = {
            openArticleId: null
        };

        toggleOpenArticle = (openArticleId) => evt => {
            openArticleId = this.state.openArticleId === openArticleId ? null : openArticleId;
            this.setState({ openArticleId })
        }

        render() {
            return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
        }
    }