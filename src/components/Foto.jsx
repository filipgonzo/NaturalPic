import React, {useContext} from 'react'
import Card from 'react-bootstrap/Card';
import MyContext from '../contexts/MyContext';
import { FaHeart } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const Foto = ({foto, fav}) => {
  
  const {fotos, setFotos} = useContext(MyContext)

  const setFavorito = (id) =>{
      const fotoConClick = fotos.findIndex((f)=> f.id === id);
      fotos[fotoConClick].liked = !fotos[fotoConClick].liked;
      setFotos([...fotos]);
  }

  return (
    <Card className='Card' style={{ width: '18vw' }}>
      <Card.Img variant="top" src = {foto.src.tiny} />
      <Card.Body className='CardBody'>
        <Card.Title className='CardTitle'>{foto.alt}</Card.Title>

        {!fav && <Button className='boton' onClick = {()=> setFavorito(foto.id)} >
        <FaHeart style={{color: foto.liked?'red':'white'}}></FaHeart>
        </Button>}
        
      </Card.Body>
    </Card>
    
  )
}

export default Foto