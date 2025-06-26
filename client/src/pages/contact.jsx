 import { useState } from 'react'; import axios from 'axios';

const Contact = () => { const [form, setForm] = useState({ name: '', email: '', message: '' }); const [alertVisible, setAlertVisible] = useState(false);

const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };

const handleSubmit = async (e) => { e.preventDefault(); await axios.post('http://localhost:5000/api/contact', form); setForm({ name: '', email: '', message: '' }); setAlertVisible(true); setTimeout(() => setAlertVisible(false), 3000); };

return ( <div className="container mt-5"> <h2 className="text-center text-info mb-4">Contact Us</h2> {alertVisible && ( <div className="alert alert-success text-center" role="alert"> Message sent successfully! </div> )} <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}> <div className="mb-3"> <input
type="text"
name="name"
value={form.name}
onChange={handleChange}
className="form-control"
placeholder="Your Name"
required
/> </div> <div className="mb-3"> <input
type="email"
name="email"
value={form.email}
onChange={handleChange}
className="form-control"
placeholder="Your Email"
required
/> </div> <div className="mb-3"> <textarea
name="message"
value={form.message}
onChange={handleChange}
className="form-control"
placeholder="Your Message"
rows="4"
required
/> </div> <button type="submit" className="btn btn-primary w-100"> Send Message </button> </form> </div> ); };

export default Contact;
