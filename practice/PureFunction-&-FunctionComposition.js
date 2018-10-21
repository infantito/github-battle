'user strict';

/* Function Composition */
const getProfilePic = username => `https://photo.fb.com/${username}`;
const getProfileLink = username => `https://www.fb.com/${username}`;
const getProfileData = (username) => (
  {
    pic: getProfilePic(username),
    link: getProfileLink(username),
  }
);

// Function Invocation
getProfileData('infantito');

/* Function Composition in React */
class ProfilePic extends React.Component {
  render() {
    return (
      <img src={`https://photo.fb.com/${this.props.username}`} />
    );
  }
}

class ProfileLink extends React.Component {
  render() {
    return (
      <a href={`https://www.fb.com/${this.props.username}`}>
        {this.props.username}
      </a>
    );
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <div>
        <ProfilePic username={this.props.username} />
        <ProfileLink username={this.props.username} />
      </div>
    );
  }
}

// Creating elements
<Avatar username="infantito" />

/* Function Composition in React */
/*
  Stateless Functional Component instead of Stateless Components
*/
const ProfilePic = (props) => (<img  src={`https://photo.fb.com/${props.username}`} />);
const ProfileLink = (props) => (
  <a  href={`https://www.fb.com/${props.username}`}>
    {props.username}
  </a>
);
// Creating elements
<Avatar username="infantito" />

// => One thing each of the functions and components above has
//    in common is they're all "PURE FUNCTIONS"