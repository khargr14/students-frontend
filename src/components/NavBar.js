import {Link} from 'react-router-dom';

const NavBar = () => (
    <div>
        <Link to='/'>Home</Link> - 
        <Link to='/students'>Students</Link> - 
        <Link to='/students/new'>New Student</Link>
    </div>
)

export default NavBar;