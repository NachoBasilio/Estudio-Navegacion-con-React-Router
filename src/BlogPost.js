import React from 'react'
import { useParams } from 'react-router-dom'
import {blogdata} from './blogdata'

export function BlogPost() {
    const {slug} = useParams()

    const blogpost = blogdata.find(post => post.slug === slug)
    return (
        <>
            <h2>{blogpost.title}</h2>
            <button>Volver al blog</button>
            <p>{blogpost.content}</p>
        </>
    )
}
