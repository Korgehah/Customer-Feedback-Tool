import React from 'react';

/* scss */
import './assets/scss/index.scss';
/* images */
import logo from './assets/images/logo.svg';
import example from './assets/images/example.png';
import squarespace from './assets/images/squarespace.svg';
import ozan from './assets/images/ozan.svg';
import padoq from './assets/images/padoq.svg';
import stockstotrade from './assets/images/stockstotrade.svg';
import blank from './assets/images/blank.svg';
/* components */
import Button from './components/Button';
import Navigation from './components/Navigation';

const data = {
  headerNav: [
    { name: 'Use cases', href: '' },
    { name: 'Pricing', href: '' },
    { name: 'Features', href: '' },
    { name: 'Roadmap', href: '' },
    { name: 'Docs', href: '' },
  ],
};

interface HeaderProps {
  headerNav: { name: string; href: string }[];
}

const Header = ({ headerNav }: HeaderProps) => {
  return (
    <header className='header'>
      <div className='wrapper header__wrapper'>
        <img className='header__logo' src={logo} alt='logo' />
        <Navigation navItems={headerNav} className='header__navigation' />
        <a className='button-wrapper header__button-wrapper' href='vk.com'>
          <Button className='header__button' buttonVariant='--light'>
            Sign in
          </Button>
        </a>
      </div>
    </header>
  );
};

const Promo = () => {
  return (
    <section className='promo'>
      <div className='wrapper promo__wrapper'>
        <p className='promo__slogan'>
          “A winning and indispensible combination for the elimination of errors
          from your code.”
        </p>
        <h1 className='promo__title'>
          All-in-one customer feedback tool for websites and apps
        </h1>
        <p className='promo__subtitle'>
          Communicate with your users directly and build better software by
          discovering their everyday pain points.
        </p>
        <a className='button-wrapper promo__button-wrapper' href='vk.com'>
          <Button className='promo__button' buttonVariant='--blue'>
            Get started for free
          </Button>
        </a>
        <div className='promo__example-wrapper'>
          <img className='promo__example' src={example} alt='example' />
        </div>
        <p className='promo__partnership'>
          Over 200 teams worldwide rely on Gleap
        </p>
        <div className='promo__partners'>
          <img
            className='promo__partners-item'
            src={squarespace}
            alt='squarespace'
          />
          <img className='promo__partners-item' src={ozan} alt='ozan' />
          <img className='promo__partners-item' src={padoq} alt='padoq' />
          <img
            className='promo__partners-item'
            src={stockstotrade}
            alt='scokstotrade'
          />
          <img className='promo__partners-item' src={blank} alt='blank' />
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className='App'>
      <Header headerNav={data.headerNav} />
      <main className='main'>
        <Promo />
      </main>
    </div>
  );
}

export default App;
