import {Link} from 'react-router-dom';

const Footer = () => (
    <div>
        <Link to='/'>Home</Link> - 
        <Link to='/students'>Students</Link> - 
        <Link to='/students/new'>New Student</Link>-
        <Link to='/teachers/'>Teachers</Link>
    </div>
)




export default Footer;