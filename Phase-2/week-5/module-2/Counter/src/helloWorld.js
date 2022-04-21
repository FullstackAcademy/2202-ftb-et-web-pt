import { render } from "@testing-library/react";
import React, {Component} from "react";
// Class Component
class Welcome extends Component {

render() {
    // JSX allows us to write code that strongly resembles HTML and can use variable interpolation. 
    //this componet returns JSX and not HRML. 
return <h1> Hello, World </h1>
}
}

export default Welcome