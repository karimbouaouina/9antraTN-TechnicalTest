import logo from '../assets/logo.png';
function Navbar() {
    return (
      <nav className="px-6 py-4">
        <div className="flex items-center gap-3 max-w-7xl mx-auto">
          <img src={logo} alt="logo" className='w-12' />
          <div className="text-2xl font-bold text-black">
            The <span className="text-pink-700">Bridge</span>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar
  
  