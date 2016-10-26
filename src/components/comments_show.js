import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchComment, deleteComment} from '../actions/index';
import { Link } from 'react-router';

class CommentsShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchComment(this.props.params.id);
  }

  onDeleteClick() {
    console.log('clicked');
    this.props.deleteComment(this.props.params.id)
      .then(() => {
        this.context.router.push('/comments');
      });
  }

  render () {
    const { comment } = this.props;

    if (!comment) {
      return <div>Loading...</div>
    }

    return (
      <div className="post-info">
        <Link to="/comments">Back to Index</Link>
        <button className="btn-danger"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h3>{comment.title}</h3>
        <h6>Categories: {comment.categories}</h6>
        <p>{comment.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comment: state.comments.post };
}

export default connect(mapStateToProps, { fetchComment, deleteComment })(CommentsShow);
