import logo from '../assets/image/logo.svg'
import '../component/Navbar.css'
import menu from '../assets/image/menu.png'

const Navbar =()=>{
    return(
        <>
        <div className='container'>
        <div className='logo'>
            <a href=""><img src={logo} alt="" /></a>
        </div>
        <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
        </ul>
        <div className='btn'>
            <button className='btn2'>Login</button>
            <button className='btn3'>Register</button>
        </div>
        <div className='menu'>
            <img src={menu} alt="" />
        </div>
        </div>
        </>
    )
}

export default Navbar