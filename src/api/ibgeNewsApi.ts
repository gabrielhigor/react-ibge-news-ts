const URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';

export async function fetchIBGENews() {
  const response = await fetch(URL);
  const data = await response.json();
  return data.items;
}
