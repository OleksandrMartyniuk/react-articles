import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func.isRequired
    };

    render() {
        const { isOpen, toggleOpen } = this.props;
        const text = isOpen ? 'hide comments' : 'show comments';

        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { comments, isOpen } = this.props;

        if (!isOpen) return null;

        if (!comments || !comments.length) {
            return <p>No comments</p>
        } else {
            return (
                <ul>
                    {comments.map(comment =>
                        <li key={comment.id}>
                            <Comment comment={comment} />
                        </li>
                    )}
                </ul>
            )
        }
    }
}

export default toggleOpen(CommentList);