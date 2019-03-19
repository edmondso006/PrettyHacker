import React from 'react';
import './StoryComponent.css';

const StoryComponent = (props) => {
  let date = new Date(props.story.time * 1000);
  let datePosted = date.toISOString().split('T')[0];
  let comments = props.story.kids;

  return (
    <div className="card">
     <div className="grid-container">

      <div className="grid-item-1">
        <a href={props.story.url} className="title">
          <span className='title'>{props.story.title}</span>
        </a>
        <p className="posted">Posted: { datePosted }</p>
        
      </div>

      <div className="grid-item-3">
        <span className="score">{props.story.score}👍</span>
        <p className="posted">Comments ({comments ? comments.length : null})</p>
      </div>
      </div>
    </div>
     
  )
}

export default StoryComponent;