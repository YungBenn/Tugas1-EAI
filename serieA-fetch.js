const prompt = require('prompt-sync')({ sigint: true });

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '883443cac9mshefaf525d2223f08p17b70djsnb5117a1945b2',
    'X-RapidAPI-Host': 'serie-a-standings.p.rapidapi.com',
  },
};

const yellow = '\x1b[33m%s\x1b[0m';
const cyan = '\x1b[32m%s\x1b[0m';

function menu() {
  console.log(yellow, '----------------------------------------------------------');
  console.log(yellow, 'Serie A Standings\n');
  console.log(yellow, '1. Top 20 Serie A standings');
  console.log(yellow, '2. Serie A clubs that qualified to UCL');
  console.log(yellow, '3. Serie A clubs that is likely to be relegated');
  console.log(yellow, '4. Exit');
  console.log(yellow, '----------------------------------------------------------\n');
}

fetch('https://serie-a-standings.p.rapidapi.com/', options)
  .then((res) => res.json())
  .then((res) => {
    while (true) {
      menu();
      var chooseMenu = prompt('Choose menu: ');
      if (chooseMenu == 1) {
        console.log(cyan, 'Ranking\t\tSerie A');
        for (let n = 0; n < 20; n++) {
          console.log(`${res[n].stats.rank}\t\t${res[n].team.name}`);
        }
        console.log(' ');
        continue;
      } else if (chooseMenu == 2) {
        console.log(cyan, 'Ranking\t\tSerie A');
        for (let n = 0; n < 4; n++) {
          console.log(`${res[n].stats.rank}\t\t${res[n].team.name}`);
        }
        console.log(' ');
        continue;
      } else if (chooseMenu == 3) {
        console.log(cyan, 'Ranking\t\tSerie A');
        for (let n = 17; n < 20; n++) {
          console.log(`${res[n].stats.rank}\t\t${res[n].team.name}`);
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
  .catch((err) => console.error(err));
