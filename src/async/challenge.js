const fetchData = require('../utils/fetchData');
const URL_API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
  const data = await fetchData(url_api);
  const character = await fetchData(`${url_api}${data.results[0].id}`);
  const origin = await fetchData(character.origin.url);

  console.log(data.info.count);
  console.log(character.name);
  console.log(origin.dimension);
};

console.log('Before');
anotherFunction(URL_API);
console.log('After');
