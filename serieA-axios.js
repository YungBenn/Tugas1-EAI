const axios = require('axios');
const prompt = require('prompt-sync')({ sigint: true });

const options = {
  method: 'GET',
  url: 'https://serie-a-standings.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '883443cac9mshefaf525d2223f08p17b70djsnb5117a1945b2',
    'X-RapidAPI-Host': 'serie-a-standings.p.rapidapi.com',
  },
};

function menu() {
  console.log('\x1b[33m%s\x1b[0m', '----------------------------------------------------------');
  console.log('\x1b[33m%s\x1b[0m', 'Serie A Standings\n');
  console.log('\x1b[33m%s\x1b[0m', '1. Top 20 Serie A standings');
  console.log('\x1b[33m%s\x1b[0m', '2. Serie A clubs that qualified to UCL');
  console.log('\x1b[33m%s\x1b[0m', '3. Serie A clubs that is likely to be relegated');
  console.log('\x1b[33m%s\x1b[0m', '4. Exit');
  console.log('\x1b[33m%s\x1b[0m', '----------------------------------------------------------\n');
}

axios
  .request(options)
  .then(function (res) {
    while (true) {
      menu()
      var chooseMenu = prompt('Choose menu: ');
      if (chooseMenu == 1) {
        console.log('\x1b[32m%s\x1b[0m', 'Ranking\t\tSerie A');
        for (let n = 0; n < 20; n++) {
          console.log(`${res.data[n].stats.rank}\t\t${res.data[n].team.name}`);
        }
        console.log(' ');
        continue;
      } else if (chooseMenu == 2) {
        console.log('\x1b[32m%s\x1b[0m', 'Ranking\t\tSerie A');
        for (let n = 0; n < 4; n++) {
          console.log(`${res.data[n].stats.rank}\t\t${res.data[n].team.name}`);
        }
        console.log(' ');
        continue;
      } else if (chooseMenu == 3) {
        console.log('\x1b[32m%s\x1b[0m', 'Ranking\t\tSerie A');
        for (let n = 17; n < 20; n++) {
          console.log(`${res.data[n].stats.rank}\t\t${res.data[n].team.name}`);
        }
        console.log(' ');
        continue;
      } else if (chooseMenu == 4) {
        break;
      } else {
        console.log('Menu tidak tersedia');
      }
    }
  })
  .catch(function (error) {
    console.error(error);
  });
