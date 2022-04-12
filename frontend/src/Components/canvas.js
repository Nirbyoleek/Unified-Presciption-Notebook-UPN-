import * as React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const Canvas = class extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
  }

  render() {
    return (
      <div className="h-screen">
        <ReactSketchCanvas
          strokeWidth={4}
          strokeColor="red"
        />
      </div>
    );
  }
};

export default Canvas;
