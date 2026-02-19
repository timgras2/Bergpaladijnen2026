const VOTES_KEY = 'huttentocht_votes';
const USERNAME_KEY = 'huttentocht_username';

function getVotes() {
  try {
    return JSON.parse(localStorage.getItem(VOTES_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

function saveVotes(votes) {
  localStorage.setItem(VOTES_KEY, JSON.stringify(votes));
}

function getUsername() {
  return localStorage.getItem(USERNAME_KEY) || '';
}

function saveUsername(name) {
  localStorage.setItem(USERNAME_KEY, name.trim());
}

window.storage = {
  getVotes,
  saveVotes,
  getUsername,
  saveUsername,
};
