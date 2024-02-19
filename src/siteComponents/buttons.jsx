import '../siteStyles/buttons.css';
import { motion } from 'framer-motion';
import GradientButton from '../buttons/gradientButton';

function Buttons(props) {
    return (
        <div className="buttons">
            <div className="gradient-button">
                <p>Gradient Button</p>
                <GradientButton />
            </div>
        </div>
    );
}

export default Buttons;
