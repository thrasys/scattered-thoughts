import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('An awesome title for your blog...');
    const [body, setBody] = useState('Let your thoughts flow...');
    const [author, setAuthor] = useState('Tasdik');
    // const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            // alert('Your blog has been added successfully!');
            console.log('New Blog Added');
            navigate('/');
        })

    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onClick={(e)=>setTitle(e.target.value = '')}  onChange={(e)=> setTitle(e.target.value)}/>
                
                <label>Blog Body:</label>
                <textarea required value={body} onClick={(e)=>setBody(e.target.value = '')}  onChange={(e)=> setBody(e.target.value)}></textarea>

                <label>Blog Author:</label>
                <select value={author} onChange={e => setAuthor(e.target.value)}>
                    <option value="Tasdikur">Tasdikur</option>
                    <option value="Takia">Takia</option>
                    <option value="CulinaryMind">CulinaryMind</option>
                    <option value="EcoExplorer">EcoExplorer</option>
                </select>
                
                <button>Add Blog</button>

            </form>
        </div>
     );
}
 
export default Create;