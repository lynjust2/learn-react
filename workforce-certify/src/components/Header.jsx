import logo from '../assets/adp.png';

function Header() {
  return (
    <header>
      <img src={ logo } style={{ width: 80 }} alt='ADP Logo'/>
      <p className='mb-0'>Justin.Lyn</p>
    </header>
  )
}

export default Header
