import CartWidget from "./CartWidget";
import logoHorizontal from './logoHorizontalCopia.png';
import { Link } from "react-router-dom";
import SearchForm from './SearchForm';


const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/'><img src={logoHorizontal}></img></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse row" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto col-md-10 d-flex justify-content-between">
                        <li className="nav-item">
                            <Link to='/category/camuflado'><a className="nav-link">Camuflados</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/estampado'><a className="nav-link">Estampados</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/personalizado'><a className="nav-link">Personalizados</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/liso'><a className="nav-link">Lisos</a></Link>
                        </li>
                        <Link to='/cart'><CartWidget/></Link>
                        <SearchForm/> 
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;