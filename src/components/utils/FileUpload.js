import React,{useState} from 'react'
import Dropzone from 'react-dropzone'
import { FcUpload } from 'react-icons/fc'


const FileUpload = () => {

   const [ImageValue, setImage] = useState('')
    const onDrop = (files)=>{
        let element = convertBase64(files)
        element.then(item => {
       
        console.log(item)
        global.base64 = item;
        setImage(item)})
      
    }
    return (<div>
        <div style={{ display: 'felx', justifyContent: 'space-between' }}>
    
            <Dropzone onDrop={onDrop}
                multiple={false}
                maxSize={9999999999}
                accept="image/*"
            >
                {({ getRootProps, getInputProps }) => (
                    <div style={{
                        border: '1px solid lightgray', display: 'table'
                    }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <FcUpload style={{ display: 'table-cell',verticalAlign:'middle',textAlign: 'center'}} size={'120px'} />
                    </div>
                    
                )}
            </Dropzone>
        </div>
        <div style={{}}>
                {global.base64===''? <p>No pucture choosen.</p> : <img style={{width:"10%", height:"10%"}} src={global.base64} alt="+"/>}
                
            </div>
        </div>
    )
}


  function convertBase64(file) {
    var imagecontent = new Promise ((resolve, reject) => {
        const fileReader = new window.FileReader();
        fileReader.readAsDataURL(file[0])
        fileReader.onload = setTimeout(function(){
          resolve(fileReader.result);
        },10000);
        fileReader.onerror = (error) => {
          reject(error);
        }
      })
      imagecontent.then(v=>{
          do{
            console.log('Pending!')
          }while(!v)
      })
      console.log('done')
      //Promise.race([file,imagecontent]).then(v=> (v===imagecontent)? {status:'pending',image:''}:{status:'done',image: imagecontent})
    return imagecontent;
  }

export default FileUpload
