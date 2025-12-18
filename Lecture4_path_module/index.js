import path from 'path';

//  Join multiple segments into a single path

const fullPath=path.join('/path','index.py','file.java')
console.log('files join=',fullPath)

// Absolute path
const absolutePath=path.resolve('index.js')
console.log('absolute path=',absolutePath)


//Extension name
const extName=path.extname('resume.pdf')
console.log('extension name=',extName)

if(extName==='   .pdf'){
  console.log('This is a pdf file')
}else{
  console.log('This is not a pdf file not supported')
}