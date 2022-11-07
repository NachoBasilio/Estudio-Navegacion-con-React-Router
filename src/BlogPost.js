import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {blogdata} from './blogdata'

export function BlogPost() {
    const {slug} = useParams()
    const navigate = useNavigate()

    const returnToBlog = ()=>{
        navigate(-1)
    }

    const blogpost = blogdata.find(post => post.slug === slug)
    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlog}>Volver al blog!</button>
            <p>{blogpost.content}</p>
        </>
    )
}
