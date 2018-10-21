import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import api from '../utils/api';

function SelectLanguage(props) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="languages">
      {
        languages.map((lang) => {
          return (
            <li
              style={
                lang === props.selectedLanguage
                ? { color: '#d0021b' }
                : null
              }
              onClick={props.onSelect.bind(null, lang)}
              key={lang}
            >
              {lang}
            </li>
          )
        })
      }
    </ul>
  );
}

function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {
        props.repos.map((repo, index) => (
          <li key={repo.name} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  className="avatar"
                  src={repo.owner.avatar_url}
                  alt={`Avatar for ${repo.owner.login}`}
                />
              </li>
              <li>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
              <li>
                @{repo.owner.login}
              </li>
              <li>
                {repo.stargazers_count} stars
              </li>
            </ul>
          </li>
        ))
      }
    </ul>
  );
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

// State
// LifeCycle events
// UI

class Popular extends React.Component {

  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  // https://hackernoon.com/where-to-integrate-api-calls-in-reactjs-componentwillmount-vs-componentdidmount-710085dc05c3
  componentDidMount() {
    // https://reactjs.org/docs/faq-ajax.html
    // https://github.com/reactjs/reactjs.org/issues/302
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState({
      selectedLanguage: lang,
      repos: null,
    });

    api
      .fetchPopularRepos(lang)
      .then(repos => this.setState({ repos }));
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {
          !this.state.repos
          ? <Loading />
          : <RepoGrid repos={this.state.repos} />
        }
      </div>
    );
  }

}

export default Popular;
