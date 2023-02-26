import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const endpoint = 'http://localhost:8000/api/post'
const CreatePosts = () => {

    const[titulo, setTitulo] = useState('')
    const[contenido, setContenido] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {titulo: titulo, contenido: contenido})
        navigate('/list')
    }

  return (
    <div>
        <h3>Crear Posts</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
               <label className='form-label'>Titulo</label> 
               <input
                    value={titulo}
                    onChange={ (e)=> setTitulo(e.target.value)  }
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
               <label className='form-label'>Contenido</label> 
               <input
                    value={contenido}
                    onChange={ (e)=> setContenido(e.target.value)  }
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
    </div>
  )
}

export default CreatePosts