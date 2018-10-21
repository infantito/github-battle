/* https://tylermcginnis.com/react-elements-vs-react-components/ */

/*
  => React Element
  - It "describes" what you want to see on the screen
  - It's an object representation of DOM Node
  - It's a plain object describing a component instance
    or DOM node and its desired properties.
  - This isn't actually the thing you'll see on the screen,
    instead, it's just an "object representation" of it.
*/

//* From
const element = React.createElement(
  'div', // HTML or Component tag name
  {id: 'login-btn'}, // any attribute you want the element to have
  'Login' // content or the children of the element (it could be null)
);

//* Will be
{
  type: 'div',
  props: {
    children: 'Login',
    id: 'login-btn'
  }
}

//* Once It's already rendered to the DOM (React.render)
<div id='login-btn'>Login</div> => DOM node

/*
  => React Component
  - It's "a function or a Class" which optionally accepts input
    and return a React Element
  - These are the building blocks of React
*/

function Button ({ onLogin }) {
  return React.createElement(
    'div',
    {id: 'login-btn', onClick: onLogin},
    'Login'
  )
}

class ButtonLink extends Component {}

/*
  When React sees an element with a function or class type
  (like our “type: Button” above), it will then consult with that component
  to know which element it returns, given the corresponding props.
  This whole process is called "RECONCILIATION" in React and
  it’s triggered every time setState or ReactDOM.render is called.

  RECONCILIATION starts when you call ReactDOM.render() or setState().

  An "INSTANCE" is what you refer to as "this" in the component class you write.
  It is useful for storing local state and reacting to the lifecycle events.
*/