/* LifeCycle EVents */
/*
  These are special methods each component can have that allow us
  to hook into the views when specific conditions happen
  (i.e. when the component first renders or
  when the component get updated with new data, etc).

  or

  They're various methods which are invoked
  at different phases of the lifecycle of a component.
*/

/* You can really break React's Life Cycle Methods down into two categories */
/*
  1) When a component get mounted and unmounted to the DOM
  2) When a component receives new data
*/

/*
  REACT < 16.2
  ************
  Initialization (initial state or default props)
  --------------
  - getInitialState
  - getDefaultProps

  Mounting
  --------
  - componentWillMount
  - render
  - componentDidMount

  Updating
  --------
  - componentWillReceiveProps
  - shouldComponentUpdate
    *-> true                           *-> false
        - componentWillUpdate          - x
        - render                       - x
        - componentDidUpdate           - x

  Unmounting
  -----------
  - componentWillUnmount

  REACT > 16.3 [http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]
  ************
  Mounting
  --------
  These methods are called in the following order when an instance
  of a component is being created and inserted into the DOM:
  - constructor
  - static getDerivedStateFromProps [New Props | setState() | forceUpdate()]
  - render
  * React updates DOM and refs
  - compononentDidMount

  Avoid some life cycle methods like that:
  [UNSAFE_componentWillMount()]
  
  Updating
  --------
  An update can be caused by changes to props or state.
  These methods are called in the following order
  when a component is being re-rendered:
  - static getDerivedStateFromProps [New Props | setState() | forceUpdate()]
  - shouldComponentUpdate
  - render
  - getSnapshotBeforceUpdate
  * React updates DOM and refs
  - componentDidUpdate

  Avoid some life cycle methods like that:
  [UNSAFE_componentWillUpdate() | UNSAFE_componentWillReceiveProps()]
  
  Unmounting
  ----------
  This method is called when a component is being removed from the DOM:
  - componentWillUnmount

  Error Handling
  --------------
  This method is called when there is an error during rendering,
  in a lifecycle method, or in the constructor of any child component.
  - componentDidCatch()
*/