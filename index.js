const fetch = require("node-fetch");
const cheerio = require("cheerio");
const fs = require("fs");

const saveData = (stocks, fileName) =>
  fs.writeFile(fileName, JSON.stringify(stocks), (error) => {
    if (error) return console.log(error);
    return console.log("Stocks data are saved");
  });

const generateStocksJson = async () => {
  const url = "https://www.dadosdemercado.com.br/acoes";
  const response = await fetch(url);
  const body = await response.text();
  const $ = cheerio.load(body);

  const stocks = [];

  $(".table-container > table > tbody > tr").map((_, row) => {
    const ticker = $(row).find("td:nth-child(1)").text();
    const nome = $(row).find("td:nth-child(2)").text();
    const cotacao = $(row).find("td:nth-child(3)").text();

    stocks.push({
      codAtivo: stocks.length + 1,
      ticker,
      nome,
      cotacao: Number(cotacao.split("R$ ")[1].replace(/,/g, ".")),
      moeda: "BRL",
    });

    return stocks;
  });

  saveData(stocks, './stocksData.json');

  const dbData = stocks.map((stock) => ({
    codAtivo: stock.codAtivo,
    ticker: stock.ticker,
    qtdeAtivo: Math.floor(Math.random() * (10000 - 5000)) + 5000,
  }));

  saveData(dbData, './db.data.json');
};

generateStocksJson();

module.exports = generateStocksJson;
