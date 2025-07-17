const fs= require('fs');

//create  a read streams
const readStreams = fs.createReadStream('largeFile.txt','utf-8')

//Listen for data chunks
readStreams.on('data',(chunks)=>{
    console.debug("Data Chunks : ",chunks)
})

//When Done
readStreams.on('end',()=>{
    console.log("File read Done...")
})
