import React, { useState } from 'react'
import { Client, Databases, ID } from "appwrite";

export const AddBlog = () => {

    const client = new Client();

    const databases = new Databases(client);

    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('653bb74a90a662ac68bc') // Your project ID
        ;

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Date.now().toString(36) + Math.random().toString(36).slice(2)
        const promise = databases.createDocument('653bbc6a3f0d35d0120f', '653bbca1792d0d087331', ID.unique(), {title,content,imageUrl,id});

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={content}
                        onChange={handleContentChange}
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={imageUrl}
                        onChange={handleImageUrlChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                    >
                        Add Blog
                    </button>
                </div>
            </form>
        </div>
    )
}
