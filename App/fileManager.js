const fs = require("fs");

class FileManager{
    
    readFile(){
        const fileContent = fs.readFileSync(`App/words.txt`, "utf8");
        // console.log("content of file \n", fileContent);
        let json = JSON.parse(fileContent)
        // console.log('content of json \n',Object.values(json));
        let values = Object.values(json)
        return values
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