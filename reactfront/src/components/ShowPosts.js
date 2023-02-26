import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const endpoint = 'http://localhost:8000/api'

const ShowPosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getAllPosts();
    }, [])
    const getAllPosts = async () => {
        const response = await axios.get(`${endpoint}/posts`)
        setPosts(response.data)
        //console.log(response)
    }
    const deletePosts = async (id) => {
        await axios.delete(`${endpoint}/post/${id}`)
        getAllPosts()
    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>
                   CREAR POSTS
                </Link>
            </div>
            
                <table className='table table-striped'>
                    <thead className='bg-primary text-white'>
                        <tr>
                           <th>Titulo</th> 
                           <th>Contenido</th> 
                           <th>Funciones</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {   posts.map( (post) => (
                            <tr key={post.id}>
                                <td>{post.titulo}</td>
                                <td>{post.contenido}</td>
                                <td>
                                    <Link to={`/edit/${post.id}`} className='btn btn-warning'>Edit</Link>
                                    <button onClick={() =>deletePosts(post.id) } className='btn btn-danger'>Delete</button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )

}

export default ShowPosts