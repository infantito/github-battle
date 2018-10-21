/*
  Container Components
  --------------------
  - These are primarily concerned with "How Things Work"
  - They rarely have any HTML tags of their own, aside from a wrapping "<div>"
  - They are often stateful
  - They are responsible for providing data and behavior to their children
    (usuarlly presentational components)
*/

class Collage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      images: []
    };
  }
  componentDidMount() {
    fetch('/api/current_user/image_list')
      .then(response => response.json())
      .then(images => this.setState({images}));
  }
  render() {
    return (
      <div className="image-list">
        {this.state.images.map(image => {
          <div className="image">
            <img src={book.image_url} />
          </div>
        })}
      </div>
    )
  }
}

/*
  Presentational Components
  -------------------------
  - They are primarily concerned with "How Things Look"
  - Probably only contain a render method and little else logic
  - They don't know how to load or alter the data that they render
  - They're best written as Stateless Functional Components
*/

//defining the component as a React Component
class Image extends Component {
   render() {
      return <img src={this.props.image} />;
   }
}
export default Image

//defining the component as a constant
const Image = props => (
   <img src={props.image} />
)
export default Image

/*
  Separation of concerns using a container component
  --------------------------------------------------
*/

const Image = props => (<img src={props.image} />);

export default Image;

class ImageContainer extends React.Component {
  constructor() {
    super();
    
    this.state = {
      images: []
    };
  }
  
  componentDidMount() {
    fetch('/api/current_user/image_list')
      .then(response => response.json())
      .then(images => this.setState({images}));
  }

  render() {
    return (
      <div className="image-list">
        {this.state.images.map(image => {
          <Image image={image}/>
        })}
      </div>
    )
  }
}

export default ImageContainer;