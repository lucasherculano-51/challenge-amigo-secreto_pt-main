# Sorteio de Amigo Secreto

Este projeto foi desenvolvido como parte de um desafio do curso da Oracle, distribuído pela Alura. O objetivo é criar uma página web que permita aos usuários realizar um sorteio para o amigo secreto com base em uma lista de participantes fornecida por eles.

## Tecnologias Utilizadas

- **HTML**: Para estruturação da página.
- **CSS**: Para estilização da página.
- **JavaScript**: Para lógica e interação com o usuário.

## Como Funciona

1. O usuário digita os nomes dos participantes em uma lista no campo fornecido.
2. A lista de participantes é exibida na tela.
3. O usuário clica no botão **Sortear**, e um nome aleatório é sorteado.
4. O nome sorteado aparece em **verde** na tela, para indicar o vencedor do sorteio.

## Funcionalidades

- **Entrada de dados**: O usuário pode inserir os nomes dos participantes em um campo de texto.
- **Exibição de lista**: Os nomes dos participantes são exibidos na tela.
- **Sorteio aleatório**: O botão "Sortear" sorteia um nome aleatório da lista.
- **Feedback visual**: O nome sorteado é destacado em verde, para facilitar a identificação.

## Como Usar

1. Acesse a página do projeto em seu navegador.
2. Insira os nomes dos participantes na caixa de texto fornecida, separando-os por vírgula.
3. Clique no botão **Sortear** para realizar o sorteio.
4. O nome sorteado aparecerá em destaque em verde.

## Como o Código Funciona

- **Função**: Utilizamos uma função para capturar os dados inseridos pelo usuário e para realizar o sorteio.
- **Laço `for`**: Iteramos sobre a lista de participantes para exibi-la na tela.
- **Condicional `if/else`**: Para verificar se a lista de participantes foi preenchida corretamente e se o sorteio foi realizado com sucesso.
- **Math.random()**: Usado para gerar um número aleatório que seleciona o nome do vencedor.
- **Manipulação do DOM**: Usamos `document.getElementById` e `.innerHTML` para alterar dinamicamente o conteúdo da página, mostrando a lista de participantes e o nome sorteado.

## Autor

- Lucas Matheus Herculano Rodrigues
