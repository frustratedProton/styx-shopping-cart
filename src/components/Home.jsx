import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
	return (
		<div className="home">
			<h1>ShopStyx</h1>
			<p>Welcome to ShopStyx</p>
			<Link to="/shop" className="shop-link">Go to Store</Link>
		</div>
	);
};

export default Home;
