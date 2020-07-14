const translate = require("@vitalets/google-translate-api");
const fs = require("fs");

const f = require('./FileManager')




console.log('===============Initialized');
let array = []
let translated = []
  
mainFunc=()=>{
    let d = new f().readFile()
    console.log('d > ',d);
    array = d
  waitAndDo(d.length-1,d)

  }

  function waitAndDo(times,arr) {
    if(times < 0) {
      return;
    }
    setTimeout(function() {
      // Do something here
      console.log('Doing a request',array[times].toLowerCase());
      translate(array[times].toLowerCase(), { to: "ja" })
      .then((res) => {
        console.log('Translated >>>',res.text);
        translated.push(res.text)
        waitAndDo(times-1);
        console.log('Finish Loop',times);
        if (times == 0){
          console.log('Finish Loop last',times);
          console.log('Translated >>>',translated);
        }
        // console.log(res.from.language.iso);
        //=> nl
      })
      .catch((err) => {
        console.error(err);
      });
    }, 500);
  }

 

mainFunc()





// translateKey = (word, callBack) => {
//   (async () => {
//     // English => Chinese
//     await translate(word, { to: "ru" })
//       .then((val) => {
//         callBack(val.text), console.log(val);
//       })
//       .catch(console.error);
//   })();
// };

const generate = () => {
  const properties = [];

  translateKey("Hello", (call) => {
    console.log(call);
  });

  //   words.map((e) => {
  //     translateKey(e, (call) => {
  //       properties.push(`"${keys[words.indexOf(e)]}" : "${call}"\n `);

  //       if (words.length == properties.length) {
  //         const string = `{
  //   ${properties}
  //   }
  // `;

  //         fs.writeFileSync("./translate.json", string, "utf8");
  //       }
  //     });
  //   });
};

// generate();
