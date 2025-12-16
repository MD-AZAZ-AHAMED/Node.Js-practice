import {readFile, writeFile,appendFile,mkdir} from 'fs/promises'


// Read File Example
const read_file =async (fileName)  => {
  const data=  await readFile(fileName, 'utf-8')

  console.log(data)
}
read_file('sample.txt')



// Create/Write File Example

const create_file =async(fileName,content) =>{
  await writeFile(fileName, content)

  console.log('File created successfully')
}
create_file('ai.py','This is a sample python file created using Node.js fs module.')
create_file('App.jsx','This is a sample python file created using Node.js fs module.')




// Append/add  content to  File Example

const append_file =async(fileName,content) =>{
  await appendFile(fileName, content)
  console.log('Content appended successfully')
}
append_file('App.jsx','This is appended content to the existing file.')


//Create Folder/Directory Example

const create_directory =async(dirName) =>{
  await mkdir(dirName,{recursive:true})
  create_directory('src/components/java')
}
create_directory('componets')