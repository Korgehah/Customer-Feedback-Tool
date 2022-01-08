import React from 'react';

/* scss */
import './assets/scss/index.scss';
/* images */
import logo from './assets/images/logo.svg';
import review_1 from './assets/images/review_1.png';
import review_2 from './assets/images/review_2.png';
import review_3 from './assets/images/review_3.png';
import review_4 from './assets/images/review_4.png';
import comment from './assets/images/comment.svg';
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
import management from './assets/images/management.png';
import benefits_1 from './assets/images/benefits_1.svg';
import benefits_2 from './assets/images/benefits_2.svg';
import benefits_3 from './assets/images/benefits_3.svg';
import benefits_4 from './assets/images/benefits_4.svg';
import benefit_image_1 from './assets/images/benefit_image_1.png';
import benefit_image_2 from './assets/images/benefit_image_2.png';
/* components */
import Button from './components/Button';
import Navigation from './components/Navigation';
import FeatureItems from './components/FeatureItems';
import BenefitsCards from './components/BenefitsCards';
import PricingCards from './components/PricingCards';

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
  benefits: [
    {
      title: 'See how users rate their journey with you.',
      subtitle: 'Where are your users at their happiest?',
      src: benefit_image_1,
    },
    {
      title: 'Discover the features your users really want.',
      subtitle: 'You will be surprised what ideas they come up with.',
      src: benefit_image_2,
    },
  ],
  benefitsCards: [
    {
      title: 'Capture feedback visually',
      description:
        'If screenshots and video replays were not enough, users can draw and select exactly where the bug is.',
      src: benefits_1,
    },
    {
      title: 'Seamless integration',
      description:
        'Fully automate your workflow by integrating Gleap with all your favourite platforms including Zapier.',
      src: benefits_2,
    },
    {
      title: 'Heard users are happy users',
      description:
        'Let your users know they are appreciated when they are the first to notice things aren’t quite right.',
      src: benefits_3,
    },
    {
      title: 'Save time and money',
      description:
        'Increase your productivity by 40% with detailed bug reports. Gone are the days of trading emails with your users.',
      src: benefits_4,
    },
  ],
  pricing: [
    { title: 'Free', price: '$0', projects: '1', dataRetention: '3 days' },
    { title: 'Basic', price: '$29', projects: '2', dataRetention: '1 month' },
    {
      title: 'Startup',
      price: '$89',
      projects: '4',
      dataRetention: '6 months',
    },
    { title: 'Pro', price: '$199', projects: '8', dataRetention: '12 months' },
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
        <img
          className='promo__feedback promo__feedback_first'
          src={review_1}
          alt='review'
        />
        <img
          className='promo__feedback promo__feedback_second'
          src={review_2}
          alt='review'
        />
        <img
          className='promo__feedback promo__feedback_third'
          src={review_3}
          alt='review'
        />
        <img
          className='promo__feedback promo__feedback_fourth'
          src={review_4}
          alt='review'
        />
        <img className='promo__comment' src={comment} alt='comment' />
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
          <img className='features__rank' src={rank} alt='rank' />
        </div>
        <p className='review features__review'>
          “Gleap has delivered more than expected! It was implemented within
          minutes and it is now an essential part of our development process.”
        </p>
      </div>
    </section>
  );
};

const Management = () => {
  return (
    <section className='management'>
      <div className='wrapper management__wrapper'>
        <h2 className='management__title'>
          Manage, track and assign all in one place
        </h2>
        <div className='management__image-container'>
          <img
            className='management__image'
            src={management}
            alt='management'
          />
        </div>
      </div>
    </section>
  );
};

interface BenefitsProps {
  benefits: { title: string; subtitle: string; src?: string }[];
  benefitsCards: { title: string; description: string; src?: string }[];
}

const Benefits = ({ benefitsCards, benefits }: BenefitsProps) => {
  return (
    <section className='benefits'>
      <div className='wrapper benefits__wrapper'>
        <BenefitsCards benefitsCards={benefitsCards} />
        <FeatureItems features={benefits} background />
      </div>
    </section>
  );
};

interface PricingProps {
  pricing: {
    title: string;
    price: string;
    projects: string;
    dataRetention: string;
  }[];
}

const Pricing = ({ pricing }: PricingProps) => {
  return (
    <section className='pricing'>
      <div className='wrapper pricing__wrapper'>
        <div className='pricing__title'>Pricing</div>
        <PricingCards pricing={pricing} />
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
        <Management />
        <Benefits benefitsCards={data.benefitsCards} benefits={data.benefits} />
        <Pricing pricing={data.pricing} />
      </main>
    </div>
  );
}

export default App;
