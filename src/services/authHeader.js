// Gets user authorization token from localStorage and returns correct Auth header
export default function authHeader() {
  const account = JSON.parse(localStorage.getItem('account'));

  if (account && account.authorization) {
    return account.authorization;
  } else {
    return '';
  }
}
