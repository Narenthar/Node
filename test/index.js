const fs = require('fs')
// const [, ,name]=process.argv
// // fs.readFile("./msg.txt", "utf-8", (err,data)=>{
// //     if(err){
// //         console.error(err)
// //     }
    
// //     console.log(data + name)
// // })

// // fs.writeFile("names.txt", name, (err)=>{
// //     console.log("Writing Completed")
// // })
// // fs.appendFile("allNames.txt", name + "\n", (err)=>{
// //     console.log("Append Completed")
// // } )

// fs.readFile("./allNames.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.error(err)
//     }
//     const replacedName = data.replaceAll("nalan","naren")
//     console.log(replacedName)
//     fs.writeFile("allNames.txt", replacedName, (err)=>{
//         console.log("replaced Successfully")
//     })
// })
 fs.unlink("./temp.txt", (err)=>{
     console.log("Removed Successfully")
 })

//  fs.readdir(".", (err,files)=>{
//      console.log(files)
//  })
//  const content = "Road to success"
 const [,,limit,content] = process.argv
for (i=1;i<=limit;i++){
//  fs.writeFile(`./backup/text-${i}.html`, content, (err)=>{
//         console.log("Writing Completed", i)
//     })
fs.writeFileSync(`./backup/text-${i}.html`, content, (err)=>{
            console.log(i)
        })
}

// for (i=1;i<limit;i++){
//     fs.unlink(`./backup/text-${i}.txt`, (err)=>{
//            console.log("removed Completed")
//        })
//    }