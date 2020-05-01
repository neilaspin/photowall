import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

function Photo(props){
    const post = props.post // removed the 'this' keyword
    return <figure className="figure"> 
            <img className='photo' src={post.imageLink} alt={post.description}/>
            <figcaption>
               <p> {post.description}</p> 
               <div className="button-container">
                <button className="remove-button" FontAwesomeIcon="coffee" onClick = {() => {
                    props.onRemovePhoto(post)
                }}> Remove </button>
               </div>
            </figcaption>
          </figure>
}
Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}
export default Photo

// if all your component has is a render method you can safely replace with a function.
// you are allowed to convert your class to a stateless functional component.