const fs = require("fs");

class FileManager {

    readFile() {
        const fileContent = fs.readFileSync(`App/words.json`, "utf8");
        // console.log("content of file \n", fileContent);
        let json = JSON.parse(fileContent)
        // console.log('content of json \n',Object.values(json));
        let values = Object.values(json)
        let keys = Object.keys(json)
        return values
    }

    readFileKeys() {
        const fileContent = fs.readFileSync(`App/words.json`, "utf8");
        // console.log("content of file \n", fileContent);
        let json = JSON.parse(fileContent)

        let keys = Object.keys(json)
        return keys
    }
    createFile = (props, callBack) => {
        const string = `{
         ${props}
        }`

        fs.writeFileSync("./translations.json", string, "utf8");
        callBack()
    }
}


module.exports = FileManager