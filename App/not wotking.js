var request = require("request");
var fileManager = require('./fileManager.js')

// ============ Default
let kLocalization = ["ar", "ca", "cs", "de", "el", "es", "fi", "fr", "he", "hr",
  "it", "ja", "ko", "ms", "no", "pt", "ru", "sv"]

let words = [
  "Inflate", "Deflate", "Paintings", "Apply"
];


let initialKey = 170


// ======================


translate = async () => {
  let finaldata = []
  kLocalization.map(e => {
    var options = {
      method: "GET",
      url: `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${e}&dt=t&q=${words.join()}`,
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

      let tempD = arr.map(e => {
        initialKey += 1
        return (`"${initialKey}" : "${e}"\n`)
      })
      finaldata.push(`\n//================== ${e} \n`)
      finaldata.push(tempD)

      if (kLocalization[kLocalization.indexOf(e)] == e) {
        new fileManager().createFile(finaldata, e => {
          console.log('zaibisi');
        })
      }

    });

  })

};

translate();
