import React from "react";
import "./App.css";
import Carousal from "./json/Carousal";
import PostData from "./json/Info.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: PostData.Info,
      car: PostData.car,
    };
  }

  render() {
    return (
      <div>
        <Carousal data={this.state.data} car={this.state.car} />
      </div>
    );
  }
}

export default App;
