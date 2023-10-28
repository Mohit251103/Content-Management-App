import React, { useEffect, useState } from 'react'
import { Client, Databases } from "appwrite";
import { Link } from 'react-router-dom';
import { AddBlog } from './AddBlog';

export const Home = () => {
    const [blogs, setBlogs] = useState()

    const init = async () => {
        const client = new Client();

        const databases = new Databases(client);
        client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('653bb74a90a662ac68bc')
            ;

        const promise = await databases.listDocuments('653bbc6a3f0d35d0120f', '653bbca1792d0d087331');

        setBlogs(promise.documents);
    }

    useEffect(() => {
        init();
    }, [])


    return (
        <>
        <AddBlog/>
        <div>
            <h1 className="text-3xl font-bold mt-4 text-center">Welcome to Our Blog</h1>
            { blogs? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white rounded p-4 shadow-md">
                        <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="w-full h-auto rounded mb-4"
                        />
                        <h2 className="text-xl font-semibold">{blog.title}</h2>

                        <p>{blog.content}</p>
                        <Link to={`/blog/${blog.id}`} className="text-blue-500 hover:underline">
                            Read More
                        </Link>
                    </div>
                ))}
            </div>):(
                <h2 className='text-center'>Please add blogs</h2>
            )}
        </div>
        </>
    );
}
