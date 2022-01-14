import { Photo } from '../types/Photo';
import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { v4 as createId } from 'uuid';

export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "images");
    const photoList = await listAll(imagesFolder);

    // for(let i in photoList.items) {
    //     let photoUrl = await getDownloadURL(photoList.items[i]);

    //     list.push({
    //         name: photoList.items[i].name,
    //         url: photoUrl
    //     });
    // }
    for (const it of photoList.items) {
      let photoUrl = await getDownloadURL(it);
        list.push({
            name: it.name,
            url: photoUrl
        });
    }

    return list;
}

export const insert = async (file: File) => {
    if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {

        let randomName = createId();
        let newFile = ref(storage, `images/${randomName}`);

        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref);

        return { name: upload.ref.name, url: photoUrl } as Photo;
    } else {
        return new Error('Tipo de arquivo não permitido.');
    }
}

export const deleteFile = async (file: Photo) => {    

    var storageRef = ref(storage, file.url);

    // Create a reference to the file to delete
    let retorno = await deleteObject(storageRef)
            .then(() => {
                return true;
            }).catch((error: Error) => {
                console.log('Error: ', error);
                return error;        
            });

    return retorno;
}