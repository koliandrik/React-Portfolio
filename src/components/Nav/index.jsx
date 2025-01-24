
import { Tabs } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
        </nav>
    );
}

export default Nav;