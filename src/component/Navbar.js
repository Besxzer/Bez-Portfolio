import HamburgerMenu from '../images/hamburger-menu.svg'

function showmenu() {
  const menu = document.getElementById("menu")
  if(menu.classList.contains("hidden")){
      menu.classList.replace("hidden","block")
  }
  else {
      menu.classList.replace("block","hidden")
  }
  menu.classList.toggle("w-full")
}

function Navbar() {

    return (
        <nav className='p-7 flex flex-wrap justify-between h-26 w-[80vw] items-start'>
          <p className='text-4xl font-bold text-white whitespace-nowrap'>🐱Bez</p>
          
          <button>
            <img src={HamburgerMenu} onClick={showmenu} className="block sm:hidden w-11"></img>
          </button>

          <ul id="menu" className='hidden sm:inline-flex text-white gap-x-10 sm:w-auto'>
            <li className="transition my-2 hover:underline underline-offset-4 duration-200"><a href='#about'>about</a></li>
            <li className="transition my-2 hover:underline underline-offset-4 duration-200"><a href='#projects'>projects</a></li>
            <li className="transition my-2 hover:underline underline-offset-4 duration-200"><a href='#contact'>contact</a></li>
          </ul>
        </nav>
        
    )
}

export default Navbar