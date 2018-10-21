// props.children in React
/*
  this.props.children is an array of components
  rather than just a single component,
  since there are multiple components nested.

  props.children in a component is just whatever
  is between the <Opening> and closing </Opening> blocks of a component.
*/
// Example 01:
<Clock>
  12:49 AM // children
</Clock>
  
// Example 02:
<Clock>
  <Time /> // children
  <Period /> // children
</Clock>