export class GithubUsers {

  static search(userNamer){
    const endPointer = `https://api.github.com/users/${userNamer}`

    return fetch(endPointer)
    .then(data => data.json())
    .then(({login, name, followers, public_repos}) => ({
      login,
      name,
      followers,
      public_repos
    }))
  }
}
