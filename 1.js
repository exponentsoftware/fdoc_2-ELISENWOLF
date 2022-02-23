const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

let array = [];

const createArrayOfArrays = (countries) => {
    countries.map((item) => {
        const lowecase = item.toLowerCase();
        const start = item.split('').slice(0,3).join('');
        const count = item.length;

        return array.push([lowecase+","+" "+start+","+" "+count]);
    });
}

createArrayOfArrays(countries);

console.log(array);