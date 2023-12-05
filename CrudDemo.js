import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudDemo = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const apiUrl = 'https://65643812ceac41c0761da64a.mockapi.io/api/v1/posts';

  // Read: Fetch posts
useEffect(() => {
      axios.get(apiUrl).then(response => setPosts(response.data));
  }, []);

// const fetchingPosts = () => {
//     axios.get(apiUrl)
//         .then(response => setPosts(response.data.slice(0, 5)));
// };
  
  // Create: Add a new post
  const addPost = () => {
    axios.post(apiUrl, newPost)
    .then(response => {
      const updatedPosts = [...posts, response.data];
      setPosts(updatedPosts);
      setNewPost({ title: '', body: '' }); // Reset new post data
    });
  };

  // Update: Update a post
  const updatePost = (id) => {
    axios.put(`${apiUrl}/${id}`, { ...newPost, id }).then(response => {
      const updatedPosts = posts.map(post => 
        post.id === id ? response.data : post
      );
      setPosts(updatedPosts);
      setNewPost({ title: '', body: '' }); // Reset new post data
    });
  };

  // Delete: Delete a post
  const deletePost = (id) => {
    axios.delete(`${apiUrl}/${id}`).then(() => {
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
    });
  };

  const AddNewTitle = (e) => {
    setNewPost({ ...newPost, title: e.target.value })
  };

  const AddNewBody = (e) => {
    setNewPost({ ...newPost, body: e.target.value })
  };

  return (
    <div>
      <h2>CRUD Demo with Mock API</h2>
      <div>
        <input 
          type="text"
          value={newPost.title}
          onChange={AddNewTitle}
          placeholder="Title"
        />
        <input 
          type="text"
          value={newPost.body}
          onChange={AddNewBody}
          placeholder="Body"
        />
        <button onClick={addPost}>Add Post</button>
        </div>
        <ul>
        {posts.map(post => (
            <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => updatePost(post.id)}>Update</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
            </li>
            ))}
            </ul>
            </div>
            );
        };
        // <button onClick={addPost}>Add Post</button>
        // <button onClick={() => updatePost(post.id)}>Update</button>
        // <button onClick={() => deletePost(post.id)}>Delete</button>

export default CrudDemo;
