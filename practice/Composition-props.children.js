// Composiotion via props.children

/*
  Case: Having to pass state down through each
        branch of my component tree.
*/

// Before
// Consider how I pass the friends prop through
// the component tree in the code below.
const UserProfile = ({ friends, displayName }) => (
  <div>
    <h1>{displayName}</h1>
    <UserFriends friends={friends} />
  </div>
)

const UserFriends = ({ friends }) => (
  <div>
    <h2>Friends</h2>
    {friends.map(friend => (
      <Friend friend={friend} key={friend.id} />
    ))}
  </div>
)

const Friend = ({ friend }) => (
  <div>
    <img src={profile.image} />
    <div>{friend.name}</div>
  </div>
)

/*
  NOTE:
    This is a small example that demonstrates this particular component pattern,
    but you can imagine the component tree having even more branches with state
    needing to be passed all of the way down. The pattern works, but you end up
    frustrated because of all the unnecessary boilerplate. You might even mix up
    the names of the props.
*/

// After
/*
  Solution: You can often avoid the deeply nested component
            hierarchy by taking full advantage of "React children".
            [Composition via React Children]
*/
const UserProfile = ({ friends, displayName }) => (
  <div>
    <h1>{displayName}</h1>
    <ProfileSection label='Friends'>
      {friends.map(friend => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ProfileSection>
  </div>
)

const ProfileSection = ({ label, children }) => (
  <div>
    <h2>{label}</h2>
    {children}
  </div>
)

const Friend = ({ friend }) => (
  <div>
    <img src={profile.image} />
    <div>{friend.name}</div>
  </div>
)