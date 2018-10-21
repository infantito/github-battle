/*
  Private Component
  ----------------
*/
// [*] From
// FriendList Component
function FriendList(props) {
  return (
    <h1>Friends:</h1>
    <ul>
      {props.friends.map((friend, index) => (<li key={friend}>{friend}</li>))}
    </ul>
  );
}

// [*] Turned into
 
// Private Component
function FriendItem(props) {
  return (<li>{props.friend}</li>);
}

// FriendList Component
function FriendList(props) {
  return (
    <ul>
      {
        props.friends.map((friend, index) => (
          <FriendItem friend={friend} key={friend} />
        ))
      }
    </ul>
  );
}