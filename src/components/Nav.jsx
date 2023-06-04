import '../App.css'
import { NavLink, Outlet } from 'react-router-dom';


export default function Nav({displayBack}) {
  return (
    <div className='nav'>
      {displayBack && <NavLink className="nav-back" to="/">Back to Home</NavLink>}
      <div className="nav-group">
        <NavLink className="navlink" to="/about">About</NavLink>
        <NavLink className="navlink" to="/archive">Archive</NavLink>
        <Outlet />
      </div>
    </div>
  )
}