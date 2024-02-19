import '../siteStyles/navbar.css';
import { motion } from 'framer-motion';

function NavBar(props) {

    const handlePageChange = (page) => {
        props.setPage(page);
    }

    return (
        <div className="nav">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="nav-item"
                onClick={() => handlePageChange('Home')}
            >
                <p>Home</p>
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="nav-item"
                onClick={() => handlePageChange('Buttons')}
            >
                <p>Buttons</p>
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="nav-item"
                onClick={() => handlePageChange('Dropdowns')}
            >
                <p>Dropdowns</p>
            </motion.button>
            <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }} 
                className="nav-item"
                onClick={() => handlePageChange('Slideshows')}
            >
                <p>Slideshows</p>
            </motion.button>
        </div>
    );
}

export default NavBar;
