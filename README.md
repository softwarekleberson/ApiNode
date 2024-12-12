# API REST em TypeScript

Bem-vindo ao repositório da **API REST** desenvolvida em **TypeScript**. Este projeto foi criado para fornecer uma solução segura e robusta para gerenciar usuários com diferentes permissões e garantir a integridade e segurança das informações. A API inclui recursos de **criptografia de senha**, **autenticação**, **tratamento de erros**, **validações**, e **diferentes níveis de acesso para usuários**.

## Funcionalidades

A API oferece os seguintes recursos principais:

- **Criptografia de Senha**: As senhas dos usuários são armazenadas de forma criptografada no banco de dados, garantindo a segurança das informações.

- **Autenticação**: Utiliza **tokens JWT** (JSON Web Tokens) para autenticação de usuários, proporcionando uma forma segura e eficiente de verificar a identidade dos mesmos.

- **Tratamento de Erros**: A API detecta e trata erros de forma adequada, oferecendo mensagens claras e detalhadas para facilitar a resolução de problemas.

- **Validações**: Todos os dados recebidos pela API são validados, garantindo a integridade das informações e evitando falhas de segurança.

## Vantagens

- **Tipagem Estática**: A API é escrita em **TypeScript**, o que significa que você pode aproveitar a tipagem estática para evitar erros de compilação e garantir a qualidade do código.

- **Segurança**: Com a criptografia de senhas e a autenticação via JWT, a API oferece uma camada adicional de segurança para proteger os dados dos usuários.

- **Facilidade de Uso**: A estrutura do código é simples de entender e estender, permitindo que você implemente novos recursos com facilidade.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem de programação com tipagem estática para garantir um código de alta qualidade.
- **JWT (JSON Web Tokens)**: Usado para autenticação segura.
- **bcryptjs**: Biblioteca para criptografia de senhas.
- **Express**: Framework para criação de APIs em Node.js.
