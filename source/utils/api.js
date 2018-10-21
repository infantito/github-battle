import axios from 'axios';

// const id = 'YOUR_CLIENT_ID';
const id = '95d54505f686e3b781bd';
// const sec = 'YOUR_SECRET_ID';
const sec = 'b800b5dcf574131f5ad18b16c16d9341b7eb0fe7';
const params = `?client_id=${id}&client_secret=${sec}`;

function getProfile(username) {
  return axios
    .get(`https://api.github.com/users/${username}${params}`)
    .then((user) => user.data);
}

function getRepos(username) {
  return axios
    .get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
}

function getStarCount(repos) {
  return repos.data.reduce((count, repo) => (count + repo.stargazers_count), 0)
}

function calculateScore(profile, repos) {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);

  return (followers * 3) + totalStars;
}

function handleError(error) {
  console.warn(error);
  return null;
}

function getUserData(player) {
  return axios
    .all([
      getProfile(player),
      getRepos(player),
    ])
    .then((data) => {
      const profile = data[0];
      const repos = data[1];

      return {
        profile,
        score: calculateScore(profile, repos),
      }
    })
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

export default {
  battle: (players) => (
    axios
      .all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError)
  ),
  fetchPopularRepos: (language) => {
    const encodedURI = window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
      );

    return axios
      .get(encodedURI)
      .then(response => response.data.items)
  }
}
