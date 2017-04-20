import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createComment } from '../actions/index';
import { Link } from 'react-router';

class CommentsNew extends Component {

  //gives app availablity of react-router through context prop
  static contextTypes = {
    router: PropTypes.object
  };

  //Submits props from form
  onSubmit(props) {
    this.props.createComment(props)
      .then(() => {
        //comment has been created, navigate the user to the index
        //We navigate by calling this.context.router.push with the
        //new path to navigate to.
        this.context.router.push('/');
      });
  }

  //render input form
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <div className="container new-comments-form">
       <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
         <h3>Create A New Comment</h3>

         <div className={`form-group ${title.touched && title.invalid ? 'has-error' : ''}`}>
           <label>Title</label>
           <input type="text" className="form-control" {...title} />
           <div className="text-help">
             {title.touched ? title.error : ''}
           </div>
         </div>

         <div className={`form-group ${categories.touched && categories.invalid ? 'has-error' : ''}`}>
           <label>Categories</label>
           <input type="text" className="form-control" {...categories} />
            <div className="text-help">
              {categories.touched ? categories.error : ''}
            </div>
         </div>

         <div className={`form-group ${content.touched && content.invalid ? 'has-error' : ''}`}>
           <label>Content</label>
           <textarea className="form-control" {...content} />
            <div className="text-help">
              {content.touched ? content.error : ''}
            </div>
         </div>

         <button type="submit" className="btn btn-primary">Submit</button>
         <Link to="/" className="btn btn-danger">Cancel</Link>
       </form>
       </div>
     );
   }
 }

 //validates fields
 function validate(values) {
   const errors = {};

   if (!values.title) {
     errors.title = 'Enter a title';
   }
   if (!values.categories) {
     errors.categories = 'Enter a categories';
   }
   if (!values.content) {
     errors.content = 'Enter some content';
   }
   return errors;
 }

 //connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
 //reduxForm: 1st in form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

 export default reduxForm({
   form: 'CommentsNewForm',
   fields: ['title', 'categories', 'content'],
   validate
 }, null, { createComment })(CommentsNew);
