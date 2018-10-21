/* https://tylermcginnis.com/react-elements-vs-react-components/ */

// Function Definition
const add = (x, y) => x + y;

// Function Invocation
add(1, 2);

// Component Definition
class Icon extends Component {}

// Component Invocation ??? => Creating elements
<Icon />
// => Solution: Creating elements,
//              because later It will be compiled to React.createElement...
// ***************************************************************************
/*
  // Stateless functional component
  It's just a plain javascript function
  which takes props as an argument and returns a react element/component.

  A stateless component has no state(obvious, isn’t it?),
  it means that you can’t reach `this.state` inside it.
  It also has no lifecycle so you can’t use componentDidMount and other hooks.

  "Stateless Functional Components" rather than just "Functional Components".
  That's because future Functional Components may be able to contain state.
*/
