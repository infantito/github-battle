class Users extends React.Component {
  render() {
    const friends = this.props.list.filter(user => user.friend);
    const nonFriends = this.props.list.filter(user => !user.friend);

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(user => (<li key={user.name}>{user.name}</li>))}
        </ul>

        <hr />

        <h1>Non Friends</h1>
        <ul>
          {nonFriends.map(user => (<li key={user.name}>{user.name}</li>))}
        </ul>
      </div>
    )
  }
}

Users.propTypes = {
  // list: PropTypes.arrayOf(PropTypes.object),
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired,
  })),
}

ReactDOM.render(
  <Users
    list={
      [
        { name: 'Daniel', friend: false },
        { name: 'Maria', friend: true },
        { name: 'Isabel', friend: false },
        { name: 'Daysi', friend: true },
        { name: 'Anibal', friend: false },
        { name: 'Anali', friend: true },
      ]
    }
  />,
  document.getElementById('root')
);