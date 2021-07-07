import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import { useState } from "react";
import Searchbar from "./components/searchbar/Searchbar";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Searchbar placeholder="Search by Keywords" data={data} />
      {/* <Sidebar />
      <div className="home_content"></div> */}
    </div>
  );
}

export default App;
