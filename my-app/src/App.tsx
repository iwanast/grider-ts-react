import React from "react";
import { GuestList } from "./features/guest/GuestList";
import { GuestSearch } from "./features/guest/GuestSearch";

import "./App.css";

function App(): JSX.Element {
  return <div className="App">< GuestList />
  < GuestSearch /> </div>;
}

export default App;
