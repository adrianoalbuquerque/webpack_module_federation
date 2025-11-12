# ⚙️ Webpack Module Federation – Micro Frontends

Aplicação demonstrativa que utiliza **Webpack Module Federation** para integração de múltiplos micro frontends de forma independente, com deploy automatizado e hospedagem na AWS S3.

🔗 **Acesse o projeto online:**  
👉 [http://app-webpack.s3-website-sa-east-1.amazonaws.com/](http://app-webpack.s3-website-sa-east-1.amazonaws.com/)

---

## 🧩 Visão Geral

Este projeto explora a arquitetura de **Micro Frontends** usando **Webpack 5** e o recurso de **Module Federation**.  
Cada módulo (ou aplicação) pode ser desenvolvido, testado e implantado de forma independente, mas todos se integram dinamicamente em tempo de execução.

A ideia principal é permitir que times diferentes trabalhem em partes distintas da aplicação sem gerar dependências diretas entre elas.

---

## 🚀 Tecnologias Utilizadas

- **Webpack 5** – Bundler principal com suporte a Module Federation  
- **JavaScript (ES6+)**  
- **HTML5 / CSS3**  
- **Node.js** e **npm**  
- **AWS S3** – Hospedagem do build final  

---

## 🏗️ Estrutura do Projeto
```bash
webpack_module_federation/
│
├── packages/
│ ├── host/ # Aplicação principal que consome os módulos remotos
│ ├── remote1/ # Primeiro módulo remoto federado
│ └── remote2/ # Segundo módulo remoto federado
│
├── package.json
├── webpack.config.js
└── README.md
```

---

## 🧰 Como Executar Localmente

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/adrianoalbuquerque/webpack_module_federation.git
cd webpack_module_federation
```

### 2️⃣ Instalar dependências
```bash
npm install
```
### 3️⃣ Iniciar o projeto
Cada micro frontend deve ser iniciado separadamente:
```bash
cd packages/host
npm run start
```

E o mesmo para os remotes:
```bash
cd ../remote1
npm run start
```
```bash
cd ../remote2
npm run start
```

### 🧠 Conceitos-Chave

- Host Application: aplicação que consome módulos remotos.
- Remote Applications: aplicações independentes que expõem seus componentes via ModuleFederationPlugin.
- Runtime Integration: os módulos são carregados dinamicamente em tempo de execução, sem necessidade de rebuild.

### 🌐 Deploy

O deploy do projeto está configurado para AWS S3, permitindo acesso público via link:
👉 http://app-webpack.s3-website-sa-east-1.amazonaws.com/

### 👨‍💻 Autor

Adriano Teixeira de Albuquerque
Desenvolvedor Frontend | Foco em arquitetura de aplicações web modernas

🔗 GitHub

### 🧾 Licença

Este projeto é distribuído sob a licença MIT.
Sinta-se à vontade para usar, modificar e compartilhar.
