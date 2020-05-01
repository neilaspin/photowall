import React from "react";
import ReactDOM from "react-dom";
import Main from './Components/Main';
import './stylesheet.css';


// const tasks = [
//   "Take out the bins",
//   "Take out the cat",
//   "Take out the dog",
//   "Take out the dog",
// ];


// class List extends React.Component {
//   render() {
//     return (
//       <ol>
//         {this.props.tasks.map((task, index) => ( // this is important - it points to the component instance that is being rendered.
//           <li key={index}> {task}</li>))}        {/* any tasks passed in from the component props of the List items */ }
//       </ol>
//     )
//   }
// }
// class Title extends React.Component {
//   render() {
//     return <h1> {this.props.title} </h1>
//   }
// }
// class Main extends React.Component {
//   render() {
//     return <div>
//             <Title title={'To Do List'}/>
//             <List tasks={['Mow the dog', 'Walk the lawn']}/>
//             <List tasks={['hose', 'laundry']}/>
//           </div>
//   }
// }

ReactDOM.render(<Main />, document.getElementById("root"));
