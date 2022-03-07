import React, { Components } from "react";
import "./App.css";

class App extends Components {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      toDo: [],
      done: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  list = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    if (this.state.input !== "") {
      const items = this.state.toDo;
      items.push(this.state.input);
      this.setState({
        toDo: items,
        input: "",
      });
    }
  };

  handleComplete = (i) => {
    const over = this.state.toDo.filter((item) => item === i);
    const done = this.state.done;
    done.push(over);
    console.log(over);
    console.log(done);
    this.setState({
      done: done,
    });

    const items = this.state.toDo.filter((item) => item !== i);
    console.log(items);
    this.setState({
      toDo: items,
    });
  };

  handleRestore = (i) => {
    const restore = this.state.done.filter((item) => item === i);
    const items = this.state.toDo;
    items.push(restore);
    this.setState({
      toDo: items,
    });

    const done = this.state.done.filter((item) => item !== i);
    console.log(done);
    this.setState({
      done: done,
    });
  };

  handleDelete = (i) => {
    const items = this.state.toDo.filter((item) => item !== i);
    console.log(items);
    this.setState({
      toDo: items,
    });
  };

  handleDelete1 = (i) => {
    const done = this.state.done.filter((item) => item !== i);
    console.log(done);
    this.setState({
      done: done,
    });
  };

  render() {
    const taskAssigned = this.state.toDo.map((i) => (
      <div key={i} className="taskDiv">
        <p className="taskP">{i}</p>

        <button className="taskDone" onClick={() => this.handleComplete(i)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <g>
              <path d="M20,4v12H8V4H20 M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2L20,2z M12.47,14 L9,10.5l1.4-1.41l2.07,2.08L17.6,6L19,7.41L12.47,14z M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z" />
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
          </svg>
        </button>

        <button className="taskClose" onClick={() => this.handleDelete(i)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <rect fill="none" height="24" width="24" />
            <path d="M19,19H5V5h14V19z M3,3v18h18V3H3z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7 L17,8.41L13.41,12L17,15.59z" />
          </svg>
        </button>
      </div>
    ));
    const taskCompleted = this.state.done.map((i) => (
      <div key={i} className="taskCompleted">
        <p className="taskP">{i}</p>

        <button className="taskDone" onClick={() => this.handleRestore(i)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <g>
              <path d="M20,4v12H8V4H20 M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2L20,2z M12.47,14 L9,10.5l1.4-1.41l2.07,2.08L17.6,6L19,7.41L12.47,14z M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z" />
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
          </svg>
        </button>

        <button className="taskClose" onClick={() => this.handleDelete1(i)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <rect fill="none" height="24" width="24" />
            <path d="M19,19H5V5h14V19z M3,3v18h18V3H3z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7 L17,8.41L13.41,12L17,15.59z" />
          </svg>
        </button>
      </div>
    ));

    return (
      <div className="container">
        <div className="innerContainer">
          <h1>ToDo List</h1>
          <form className="form">
            <input
              type={"text"}
              value={this.state.input}
              onChange={this.list}
              className="innerInput"
            />
            <button
              type="submit"
              className="innerSubmit"
              onClick={this.handleChange}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="tasks">
          {taskAssigned}
          {taskCompleted}
        </div>
      </div>
    );
  }
}
export default App;
