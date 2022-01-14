import * as C from './styles';
import { Photo } from '../../types/Photo';

type Props = {
    url: string;
    name: string;
    onDelete: (photo: Photo) => void;
}

export const PhotoItem = ({ url, name, onDelete }: Props) => {
    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
            <button onClick={()=>onDelete({name, url})}>Excluir</button>
        </C.Container>
    );
}