const fs = require("fs");

module.exports = class fileManager {

    readFile = (callBack) => {
        const d = fs.readFileSync(`App/words.txt`, "utf8");
        console.log("content of file >>> ", d);
        const js = JSON.parse(d)
        console.log(Object.values(js));
        callBack(Object.values(js))
    }

    createFile = (props, callBack) => {
        const string = `{
         ${props}
        }`

        fs.writeFileSync("./translations.json", string, "utf8");
        callBack()
    }
}

// readFile(e => {

// })

// createFile('"a":"v"', e => {

// })

