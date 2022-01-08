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
import feature_1 from './assets/images/feature_1.png';
import feature_2 from './assets/images/feature_2.png';
import feature_3 from './assets/images/feature_3.png';
import feature_4 from './assets/images/feature_4.png';
import rank from './assets/images/rank.svg';
/* components */
import Button from './components/Button';
import Navigation from './components/Navigation';
import FeatureItems from './components/FeatureItems';

const data = {
  headerNav: [
    { name: 'Use cases', href: '' },
    { name: 'Pricing', href: '' },
    { name: 'Features', href: '' },
    { name: 'Roadmap', href: '' },
    { name: 'Docs', href: '' },
  ],
  features: [
    {
      title: 'Fix bugs 10x faster than competitors.',
      subtitle: 'Let users pinpoint exactly where it happened.',
      src: feature_1,
    },
    {
      title: 'Replay bugs exactly as they happened.',
      subtitle: 'See things through the eyes of your users.',
      src: feature_2,
    },
    {
      title: 'User feedback surveys.',
      subtitle:
        'Get user insights based on targeted surveys directly integrated in your app or website.',
      src: feature_3,
    },
    {
      title: 'Let users know they have been heard.',
      subtitle: 'Build trust and relationships with your users.',
      src: feature_4,
    },
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
        <a className='button-wrapper header__button-wrapper' href='zaglushka'>
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
        <p className='review promo__review'>
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
        <a className='button-wrapper promo__button-wrapper' href='zaglushka'>
          <Button className='promo__button' buttonVariant='--blue'>
            Get started for free
          </Button>
        </a>
        <div className='promo__example-wrapper'>
          <img className='promo__example' src={example} alt='example' />
        </div>
        <p className='ads promo__ads'>Over 200 teams worldwide rely on Gleap</p>
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
            alt='stockstotrade'
          />
          <img className='promo__partners-item' src={blank} alt='blank' />
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  features: { title: string; subtitle: string; src?: string }[];
}

const Features = ({ features }: FeatureProps) => {
  return (
    <section className='features'>
      <div className='wrapper features__wrapper'>
        <FeatureItems features={features} />
        <div className='ads features__ads'>
          Integrate easily in minutes on mobile and web apps
        </div>
        <a className='button-wrapper features__button-wrapper' href='zaglushka'>
          <Button className='features__button' buttonVariant='--blue'>
            Get started for free
          </Button>
        </a>
        <div className='features__rank-container'>
          <img className='features__rank' src={rank} />
        </div>
        <p className='review features__review'>
          “Gleap has delivered more than expected! It was implemented within
          minutes and it is now an essential part of our development process.”
        </p>
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
        <Features features={data.features} />
      </main>
    </div>
  );
}

export default App;
