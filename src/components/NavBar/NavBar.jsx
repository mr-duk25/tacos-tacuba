import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div>
    <nav>
      <Link to="/menu">Menu Page</Link>
      &nbsp; | &nbsp;
      <Link to="/events">Book Event</Link>
      &nbsp; | &nbsp;
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
   
      <span>Welcome, {user.name}</span>
      &nbsp;  &nbsp;
      &nbsp;  &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
      &nbsp;  &nbsp;
    </nav>
    </div>
  );
}