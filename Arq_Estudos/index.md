<!--! img Aleatorias -->

`img Avatar`
https://randomuser.me/api/portraits/women/5.jpg
https://randomuser.me/api/portraits/men/5.jpg

`ima Aleatorias`
https://source.unsplash.com/random?a=1

<!-- ! Elementos CSS -->

Sobre borda das caixas

`box-sizing: border-box`

  Serve para mater o tamanho da caixa igual, mesmo adicionando
   por um padding, se uma caixa tiver 300px e um padding de 20px,
    a caixa ira almentar para 320px.

Fonte e textos

`-webkit-font-smoothing: antialiased;`

  Melhora a aparência do texto em navegadores como Safari e
antigo Chrome, tornando as bordas das fontes mais suaves
e nítidas.

`-moz-osx-font-smoothing: grayscale;`

  Melhora a aparência do texto em navegadores como Firefox,
  tornando as bordas das fontes mais suaves, resultando em um
   texto mais limpo e legível.

`:root {font-size: 62.5%;}`

  Serve para trocarmos unidades de medidas fixas para
  unidades de medidas flexiveis, ajudando na Acessibilidade.
   62.5% é equivalente á 10px

`font-size: clamp(min, ideal, max)`

  um conjunto de propriedas de vai dizer ao navegador a
margem de tamanho de texto que ele pode trabalhar, minimo,
ideal o maximo. usado em layout mais complexos com muitas
quebras de dispositivos. mais comum usar o @media

Alinhamento de caixas

Alinhamentos que envolvem o container de uma grid ou seja o
todo.

`align-content`

  serve para aliar a caixa pai no eixo Y, eu é em coluna

`justify-content`

  serve para aliar a caixa pai no eixo x, eu é em linha

`place-content`

  Alinha tanto no eixo X quanto o Y, coluna e linha



`align-intems`

  serve para aliar a o item dentro da caixa pai no eixo Y,
eu é em coluna

`justify-intems`

  serve para aliar a o item dentro da caixa pai no eixo x,
eu é em linha

`place-intems`

  Alinha tanto no eixo X quanto o Y, coluna e linha


  O self serva para pocicionamento de um elemento especifico
dentro do grid

`align-self`|`justify-self`|`place-self`

`overflow:`

  com isso podemos mudar a camada de um determinado elemento
como colocar algum elemento em uma pocisão fixa na frente da
tela ou esconder algum item atras de tudo


Scroll

`overflow-y:`

  Essa propriedade vaideterminar se eu quero que o scroll
do mause seja aplicado apenas em um elemento.
  Exemplo de quando quero que o conteudo fique no MAIN, e o
FOOTER e HAEDER fiquem fixos, então eu adiciono mais conteudos
apena no Main


Variaveis

`--` <!--? Criação da variavel  -->
`var()` <!--? Solicitação da variavel-->

  As vvariaveis elas sevem parapodermos colocar determinados
valoeres que seram reutilizados, como cores de base por exemplo.

    <!-- * Exemplo -->
      <!-- ? Criando as variabveis -->
        --base-color-blue:#0000ff;
        --boder-red-50: 50px solid red ;

      <!--? Solicitando as variaveis -->

        div {
          background-color: var(--base-color-blue) ;
          boder:var(--boder-red-50);
        }


Imagens

`object-fit: cover;`

  Faz com que a imagem cubra todo o espaço de uma menira que
elanão fique esticada

`aspect-ratio: (N° horizontal/N° vertical);`

  Como alguma imagens são de porporções direfente, como 1/1,16/9
esse comando vai fazer com que a imagem ela não se estique para
caber dendo da caixa estipulada, fazendo uma especie de corte na
imagem



Transições

``transition-property: ;``
  Aqui escollhemos as propriedades que queremos que a transição
tenha influenci

``transition-duration: ;``
  Nessa propriedade definimos a duração da transição

``transition-delay: ;``
  Definimos qual o tempo estimulado para começar a fazer a
animação

``transition: "propriedade", "duração","delay";``
  Colocamos as 3 prorpiedades em apensas um cófigo, mas se
quiser que o efeito se aplique em apenas alguns itens selecionados
colocamos item por item separados po uma vigual

