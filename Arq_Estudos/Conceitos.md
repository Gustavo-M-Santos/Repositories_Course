**Single Page Application**

  Durante uma aplicação existe uma comunião entre o nosso cliente(Front-End) e o
servidor(Back-End), one o nosso cliente manda um pedido e o servidor mando o resultado
do nosso pedido.
  Nessa conversa de pedido e resultado temos duas formas de entrega de dado.

    1. Tradicional: no forma tradicional existe nosso Front-End com todo a aplicação
  carregada(HTML, CSS, JavaScript) eao solicitar ao servidor uma lista de contato
  por exemplo, ele buscara os dados mas ira construir uma nova pagina e enviar para
  o front-end, ou seja um nova pagina, o que pode um tamanho gigantesco deixando
  a aplicação pesada.
    2. SPA: com a difere, existe como se fosse uma aplicação rodando tanto no
  Front-End quanto no Back-End, e quando é feito essa comunicação entre o cliente
  e o servidor o resultado que será enviado serão apenas os dados da pagina. Deixando
  a aplicação mais rápida e leve.
    Como temos dois aplicativos rodando em ambas parte da aplicação a única coisa
  que acontece é a comunicação dos dub-aplicativos que rodam no front e back end
  pois o sub-aplicativo do back pega os dados e envia  para o sub-aplicativo do front
  que atualiza apenas o dados necessários

**Desestruturação**
  Quando vamos buscar um determinado tipo e dato no JS, uma forma mais pratica é
fazer a desestruturação quando vamos lançar em uma variável

  Quando fazemos isso estamos dizendo que, tem um dado que chama pathname, e ira
buscar esse dado e o nome da variável é essa função
```javascript

<!--* Forma simples -->
  const pathname = window.location.pathname
  const href = window.location.href
  const host = window.location.host
  const port = window.location.port

<!--* Forma desestruturada-->
  const { pathname } = window.location.pathname
  const { href } = window.location.href
  const { host } = window.location.host
  const { port } = window.location.port

<!--* Forma desestruturada resumida-->
  const {pathname, href, host, port} = window.location.pathname
```
