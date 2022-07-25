🔸 A aplicação tem o objetivo de extrair dados da web sobre o mercado de ações, gerando dois arquivo json de forma automática.
##
## Rodando localmente
👉🏻 **Certifique de ter o Node instalado em sua máquina. Na aplicação, a versão `16.15.1` foi utilizada.**
1. Clone o repositório
  * `git clone git@github.com:isabeladearo/web-scraping-assets.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd web-scraping-assets`
2. Instale as dependências
  * `npm install`
3. Rode a aplicação
  * `node index.js`
4. Verifique os arquivos `stocksData.json` e `db.data.json`. Ambos retornam um array contendo todos os dados coletados do momento em que a aplicação foi rodada:
```
[
  {
    "codAtivo": 1,
    "ticker": "MGLU3",
    "nome": "Magazine Luiza",
    "cotacao": 3.01,
    "moeda": "BRL"
  }
]
```
```
[
  { "codAtivo": 1, "ticker": "MGLU3", "qtdeAtivo": 7498 }
]
```
##
## Tecnologias e bibliotecas utilizadas
  - Javascript
  - Nodejs
  - Cheerio
  - Node Fetch

