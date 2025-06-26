import videographyImage from '../assests/videography.jpg';

const Home = () => { return ( <div className="container text-center mt-5"> 
<img src={videographyImage} alt="Videography" className="img-fluid rounded shadow mb-4" style={{ maxWidth: "600px" }} /> 
<h1 className="text-primary">Welcome to ShootSmart</h1> 
<p className="lead text-secondary"> Master the art of mobile videography with just your smartphone. </p> 
</div> 
);
 };

export default Home;
