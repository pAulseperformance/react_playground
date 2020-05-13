import React, { Component } from "react";
import FlipMove from "react-flip-move";

export class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }
  createTasks(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        <FlipMove
          duration={500}
          easing="ease-out"
          enterAnimation="accordionHorizontal"
          leaveAnimation="fade"
        >
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;