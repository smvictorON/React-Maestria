```- Vite```
é a nova forma de inicializar um projeto com react, como era com o npx create-react-app nomedoapp.

```- Emmet```
é uma extensão nativa do VSCode que ajuda a escrever HTML mais rapido.

```- Components```
costumam ficar em uma pasta chamada components e geralmente são nomeados com camel case: FirstComponents.js

```- Imagens ```
- quando a imagem está na pasta public eu consigo acessar ela usando somente a / ex: /suaimagem.png
- quando a imagem está na pasta assets dentro src eu consigo importar ela como um compoment no dentro
do src da tag image consigo usar ela ex: <img src={Imagem}/>

```- Listas ```
não é recomendado o index do map como key dos objectos da lista, pois podemos ter varias lista e aí a key
vai se repetir, ou até se excluirmos um item da lista, o index vai se alterar

```- Props ```
quando voce precisa passar props, é uma boa pratica desestruturar as props em variavés para ficar explicito

```- Fragment ```
fragment deve ser usado para nao quebrar a estrutura dos nossos components pois nao são renderizados no html

```- Children ```
é a forma que voce pode enviar uma tags html ou um component para um filho, voce passa ele dentro da tag de
abertura e fechamento do elemento pai, e receber ele como children no componente filho

```- State Lift ```
usado para passar um state de um componente filho para o pai e posteriomente para outro filho

```- CSS ```
- no react o css global geralmente fica no arquivo index.css que fica na raiz do src
- no react o css do componente geralmente tem o mesmo nome .css, dessa forma o estilo pode vazar para outros components
- no react o css do component é recomendado usar o nome do componente .module.css para nao vazar os estilos ele faz isso
adicionando um hash na classe do componente para fica unico

```- <Link> ```
a diferença do <Link/> para o <a></a> é que o link faz o redirecionamento sem recarregar a pagina, só trocando os componenents
