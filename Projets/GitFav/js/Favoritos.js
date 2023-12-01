import { GithubUsers } from './GithubUsers.js'

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.loud()

  }

  loud() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorite:')) || []
  }

  save() {
    localStorage.setItem('@github-favorite:', JSON.stringify(this.entries))
  }

  async add(userNamer) {
    try {
      const useExist = this.entries.find(entry => entry.login === userNamer)
      if(useExist) {
        throw new Error('Usuário existente')
      }

      const user = await GithubUsers.search(userNamer)

      if(user.login === undefined) {
        throw new Error('Usuário não encontrado')
      }

      this.entries = [user, ...this.entries]

      console.log(this.entries);
      this.update()
      this.save()

    } catch (error) {
      alert(error.message)
    }
  }


  delete(user) {
    const filterEntries = this.entries
      .filter(entry => entry.login !== user.login)


    this.entries = filterEntries
    this.update()
    this.save()
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')
    this.searchInput = this.root.querySelector('.search input')



    this.update()
    this.onAdd()
  }

  onAdd() {
    const searchButton = this.root.querySelector('.search button')

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        this.handleAdd()
      }
    }

    const handleClick = () => {
      this.handleAdd()
    }

    this.searchInput.addEventListener('keypress', handleKeyPress)
    searchButton.addEventListener('click', handleClick)

  }

  handleAdd() {
    const { value } = this.searchInput

    this.add(value)

    this.searchInput.value = ""
  }

  update() {
    this.removeAllTr()

    this.entries.forEach((user) => {
      const row = this.createNewRow()

      row.querySelector('.users img').src = `https://github.com/${user.login}.png`
      row.querySelector('.users a').href = `https://github.com/${user.login}`
      row.querySelector('.users P').innerHTML = `${user.login} `
      row.querySelector('.users span').innerHTML = `/${user.name}`
      row.querySelector('.public_repos').innerHTML = `${user.public_repos}`
      row.querySelector('.followers').innerHTML = `${user.followers}`

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Você tem certeza que deseja excluir esse usuário?')

        if (isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
  }

  createNewRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `

    <td class="users">
      <img src="" alt="Imagem de usuário GitHub">
      <a href="" target="_blank">
        <p></p>
        <span></span>
      </a>
    </td>
    <td class="public_repos"></td>
    <td class="followers"></td>
    <td>
      <button class="remove">Remover</button>
    </td>
    `

    return tr
  }

  removeAllTr() {

    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}
