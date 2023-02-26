import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/post/'


const EditPosts = () => {
    const[titulo, setTitulo] = useState('')
    const[contenido, setContenido] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async(e)  => {
     e.preventDefault()
     await axios.put(`${endpoint}${id}`, {
        titulo: titulo,
        contenido: contenido
     })
        navigate('/list')
    }
    
    useEffect(()=>{
        const getPostById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setTitulo(response.data.titulo)
            setContenido(response.data.contenido)
        }
        getPostById()
    }, [])

    return(
<div>
        <h3>Crear Posts</h3>
        <form onSubmit={update}>
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

export default EditPosts