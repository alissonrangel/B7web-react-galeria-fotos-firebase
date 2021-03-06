import React, {useState, useEffect, FormEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import * as C from './App.styles';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';
import { PhotoItem } from './components/PhotoItem';
import { async } from '@firebase/util';


function App() {

  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(()=>{
    getPhotos();
  }, []);

  const getPhotos = async () => {
    setLoading(true);
    setPhotos(await Photos.getAll());
    setLoading(false);
  }

  const handleDeleteFile = async (photo: Photo)=>{
    console.log('delete');
    let result = await Photos.deleteFile(photo);    
    if(result instanceof Error) {
      console.log(`${result.name} - ${result.message}`);
      setError(result);      
      setTimeout(() => {
        setError(undefined);        
      }, 3000);
    } else {            
      getPhotos(); 
    }    
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if(file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          {uploading && "Enviando..."}
        </C.UploadForm>
        {error && 
          <C.DeleteError >
            {error.name} - {error.message});
          </C.DeleteError>
        }
        {loading &&
          <C.ScreenWarning>
            <div className="emoji">????</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        }
        {!loading && photos.length > 0 &&
          <C.PhotoList>
            {photos.map((item, index)=>(
              <PhotoItem
                key={index}
                url={item.url}
                name={item.name}
                onDelete={handleDeleteFile}
              />              
            ))}
          </C.PhotoList>
        }
        {!loading && photos.length === 0 &&
          <C.ScreenWarning>
            <div className="emoji">????</div>
            <div>N??o h?? fotos cadastradas.</div>
          </C.ScreenWarning>
        }
      </C.Area>
    </C.Container>
  );
}

export default App;
