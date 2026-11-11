# Template Full Stack PHP

Template inicial para organizar projetos web simples com **PHP no
backend** e **HTML, CSS e JavaScript no frontend**. A estrutura separa
responsabilidades e pode ser adaptada conforme as necessidades de cada
projeto.

> Este repositório fornece a estrutura de pastas. Ele não inclui uma
> aplicação pronta, dependências instaladas, testes configurados ou
> workflows de automação implementados.

## Estrutura do projeto

``` text
.
├── .github/
│   └── workflows/
├── backend/
│   ├── bootstrap/
│   ├── controller/
│   ├── domain/
│   ├── repository/
│   ├── routes/
│   └── services/
├── docs/
├── frontend/
│   ├── css/
│   └── js/
├── tests/
├── .gitignore
└── README.md
```

## Responsabilidade das pastas

### `backend/`

Contém o código PHP do servidor.

-   **`bootstrap/`** --- inicialização da aplicação, carregamento de
    configurações e preparação dos componentes necessários.
-   **`controller/`** --- recebe as requisições, coordena a chamada aos
    serviços e prepara as respostas HTTP.
-   **`domain/`** --- reúne entidades e regras centrais do domínio.
-   **`repository/`** --- concentra o acesso e a persistência de dados,
    como consultas ao banco de dados.
-   **`routes/`** --- define as rotas e associa endpoints aos
    controllers.
-   **`services/`** --- concentra regras de negócio e operações que
    coordenam outras partes do sistema.

### `frontend/`

Contém os arquivos da interface web.

-   **`css/`** --- estilos visuais.
-   **`js/`** --- comportamento e interações no navegador.

### `docs/`

Documentação técnica do projeto. Pode incluir diagramas, decisões de
arquitetura, instruções de execução e, se houver uma API, sua
especificação OpenAPI e instruções para visualizar a documentação com
Swagger UI.

### `tests/`

Local destinado aos testes automatizados, como testes unitários e de
integração. O framework de testes e sua configuração devem ser
adicionados conforme a necessidade do projeto.

### `.github/workflows/`

Local para arquivos de workflow do GitHub Actions. Eles podem
automatizar tarefas como executar testes e verificações de qualidade a
cada push ou pull request. A pasta, sozinha, não ativa nenhuma
automação: é necessário adicionar um arquivo de workflow válido.

## Como usar o template

1.  Use o botão **Use this template** no GitHub para criar um novo
    repositório a partir dele, ou clone o repositório e adapte-o.
2.  Renomeie ou remova pastas conforme a necessidade da aplicação.
3.  Defina as dependências PHP e o autoload no `composer.json` quando o
    projeto precisar deles.
4.  Configure as variáveis de ambiente e mantenha credenciais e segredos
    fora do Git.
5.  Adicione os testes, a documentação da API e os workflows apenas
    quando forem necessários.

## Observações

-   O Git não versiona pastas vazias. Arquivos `.gitkeep` são usados
    aqui apenas como marcadores para manter a estrutura inicial no
    repositório.
-   O nome `.gitkeep` é uma convenção, não um recurso especial do Git.
-   O `.gitignore` evita versionar arquivos locais, dependências,
    segredos e artefatos gerados. Revise as regras se o projeto adotar
    outras ferramentas.
