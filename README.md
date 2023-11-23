# Teste
Esse código é uma implementação de um sistema de manipulação de elementos HTML que permite adicionar, remover e interagir com textos em uma estrutura dinâmica. Logo abaixo tem uma breve explicação sobre as funcionabilidades da página:

Estrutura HTML
Há uma estrutura HTML que contém elementos com IDs dp2, a2, b4, b3, b2, b1, li, e ttx.
Utilizando JavaScript, são selecionados elementos do DOM por meio de seus IDs para manipulação posterior.
Funcionalidades Implementadas:
Adição de Textos:

A função adiciona(txt) cria novos elementos div com classes e IDs específicos para cada texto fornecido no array textos.
Os elementos criados são inseridos no elemento com o ID dp2, permitindo a exibição dos textos na página.
Seleção de Texto:

A função inpselec() identifica o elemento selecionado com a classe "dest".
Ao clicar em um texto, ele é destacado (adicionando a classe "dest").
O botão botselctxt verifica se um texto está selecionado. Se sim, exibe um alerta com o conteúdo do texto selecionado.
Remoção de Texto:

O botão botremotxt remove o texto selecionado.
Caso nenhum texto esteja selecionado, um alerta é exibido solicitando a seleção de um texto para remoção.
Adição de Novo Texto Antes do Selecionado:

O botão botaddtxtat adiciona um novo texto antes do texto selecionado.
Verifica se há um texto no campo de entrada ttx. Se estiver vazio, exibe um alerta.
Adição de Novo Texto Depois do Selecionado:

O botão botaddtxtdp adiciona um novo texto depois do texto selecionado.
Verifica se há um texto no campo de entrada ttx. Se estiver vazio, exibe um alerta.
Fluxo Geral:
O código cria dinamicamente elementos de texto dentro de um contêiner dp2.
Possibilita a seleção, remoção e adição de novos textos antes ou depois do texto selecionado na estrutura, interagindo com eventos de clique nos botões especificados.
Esta estrutura permite a criação dinâmica e manipulação de elementos de texto em uma página web, proporcionando uma experiência interativa para o usuário.

Resumindo esse código cria uma forma de lidar com textos numa página web, onde você pode adicionar, remover e brincar com eles. Vamos lá:

O que está rolando na página:
Adição de Textos:

Você pode inserir textos na tela. O código cria caixinhas de texto com os textos pré-definidos na lista textos e as coloca na área identificada como dp2.
Seleção de Texto:

Ao clicar em qualquer texto, ele fica destacado (ganha um efeito visual).
O botão "Selecionar Texto" (botselctxt) mostra um aviso com o texto que foi selecionado, se houver algum selecionado.
Remoção de Texto:

Com o botão "Remover Texto" (botremotxt), você pode deletar o texto selecionado. Se nada estiver selecionado, o sistema pede para você escolher um antes de apagar.
Adição de Novo Texto:

Tem dois jeitos de adicionar um novo texto:
"Adicionar Texto Acima" (botaddtxtat) insere um novo texto antes do texto selecionado.
"Adicionar Texto Abaixo" (botaddtxtdp) insere um novo texto depois do texto selecionado.
Como tudo funciona:
Os textos são criados e mostrados dinamicamente na área dp2.
Ao clicar nos botões ou nos textos, o código executa ações como adicionar, remover ou interagir com os textos baseado no que você escolheu.
Resumindo, é uma forma interativa de brincar com textos numa página da web, onde você pode adicioná-los, tirá-los e mover uns antes dos outros ou vice-versa. Divirta-se!