Animações

`@keyframes (nome)`
  Essa propriedades é usada para criarmos uma animação,
com o nome escolhido podemos aprlicar essa animação onde
quisermos

<!--? Formas de atribuir a animação  -->
  `animation-name: (Nome escolido);`
  `animation-duration: (Tempo de animação);`
  `animation-fill-mode: (qual informação vou deixar travada);`

  essas são as opções para colocarmos uma animação funcionar em
determinado elemento

`animation-direction:;`
  indica a forma como a animação vai fluir, se é do começo para
o fim ou do dim para o inicio

`animation-delay:;`
  serve para dizer que para começar uma tal animação deve demorar
o tempo estimado por nos.

`animation-timing-function: ;`
  Com isso podemos escolher como a animação ira fluir durante sua
execução, se no começo e rapido e o final é lento ou vice e versa

  `animation-timing-function:steps();`
    Com essa opção podemos escolherem quantos frames a animação
  ira executar

  <!--? Shorthand -->
  Colocar todas as propriedades em uma unica linha de código
    <!--* animation:(name) (duration) (fill-mode) (staps());-->


<!--! java script -->


Variaveis

<!--? scope é como se fosse uma forma de separa códigos do global e-->
<!--? modificalo de forma  individual sem afetar o resto do código-->

`Var`
  o var é uma variave que podeser mudada ao decorrer do código,
mundando suas propiedades, ela é uma variavel global, que funciona
dentos do código interio, ou seja, posso modificar essa variavel
idependene do Scope que estiver.

  Na declaração de uma variavel com Var, mesmo eu tentando acassar
a variavel, por exemplo se 0 "console.log();" foi criado antesm ele
ainda vai indicar que tal variave existec pois por de baixo dos oanos,
a variavel ela jogada para cima do código e depois é atribuida um valor

`Let`
  o Let tem as mesmas propiedades do var, com a unica diferença do
Scope, ao qual só pode ser modificado dentro do Scope em que ele
estiver, e tbm para acessae o dado só é possivel dentro do Scope.
Mas posso trazer uma variavel de fora do Scope e mudar sua propiedade
ou valor


`Const`
  Mesma propiedade do let de ser acessado e modificado dentro do scopo
a diferença é que ele não pode ser mudado, ele é uma variave constante
durante todo o código e tbmposso trazer um Const de outro scopo e
modificalo pois não será o mesmo Scope de fora.


function

`function NAME(PARAMS) {}`
  Uma funçãoela serve para colocarmos um agrupamento de códigos e ao
chamarmos em qual quer lugar durante as linhas do arquivo ele ira
todos os códigos que colocamos dentro da function
  Tambem podemos colocar um fução em uma varialvel anterior selecionando
o tipi das variavel Var,Let,Const atribuindo o nome e colocando o function ()
sendo um function expression ou anonymous(função sem expresção ou anonimo)

  podemos coloar dar elemtntos dentro da função estado fora
```javascript
                //NAME (parametros)
    const sum = function (number1, number2 ) {
    console.log(number1 + number2);
    // ao colocarmos argumentos em uma determinada chamada da função usando
   // usando o numeros abaixo basicamente por de baixo dos panos o java
   // estaria montando o código abaixo

    let number1 = 2
    let number2 = 3
    console.log(number1 + number2);

    }

    sum(2, 3) // NAME(argumentos)
```
  Sendo assim ao criar uma função podemos reutilizar ela varias vezes
atribuindo novos argumento ao chamar a função no caso
SUM(argumento 1, argumento 2)
```javascript

  const sum = function (number1, number2) {
  console.log(number1 + number2);

  }

  let number1 = 24
  let number2 = 26

  1°: console.log(`o number1 é ${number1}`); // * pedindo o nome da variável
  2°: console.log(`o number2 é ${number2}`); // * pedindo o nome da variável
  3°: console.log(`a soma é ${sum(number1, number2)}`); // * chamando a função
```

   <!--* o number1 é 24 -->
   <!--* script.js:15 o number2 é 26 -->
   <!--* script.js:7 50 -->
   <!--* script.js:16 a soma é undefined -->

  Ao chegar o terceiro console.log, o java está fazendo duas coisas
    Primeira: pegando apenas o resultado e entregando como pedimos
    Segundo: ao terminar uma função ele ira retornar alguma "return" como
  não existe essa código ele é undefined(indefinido), por isso colocamos um
  código "return NAME" para que ele retorne o valor de tal função mais o que
  quisermos, no caso do exemplo acima um texto mais o valor da soma.

  ```javascript
    const sum = function (number1, number2) {
    let total = number1 + number2
    return total
    }

    let number1 = 24
    let number2 = 26

    console.log(`a soma é ${sum(number1, number2)}`); // * chamando a função
  ```
    <!--? a soma é 50 -->
    Assim pedimos que ele junte a soma junto com o texto

