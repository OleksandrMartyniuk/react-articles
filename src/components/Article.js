import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import './article.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    render() {
        const { article, isOpen, toggleOpen } = this.props;

        return (
            <div>
                <h3>{article.title}!!!!!</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <TransitionGroup component={null}>
                    {this.getBody()}
                </TransitionGroup>
            </div >
        )
    }

    getBody() {
        const { article, isOpen } = this.props;
        if (!isOpen) return null;
        return (
            <CSSTransition classNames="article" timeout={300} appear>
                <div>
                    {article.text}
                    <CommentList comments={article.comments} />
                </div>
            </CSSTransition>
        )
    }
}

export default Article;