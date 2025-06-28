import axios from 'axios';

export async function getSites() {
  return axios.get('https://api.mercadolibre.com/sites/MLA');
}

export async function getCurrencies() {
  return axios.get('https://api.mercadolibre.com/currencies');
}

export async function getCountries() {
  return axios.get('https://api.mercadolibre.com/countries');
}