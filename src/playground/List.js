import React, {Component} from 'react';


class List extends React.Component {
    render() {
      return (
        <ol>
          {this.props.tasks.map((task, index) => ( // this is important - it points to the component instance that is being rendered.
            <li key={index}> {task}</li>))}        {/* any tasks passed in from the component props of the List items */ }
        </ol>
      )
    }
  }
  export default List