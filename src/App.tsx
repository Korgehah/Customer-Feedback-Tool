import React from 'react';

/* scss */
import './assets/scss/index.scss';
/* images */
import logo from './assets/images/logo.svg'
/* components */
import Button from './components/Button';
import Navigation from './components/Navigation';

const data = {
  headerNav: [
    {name: 'Use cases', href: ''},
    {name: 'Pricing', href: ''},
    {name: 'Features', href: ''},
    {name: 'Roadmap', href: ''},
    {name: 'Docs', href: ''},
  ],
}

interface HeaderProps {
  headerNav: {name: string; href: string;}[];
}

const Header = ({headerNav} : HeaderProps) => {
  return (
    <header className='header'>
      <div className='wrapper header__wrapper'>
      <img className='header__logo' src={logo} alt='logo'/>
      <Navigation navItems={headerNav} className='header__navigation'/>
      <a className='header__button-wrapper' href='vk.com'>
      <Button className='header__button'>Sign in</Button>
      </a>
      </div>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header headerNav={data.headerNav} />
    </div>
  )
}

export default App;
