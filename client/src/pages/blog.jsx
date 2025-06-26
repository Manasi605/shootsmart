import { useState, useEffect } from 'react'; import axios from 'axios';

const Blog = () => { const [form, setForm] = useState({ title: '', content: '' }); const [blogs, setBlogs] = useState([]); const [alertVisible, setAlertVisible] = useState(false);

const fetchBlogs = async () => { const res = await axios.get('http://localhost:5000/api/blogs'); setBlogs(res.data); };

useEffect(() => { fetchBlogs(); }, []);

const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };

const handleSubmit = async (e) => { e.preventDefault(); await axios.post('http://localhost:5000/api/blogs', form); setForm({ title: '', content: '' }); setAlertVisible(true); fetchBlogs(); setTimeout(() => setAlertVisible(false), 3000); };

const handleDelete = async (indexToDelete) => { const updatedBlogs = blogs.filter((_, index) => index !== indexToDelete); setBlogs(updatedBlogs); };

return ( <div className="container mt-5"> <h2 className="text-center text-danger mb-4">Post a Blog</h2>

{alertVisible && (
    <div className="alert alert-success text-center" role="alert">
      Blog posted successfully!
    </div>
  )}
 <form onSubmit={handleSubmit} className="mb-4">
    <input
      name="title"
      className="form-control mb-3"
      placeholder="Enter blog title"
      value={form.title}
      onChange={handleChange}
      required
    />
    <textarea
      name="content"
      className="form-control mb-3"
      placeholder="Write your blog content..."
      rows="4"
      value={form.content}
      onChange={handleChange}
      required
    />
    <button className="btn btn-warning w-100">Post Blog</button>
  </form>

  <h3 className="text-center mt-5 mb-3 text-primary">All Blogs</h3>

  {blogs.length === 0 ? (
    <p className="text-center text-muted">No blogs posted yet.</p>
  ) : (
    blogs.map((blog, index) => (
      <div key={index} className="card mb-3 shadow">
        <div className="card-body bg-light">
          <h4 className="card-title text-success">{blog.title}</h4>
          <p className="card-text">{blog.content}</p>
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </div>
      </div>
    ))
  )}
</div>

); };

export default Blog;
