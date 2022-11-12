const fs = require("fs");
const path = require("path");
let extensions = require("./util");
let folderPath = "./Download";
let extFolderPath;


function checkFolder(extension){ //.jpg aye
      // ./download tha
    //name bhi set ho raha h sath ki sath return bhi true false ho raha h
    for(let key in extensions){
        //"Images"  ,, audiio
        if(extensions[key].includes(extension)){
            extFolderPath = `${folderPath}/${key}`;
            break;
        }
    }
    return fs.existsSync(extFolderPath);
}

function moveFile(fileName){
    //copy hoghi
    let sourceFilePath = `${folderPath}/${fileName}`; // "./Downloads/abc.txt"
    let destinationFilePath = `${extFolderPath}/${fileName}`; // "./Downloads/Documents/abc.txt"
    fs.copyFileSync(sourceFilePath , destinationFilePath);

    //delet file

    fs.unlinkSync(sourceFilePath);

}

function createDirc(){
    fs.mkdirSync(extFolderPath);
}

function sortFolder(folderPath){
    //get content of folder path
    let content = fs.readdirSync(folderPath);   //apne ko folder k andar k content ko ek array m daal kar le ayega
    //content = a.jpg,,,,,abc.pdf

    for(let i=0;i<content.length;i++){//pure content k array m chalegha
        //get extension name in fs (queation)
        let extensionName = path.extname(content[i]);
        // console.log(extensionName);
        let extensionFolderExist = checkFolder(extensionName);  //.jpg pass
        if(extensionFolderExist){
            moveFile(content[i]);
        }else{
            createDirc();
            moveFile(content[i]);
        }
    }

}
sortFolder(folderPath);