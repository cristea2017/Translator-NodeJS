var request = require("request");
var fileManager = require('./fileManager.js')

translate = () => {
  let words = [
    "COMMUNITY",
    "Stickers",
    "Effect",
    "SAVE OPTIONS",
    "Save",
    "Publish as Combo",
    "Applied Filters",
    "Guest",
    "Top",
    "Tranding",
    "Recent",
    "Share",
    "Favorites",
    "Options",
  ];

  // console.log(words.join());

  var options = {
    method: "GET",
    url: `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&q=${words.join()}`,
    headers: {
      Accept: " application/json;charset=utf-8",
      "Accept-Language": " en-US,en;q=0.5",
      "Content-Type": " application/json",
    },
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    // console.log(response.body);
    let js = JSON.parse(response.body)
    let arr = (js[0][0][0]).split(',')
    console.log(arr);

    let finaldata = arr.map(e => {
      return (`"${words[arr.indexOf(e)]}" : "${e}"`)
    })

    new fileManager().createFile(finaldata, e => {
      console.log('zaibisi');
    })


  });

};

translate();