``Arrow function``
  É uma maneira de escrever a função de uma forma resumida, geralmente coloca
em um Const, mas nada impede de colocar em Var ou Let

```javascript

    <!--* declaração-->
    const sayMyName = (name) => {
      console.log("gustavo")
    }
    sayMyName(name) <!--* chamado -->

    <!--* declaração-->
    const sayMyName = () => {
    console.log("Gustavo")
    }
    sayMyName()<!--* chamado -->

```

Manipulação __ProtoType__
<!--? quando atrelamos funções temos que colocar tbm valores -->
<!--? Podemos colocar mais de um item colocando ponto a cada __proto__  mas o dao pode mudar dependendo das funções que colocar-->

  É uma cadeia de funcionalidades já criadas automaticamente pelo proprio
JavaScript, __proto__, com isso os dados que formos criando durante um código
vai puxar automaticamente.
  Um exemplo seria para descobrir quantos caracteres tem em uma "string" que
se colocarmos `.length` que dara um ressultado.
  Podemos saber todas as funcionalidaes de um dado, colocando __proto__

`type conversion // type coersion`
  São as formas de eu modificar determinados dados, a diferença é que nós usuarios
usamos o CONVERSION para coverter dados, já o COERSION que usa é o proprio javascript
```javascript
  console.log('8' + 2)
  R: 82 resultado é concatezação em string.
  O JS fez um coersion no 2 para string para não acontecer bugd

  console.log(Number('8') + 2)
  R: 10 o resiltado é em numero, poir fizemos a conversão do
"8" string para 8 em numero.
```
  Podemos transfomar dados para quade todo o tipo de dado:
  Number() Podemos transformar sntring em numero
  String() podemos transformar number em string


`.toFixed()`
  Essa é uma função atrelada ao number, que escolhe quantas casa decimais quero
que aparece na minha resposta

`.replace({oq trocar},{pelo oq trocar})`
  Usado para trocar determinados caracteres por outro

```JavaScript
  <!--? dessa forma sera substituido apenas a primeira virgula
    let phrase1 = " quero,me,tornar,um,programador,"

    console.log(phrase1.replace( ",", " "));

  <!--? Para a substituição de todos os caracteres da frase-->
    let phrase1 = " quero,me,tornar,um,programador,"

    console.log(phrase1.replace(/,/g, " "));
  <!--? para a substituição de mais de um tipo caracterse -->
    console.log("");
    let phrase2 = " eu,gostaria.de,comer.macarrão,queijo"

    console.log(phrase2.replace(/,|\./g, " "));
```

`Maiuscula e Minuscula`

```JavaScript
  let word = "programar é legal,GOSTO DE VERDADE!"

  console.log(word.toUpperCase());tranforma os caracteres em Maiuscula
  console.log(word.toLowerCase());tranforma os caracteres em Minuscula

```

`.split()`
  Com essa propriedade posso separar elementos de uma frase em um Array[] que
substitua por determinado caracter que desejarmos, por exemplo poderia dividir
em Array[] trocando os espaços (" "), assim todas as palavras iriam estar em um
arrat[] separado.

`.join()`
  Serve para  juntar uma array[], e podemos passar um caracter que fara a
separação dos elementos

`.includes("")`
  Serve para verificar se tem uma palavra especifica em uma determinada frase

`new`
  Podemos criar qualquer objeto antes de um dado Number(), String(), Date(), etc


`new Array()`
  Com ele podemos criar array com dados indefinidos para podermos atribuir valores
