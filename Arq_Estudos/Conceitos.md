<!--?  Single Page Application (SPA)  -->

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
