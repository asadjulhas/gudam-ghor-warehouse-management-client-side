import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import CustomLink from '../../../CustomLink';
import auth from '../../../firebaseinit';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  }
  return (
    <div className='menu_area'>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand ><Link to='/'>Gudam Ghor</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/products'>Products</CustomLink>
        { user?.uid ? '' : <CustomLink to='/login'>Login</CustomLink>}
        { user?.uid ? <Link onClick={logOut}  to=''>Logout</Link> : <CustomLink to='/register'>Register</CustomLink>}
        {user?.photoURL ? <img className='user_avatar' src={user?.photoURL} title={user?.displayName} alt={user?.displayName} /> : user?.displayName || user?.email}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;