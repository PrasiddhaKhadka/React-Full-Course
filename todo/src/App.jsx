import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div id="todoapp">
        <h1>TodoMatic</h1>
        {/* FORM  */}
        <form action="#">
          <h2>
            <label htmlFor="new-todo-input" className="">
              What needs to be done?
            </label>
          </h2>
          <input
            type="text"
            autoCapitalize="off"
            autoComplete="on"
            defaultValue={"John"}
            id="firstName"
            name="firstName"
          />
          {/* <label htmlFor="firstName">First Name</label> */}
          <button
          >
            Add
          </button>
        </form>
        <div>
          <button className="bg-red-300">
            <span className="">Show </span>
            <span>All</span>
            <span className=""> tasks</span>
          </button>
          <button className="bg-red-300">
            <span className="">Show </span>
            <span>Active</span>
            <span className=""> tasks</span>
          </button>
           <button className="bg-red-300">
            <span className="">Show </span>
            <span>Completed</span>
            <span className=""> tasks</span>
          </button>
        </div>
        <h2 id="list-heading">3 tasks remaining</h2>
        <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>

      </div>
    </>
  );
}

export default App;
