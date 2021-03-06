const translate = require('@vitalets/google-translate-api'); //const translate = require("@vitalets/google-translate-api");
const fs = require("fs");
const f = require('./FileManager')

// if you run nodemon from npm scrips | code will loop because of fs.write to file || in app dir was maded changes
console.log('===============Initialized');

// ================= Default

let kLocalization = ["ar", "ca", "cs", "de", "el", "es", "fi", "fr", "iw", "hr",
  "it", "ja", "ko", "ms", "no", "pt", "ru", "sv", "tr", "vi", "zh-CN", "zh-TW"] // he = iw = ebraic // k3 api languages require iw for ebraic
let array = []
let keysArr = []
let finaldata = []
let langIndex = 0
let toLang = kLocalization[langIndex]
let tempTranslated = []

// =================

mainFunc = () => {
  let d = new f().readFile()
  let k = new f().readFileKeys()
  console.log('d > ', d);
  array = d
  keysArr = k
  waitAndDo(d.length - 1, d)
}

function waitAndDo(times, arr) {

  if (times < 0) {
    return;
  }
  setTimeout(function () {
    // Do something here
    console.log('Doing a request', array[times].toLowerCase());
    translate(array[times].toLowerCase(), { to: toLang })
      .then((res) => {
        console.log('Translated >>>', res.text);
        tempTranslated.push(`"${keysArr[times]}" : "${res.text}"`)

        if (times == 0) {
          finaldata.push(`\n//================== ${toLang} \n`)
          finaldata.push(tempTranslated)

          tempTranslated = []

          if (langIndex == kLocalization.length - 1) {
            writeToFile(finaldata)
          } else {
            langIndex += 1
            toLang = kLocalization[langIndex]
            waitAndDo(array.length - 1);
          }
        } else {
          waitAndDo(times - 1)
        }
        // console.log(res.from.language.iso);
        //=> nl
      })
      .catch((err) => {
        console.error(err);
      });
  }, 2000);
}


writeToFile = (finaldata) => {
  console.log('======== LAST TRANSLATION LANG =========')
  console.log(finaldata);
  const string = `{
         ${finaldata}
        }`
  fs.writeFileSync("./translations.json", string, "utf8");
}


// =======MAIN
mainFunc()

