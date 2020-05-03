import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
// anchor tag and href attribute - hyperlinks <a></a>

function PhotoWall(props) {
  return (
    <div>
      {/* <a className="addIcon" onClick={props.onNavigate} href="#AddPhoto"> Click to add photos </a>  */}
      <Link className="addIcon" to="/AddPhoto"> Click to add photos </Link>    
      {/* <button onClick={props.onNavigate} className="addIcon"> Click to add photos </button> */}
      <div>
        <button className="photoGrid"> </button>
        {props.posts
        .sort(function(x,y){
            return y.id - x.id
        })
        .map((post, index) => (
          <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  );
}
PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;
