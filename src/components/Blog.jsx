import React, { useState, useEffect } from 'react'
import { Client, Databases, Query } from 'appwrite';
import { useParams } from 'react-router-dom';

export const Blog = () => {
    const { id } = useParams();

    const [blogPosts, setBlogPosts] = useState({});

    const client = new Client();

    const databases = new Databases(client);
    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('653bb74a90a662ac68bc')
        ;


    useEffect(() => {
        const promise = databases.listDocuments(
            '653bbc6a3f0d35d0120f',
            '653bbca1792d0d087331',
            [Query.equal('id', id)]
        );
        promise.then((response) => {
            setBlogPosts(response.documents[0]);
        })
            .catch((err) => {
                console.log(err);
            })
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {console.log(blogPosts)}
            <h1 className="text-2xl font-semibold text-center my-2">{blogPosts.title}</h1>
            <div className='flex justify-center'>
                <img src={blogPosts.imageUrl} alt={blogPosts.title} className='m-2 w-1/2 h-1/2'/>
            </div>
            <p className='text-center font-bold'>{blogPosts.content}</p>
        </div>
    );
}
