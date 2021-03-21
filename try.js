var fs = require('fs');

const writeToFile = (fileName) => (data) => {
  fs.writeFile(fileName, JSON.stringify(data), 'utf8', function(err) {
      if (err) throw err;
      console.log('complete');
    }
  );
}


var gplay = require('google-play-scraper');

var data = gplay.list({
    category: gplay.category.FINANCE,
    collection: gplay.collection.TRENDING,
    num: 120,
    fullDetail: true,
    lang: 'en',
    country: 'us'
  }).then(writeToFile('test.json'), console.error);
