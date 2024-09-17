Autores: Felipe & Pedro Rodrigues

# NoSQL

OQUE É?

O projeto consiste em um banco de dados capaz de armazenar os produtos de uma loja online, de forma a facilitar o gerenciamento do estoque.

FUNCIONALIDADES

Adicionar novos produtos: 
  O sistema deve permitir a entrada de novos produtos no catálogo, de forma a aumentar aos opções da loja.
  Caso o item já exista deve retornar as caracteristicas do mesmo
  Caso mais duas requisições de entrada sejam feitas, deve aceitar a que executar primeiro e cancelar a segunda.

Adicionar quantidade nos produtos: 
  O sistema ddeve permitir a adição de mais quantidades de produtos já previamente adicionados, caso produto não exista no sistema, deve ser adicionado ao catálogo
  Caso mais duas requisições de entrada sejam feitas no mesmo produto, aceitar ambas.

Verificar disponibilidade:
  O sistema  deve realizar a busca do item solicitado
    -Em caso positivo, apresentar os dados do item e a quantidade disponível
    -Em caso negativo, perguntar se deseja adicionar o item
        *Em caso positivo, redirecionar para a primeira funcionalidade "Adicionar novos produtos"
        *Em caso negativo, voltar para tela inicial

Registar a retirada de um item no estoque
  O sistema deve realizar a atualização da quantidade disponível de determinada mercadoria quando houver uma retirada, em caso de tentar retirar mais que o disponível em estoque deve apresentar uma mensagem de erro com a quantidade disponível e se deseja progredir com apenas o disponível em estoque.
  Caso mais duas requisições de saída sejam feitas, deve aceitar a que executar primeiro e cancelar a segunda

ESTRATÉGIA

Modelo de Documentos

  Flexibilidade de Esquema: Permite armazenar dados variados e mudar a estrutura facilmente.
  
  Escalabilidade Horizontal: Cresce facilmente com o aumento de dados e acessos.
  
  Consultas Rápidas: Realiza consultas de forma eficiente mesmo com grandes volumes de dados.
  
  Modelo de Dados Natural: Armazena informações hierárquicas e complexas de forma intuitiva.
  
  Facilidade de Desenvolvimento: Facilita a adição de novos campos e ajustes no esquema.
  
  Alta Disponibilidade: Melhora a resiliência e a acessibilidade dos dados.

Banco Utilizado: MONGODB

  Modelo de Dados Flexível: Permite estrutura de dados complexos e adaptáveis.
  
  Escalabilidade Horizontal: Suporta distribuição de dados entre vários servidores.
  
  Alta Performance: Operações rápidas de leitura e escrita.
  
  Índices Poderosos: Melhora a eficiência das consultas.
  
  Alta Disponibilidade: Replicação automática garante continuidade em caso de falhas.
  
  Consultas Ad Hoc: Flexibilidade em consultas e agregações complexas.
  
  Facilidade de Desenvolvimento: Integra bem com diversas linguagens e frameworks.
  
  Suporte a Dados Geoespaciais: Funcionalidades para dados de localização.
  
  Escalabilidade de Armazenamento e Computação: Expansão independente de armazenamento e capacidade de computação.
  
  Comunidade e Ecosistema: Ampla comunidade e muitas ferramentas adicionais.
