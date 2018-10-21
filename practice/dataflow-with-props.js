class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }
}

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

ReactDOM.render(
  <Badge
    name='Daniel Infante'
    username='infantito'
    img='https://avatars0.githubusercontent.com/u/9045302?s=400&u=c21983e269ebf082c8d69ff9041680cfd52c69d0&v=4'
  />,
  document.getElementById('root')
);