posteriormente, umx exemplo seria para fazer uma lista com 10 itens

`Array.from()`
  Podemos tranformar uma cadeia de caracteres, e tranformalo em um array, como
uma frase em alguma variavel

*Manipulação de Array*

`.puhs()` Adiciona um item no fim do array

`.unhsift()` Adiciona um item no começo do array

`.pop()` Removo um item no fim do array

`.shift()` Remove um item no fim do array

Vizualização de elementos da Array

`slice()`
  Escolhemos as pocições q queremos vizualizar, o primeiro é onde cai começãr e
o segundo é onde vai terminar

`splice()`
  serve para remover elementos do array, o primeiro argumento é a pocisão que ira
coomeçar a remover, e o segundo argumento será quantos elementos serão removidos
apartir do primeiro argumento

`.indexOf()`
  Serve para podermos saber em qal pocisão está determoinado elemento dentrondro
de um array

**Expressões e Operadores**

Operadores Unitarios
  São operações que mexem em apenas um unico dado. Por exemplo para acender ou
apagar ua luz vc precisa apenas de um interrupitor, ou seja apena um dado
  Exemplos:

    Negativo (-): Você pode transformá-lo em algo oposto.
    Negação Lógica (!): Você pode dizer se ele é verdadeiro ou falso.
    Conversão de Tipo (+): Você pode transformá-lo em um número, se possível.
    Tipo de coisa (typeof): Você pode dizer que tipo de brinquedo é.
    Deletar coisa (delete): Você pode deletar itens dentro de um objeto

Operadores Binarios
  operadores que mexem com mais de um dado. é como se tivesse duas caixa e vc
pode escolher fazer qualquer coisa com ambas
  Exemplos
    Igualdade (==): Você pode verificar se o conteúdo de duas caixas é igual.
    Igualdade (!=): Você pode verificar se o conteúdo de duas caixas é diferente.
    Comparação (<, >, <=, >=): Você pode comparar o conteúdo de duas caixas para ver qual é maior ou menor.


Operadores Ternarios
 são operadores que vai ecolher rumos diferente dependendo se for True ou False
 um exemplo é um sensor de portão. Se tiver um carro na frente do sensor então
não ira permitir fechar o portão caso ao contrario ira deixar mexer no portão

*Operações artmeticas*
  Adição (+): Você pode combinar o conteúdo das duas caixas.
  Subtração (-): Você pode calcular a diferença entre o conteúdo das duas caixas.
  Multiplicação (*): Você pode criar várias cópias do conteúdo de uma das caixas.
  Divisão (/): Você pode dividir o conteúdo de uma caixa pelo conteúdo da outra.
  Incrementar (++): Você pode adicionar 1 a ele.
  Decrementar (--): Você pode tirar 1 dele.
  Resto da divisão(%): Vai dar o resultado do que restaria da divisão.
  Exponincial(): será um número elevado a tal numero, por exemplo 5² = 25


**Operadores**
  `group operator - agrupamento`
    ()

  `matemáticos`
    *  multiplicação
    **  exponeciação
    /  divisão
    %  resto da divisão
    +  soma
    -  subtração

  `lógicos`
    &&  E lógico
    ||  OU lógico
    !  Não lógico

  `comparação - relacional`
    >  maior
    <  menor
    >=  maior igual
    <=  menor igual
    ==  igualdade
    ===  igual no valor e do mesmo tipo (estritamente igual)
    !=  desigualdade
    !==  diferente do valor ou do tipo (estritamente diferente)

  `Atribuição`
    =  atribuição de valor
    *=  multiplicação e atribuição de valor
    /=  divisão e atribuição de valor
    +=  soma e atribui valor
    -=  diminui e atribui


 ` outros operadores/expressões`

    typeof  tipo do dado
    ++  incremento
    --  decremento
    {}  objeto vazio ou bloco de código
    []  array vazio
    ,  separa elementos de um array, objeto ou criação de multiplas variáveis

  `Precedencia de operadores`
      procedencia de operadores serve para fazer prioridade de comandos antes de
    entregar o resultado
      1° - grouping                 ()
      2° - negação e incremento     ! ++ --
      3° - multiplicação e divição  * /
      4° - adição e subtração       + -
      5° - relacional               < <= > >=c
      6° - iguldade                 == != === !=
      7° - AND                      &&
      8° - OR                       ||
      9° - condicional              ?:
      10° - Atribuições              = += _= *=a

  `Falsy and Trufy `
      Assim como o type coesion e conversion, quando usamos uma condicional de
    valores, tbm funciona para quando obrigatoriamente deveria serum valor bolean

      Falsy: é quando o valor deveria ser false, o JS faz essa tranformação para
    falso os dados abaixo
        false
        0
        -0
        "Strung vazia"
        null
        undefined
        NaN

      Trufy: é quando o valor deveria ser true, o JS faz essa tranformação para
    true os dados abaixo
        {}
        []
        number: 1
        number:56.64
        "string com conteudo"
        -1
        Infinity
        -Infinity

