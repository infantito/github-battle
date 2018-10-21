/*
        Stateless Components
                vs
  Stateless Functional Components
                vs
        Functional Components
*/

// https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/

/*
  Stateless Components =>

    const Repos => React.createClass({
      render() {
        ....
      }
    })
    
    or

    class Repos extends React.Component {
      render() {
        ....
      }
    }
  
  Stateless Functional Component =>
    It has just a render method and not state

    const Repos = ({ repos }) => {
      return (
        <div>...</div>
      )
    }

  Functional Components .... ????
*/