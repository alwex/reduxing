import React from "react";
import "./App.css";
import { RootState } from "./redux";
import { fetchUsers } from "./redux/users";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const { isFetching, allIds, byId } = users;

  return (
    <div className="App">
      <button onClick={() => dispatch(fetchUsers())}>load</button>
      <p>{isFetching ? "loading..." : ""}</p>
      {allIds.map(id => (
        <div key={id}>{byId[id].email}</div>
      ))}
    </div>
  );
}

export default App;