**Controle de fluxo ede código**

  `if/else`
    Usado para podermos criar caminhos no fluxo de código, podendo esclher em dado
  momento da aplicação qual conjunto de códigos executar.
  ```JavaScript
    if (condição) { <!--* caso a condição seja o que espero  -->
      "conjunto código"
    } else { <!--* caso a condição sejaopostado que espero  -->
      "conjunto código"
    }

  ```

  `Throw e Try/Catch`
    è usado para tentarmos um código e caso não funcione nos dá um resultado, a
  forma de interpetrar é como se fosse um jogo de basibol, ordenamos ao um dos
  jogadores laçar a bola com o Tty, ao lançar a bola com será lançado um resultado
  que será o Throw, ao geralmente está associado com em uma função, e o Catch será
  aquele que ira pegar a bola, ao será o resultado.

**Estrutura de Repetição**

  `FOR`
  for(inicialização; condição; incremento)
    Inicialização: colocamos a inicialização dentro de uma variavel
    Condição: indicamos ate quando será efetuado um loop, por Ex: até completar 10
    Incrementação: ++, --, +=,-=
  ```JavaScript
    for(var i= 0; i <= 10; i++) {
      console.log(i)
    <!--? ira fazer uma sequencia de soma até 0 número 5
    }
  ```
    O código acima começa declarando a variavel 'i' com o valor de 0, a condição
  de verificação é se 'i' é menor ou igual a 10 se for, então ele ira entrar com
  o incremetno té que no caso seria fazer uma soma de + 1, e se repetirar até
  i for igual a 10.

  tbm existe dois comandos que podemos usar, Break e Continue;
    Break: ao chegar em determinado valor que estabelecermos ele ira parar de
  executar o código, por exemplo se estabelecermos no código acima com if, que se
  i === 4, então ira parar de executar o comando.
    Contuner: quase a mesma coisa do break mas a diferença que iria pular o numero
  4 e continuaria a executar o comando até chegar em 10.

  `While`
    Funciona apenas dando a condição, mas é extremamente recomendado criar uma
  inicialização antes, pois sem uma inicialização e alguma forma de fazer com que
  o código atualize, ele ira ficar rodando o código infiitamente, assim travando
  a aplicação.
  ```JavaScript
    let i = 0
    wilhe(i <=10) {
      console.log(i);

      i++
    }
  ```

  `For...of`
    Como strings são cadeias de caracteres, esse loop ele vai pegar cada caracter
  e ira implementar e uma ke" ira pegar cavariave, como eu erscrever "Mida letra
  durante o loop e implementara em uma variavel para cada letra do nome, caso
  seja um Array fara a mesma coisa mas para a para cada palavra presente

  `For...in`
    tem a mesma fonção da propriedade anterior a diferença é que é usada em um
  objeto, e tbm com formas de entrarmos dentro dos valores
  ```JavaScript
    let person = {
    name: 'John',
    age:21,
    weight: 88.5
    }

    for(let property in person) {
      console.log(property); <!--? transformas os dados em variaver  -->
      console.log(person[property]);<!--? mostra o valores dos dados -->
    }

  ```

  **Math**
    `random()` Gera um numero aleatorio
    `ceil()` Arendonda o numero para Cima
    `floor()` Aredenda o numero para para baixo
    `round()` Arredonda tanto para cima quanto para baixo, dividino o numero entre meio
