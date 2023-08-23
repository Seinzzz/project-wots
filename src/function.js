import * as fs from 'node:fs';
import dataId from './quotes/id_quotes.json' assert { type: 'json' };
import dataEn from './quotes/en_quotes.json' assert { type: 'json' };
import { error } from 'node:console';

function getDataFromJson(lang) {
  // const filePath = ;
  if (lang === 'id') {
    const parsedData = dataId;
    return parsedData
  }else if(lang === 'en'){
    const parsedData = dataEn;
    return parsedData
  }
}

function getRandomId(input) {

  var max = getDataFromJson(input).quotes.length;

  // console.log(max);
  return Math.round(Math.random() * max);
}

function getQuotes(q) {
  const quotesData = getDataFromJson(q).quotes;
  const randomId = getRandomId(q)
  const quote = quotesData[randomId];
  return quote; //return one object include text quote, source, id, and length text
}
// console.log(getQuotes('id'));
// getQuotes('id');
export { getDataFromJson, getQuotes, getRandomId };
