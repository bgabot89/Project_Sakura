import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/index';
import { Link } from 'react-router';

class CommentsIndex extends Component {
  // lifecycle method componentmount
  componentWillMount() {
    this.props.fetchComments();
  }

  renderPosts() {
    return this.props.comments.map((comment) => {
      return (
      <div class="list-group">
        <li className="list-group-item" key={comment.id}>
          <Link to ={"comments/" + comment.id}>
          <h4 class="list-group-item-heading">{comment.title}</h4>
          <p class="list-group-item-text">{comment.categories}</p>
          </Link>
        </li>
      </div>
      );
    })
  }
  // render elements
  render () {
    return (
      <div>
      <h3 id="posts-header" className="text-center">Posts</h3>
        <div id="post-button" className="text-center">
          <Link to="/comments/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
      <div className="container">
      <ul className="list-group">
        {this.renderPosts()}
      </ul>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments.all };
}

export default connect(mapStateToProps, {fetchComments}, null, {withRef: true })(CommentsIndex);
