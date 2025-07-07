import {Outlet,Link} from 'react-router-dom';
export default function Home(){
    return (
        <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
          </li>
          <li>
            <Link to="*">Default</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
    )
}