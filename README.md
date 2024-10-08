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

  Modelo Json que será usado no MongoDB
  
  {
  "Clientes": [
    {
      "customer_id": "C001",
      "name": "João Silva",
      "email": "joao.silva@example.com",
      "address": "Rua A, 123, São Paulo",
      "cart": {
        "cart_id": "CART001",
        "items": [
          {
            "product_id": "P001",
            "quantity": 2,
            "price": 50.0
          },
          {
            "product_id": "P002",
            "quantity": 1,
            "price": 30.0
          }
        ]
      },
      "orders": [
        {
          "order_id": "O001",
          "order_date": "2024-09-18",
          "total_amount": 130.0,
          "items": [
            {
              "product_id": "P001",
              "quantity": 2,
              "price": 50.0
            },
            {
              "product_id": "P002",
              "quantity": 1,
              "price": 30.0
            }
          ],
          "status": "Concluído"
        }
      ]
    }
  ],
  "Produtos": [
    {
      "product_id": "P001",
      "name": "Produto A",
      "description": "Descrição do Produto A",
      "price": 50.0,
      "category": {
        "category_id": "CAT001",
        "name": "Categoria A",
        "description": "Descrição da Categoria A"
      },
      "stock": 100,
      "specifications": {
        "cor": "Vermelho",
        "tamanho": "M"
      }
    },
    {
      "product_id": "P002",
      "name": "Produto B",
      "description": "Descrição do Produto B",
      "price": 30.0,
      "category": {
        "category_id": "CAT002",
        "name": "Categoria B",
        "description": "Descrição da Categoria B"
      },
      "stock": 50,
      "specifications": {
        "cor": "Azul",
        "tamanho": "G"
      }
    }
  ],
  "Categorias": [
    {
      "category_id": "CAT001",
      "name": "Categoria A",
      "description": "Descrição da Categoria A"
    },
    {
      "category_id": "CAT002",
      "name": "Categoria B",
      "description": "Descrição da Categoria B"
    }
  ],
  "Administradores": [
    {
      "admin_id": "A001",
      "name": "Maria Oliveira",
      "email": "maria.oliveira@example.com"
    }
  ]
}

image: ![UML_ProjetoNoSQL](https://github.com/user-attachments/assets/0e00be8e-7c28-4d51-be72-cc515280f865)

Index utilizados no projeto:
![WhatsApp Image 2024-09-26 at 17 01 18](https://github.com/user-attachments/assets/c3228b7c-916f-4297-8254-24807b772ced)

![WhatsApp Image 2024-09-26 at 17 01 02](https://github.com/user-attachments/assets/95f3e666-e4b8-4372-a657-ed36a64d7347)

![image](https://github.com/user-attachments/assets/673249e0-4226-499c-bc25-3f54570f2afa)
![image](https://github.com/user-attachments/assets/347511ce-2d7b-4ee3-8c6d-733dbc4943bc)
![image](https://github.com/user-attachments/assets/a13a9589-31ff-4df9-8850-79a510a4ccdc)
![image](https://github.com/user-attachments/assets/c1c03fc1-b663-4501-9b2a-f6ecba37658a)







