import React from 'react';

/* scss */
import './assets/scss/index.scss';
/* images */
import {
  logo,
  review_1,
  review_2,
  review_3,
  review_4,
  comment,
  example,
  squarespace,
  ozan,
  padoq,
  stockstotrade,
  blank,
  feature_1,
  feature_2,
  feature_3,
  feature_4,
  rank,
  management,
  benefits_1,
  benefits_2,
  benefits_3,
  benefits_4,
  benefit_image_1,
  benefit_image_2,
  company1,
  company2,
  company3,
  burger,
} from './images/index';

/* components */
import Button from './components/Button';
import Navigation from './components/Navigation';
import FeatureItems from './components/FeatureItems';
import BenefitsCards from './components/BenefitsCards';
import PricingCards from './components/PricingCards';
import CooperationCards from './components/CooperationCards';
/* hooks */
import { useWindowWidth } from './hooks/useWindowWidth';

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
  cooperationCards: [
    {
      logo: company1,
      review:
        '“Gleap is the perfect tool for agencies to collect and manage feedback and issues. It makes projects go smoothly and clients love the shaking gesture to report bugs.”',
      author: 'Théo Hudry',
      company: 'CEO, Minuit Agency',
    },
    {
      logo: company2,
      review:
        '“Gleap team’s super-fast turnaround time on delivering new feature requests, creates a winning and indispensable combination for the elimination of errors from your code.”',
      author: 'Martin Hardman',
      company: 'Transaction Network Services',
    },
    {
      logo: company3,
      review:
        '“Gleap was implemented within minutes and it is now an essential part of our development process.”',
      author: 'Mark Breuß',
      company: 'Founder, MARK.ONE',
    },
  ],
  footerNav: [
    { name: 'Documentation', href: '' },
    { name: 'Integrations', href: '' },
    { name: 'About us', href: '' },
    { name: 'Blog', href: '' },
    { name: 'Contacts', href: '' },
  ],
};

interface HeaderProps {
  headerNav: { name: string; href: string }[];
  isDropdownOpen: boolean;
  setIsDropdownOpen: Function;
}

const Header = ({
  headerNav,
  isDropdownOpen,
  setIsDropdownOpen,
}: HeaderProps) => {
  const windowWidth = useWindowWidth();
  return (
    <header className='header'>
      <div className='wrapper header__wrapper'>
        <div className='header__logo-wrapper'>
          <img className='header__logo' src={logo} alt='logo' />
        </div>
        {windowWidth && windowWidth > 636 && (
          <Navigation navItems={headerNav} className='header__navigation' />
        )}
        <a className='button-wrapper header__button-wrapper' href='test'>
          <Button className='header__button' buttonVariant='--light'>
            Sign in
          </Button>
        </a>
        {windowWidth && windowWidth <= 636 && (
          <>
            <div
              className='header__menu-wrapper'
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img className='header__menu' src={burger} alt='burger-menu' />
            </div>
            <div
              className={`header__dropdown ${isDropdownOpen ? '--open' : ''}`}
            >
              <div className='header__dropdown-wrapper'>
                <Navigation
                  navItems={headerNav}
                  className='header__navigation'
                />
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

const Promo = () => {
  const windowWidth = useWindowWidth();
  return (
    <section className='promo'>
      <div className='wrapper promo__wrapper'>
        {windowWidth && windowWidth > 828 && (
          <>
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
          </>
        )}

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
        <a className='button-wrapper promo__button-wrapper' href='test'>
          <Button className='promo__button' buttonVariant='--blue'>
            Get started for free
          </Button>
        </a>
        <div className='promo__example-wrapper'>
          <img className='promo__example' src={example} alt='example' />
        </div>
        <p className='ads promo__ads'>Over 200 teams worldwide rely on Gleap</p>
        <div className='promo__partners'>
          <a
            className='promo__partners-link'
            href='https://www.squarespace.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='promo__partners-item'
              src={squarespace}
              alt='squarespace'
            />
          </a>
          <a
            className='promo__partners-link'
            href='https://www.ozan.com'
            target='_blank'
            rel='noreferrer'
          >
            <img className='promo__partners-item' src={ozan} alt='ozan' />
          </a>
          <a
            className='promo__partners-link'
            href='https://padoq.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img className='promo__partners-item' src={padoq} alt='padoq' />
          </a>
          <a
            className='promo__partners-link'
            href='https://stockstotrade.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='promo__partners-item'
              src={stockstotrade}
              alt='stockstotrade'
            />
          </a>
          <a
            className='promo__partners-link'
            href='https://www.blank.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img className='promo__partners-item' src={blank} alt='blank' />
          </a>
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
        <a className='button-wrapper features__button-wrapper' href='test'>
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
        <div className='ads pricing__ads'>Need a little... extra?</div>
        <div className='review pricing__review'>
          Sometimes we all need a little extra. Our sales team will be happy to
          setup a custom plan tailored to your needs.
        </div>
        <a className='button-wrapper pricing__button-wrapper' href='test'>
          <Button className='pricing__button' buttonVariant='--light'>
            Contact us
          </Button>
        </a>
      </div>
    </section>
  );
};

interface CooperationProps {
  cooperationCards: {
    logo: string;
    review: string;
    author: string;
    company: string;
  }[];
}

const Cooperation = ({ cooperationCards }: CooperationProps) => {
  return (
    <section className='cooperation'>
      <div className='wrapper cooperation__wrapper'>
        <h2 className='cooperation__title'>
          Over 200 teams rely on Gleap every day
        </h2>
        <CooperationCards cooperationCards={cooperationCards} />
      </div>
    </section>
  );
};

const Integration = () => {
  return (
    <section className='integration'>
      <div className='wrapper integration__wrapper'>
        <div className='ads integration__ads'>
          Integrate Gleap with all your favourite tools
        </div>
        <div className='review integration__review'>
          We don’t get in the way of tools you love, we integrate with them to
          help you become better. Ship your reports to your project management
          tool of choice in real time.
        </div>
        <a className='button-wrapper integration__button-wrapper' href='test'>
          <Button className='integration__button' buttonVariant='--light'>
            See all integrations
          </Button>
        </a>
      </div>
    </section>
  );
};

interface FooterProps {
  footerNav: { name: string; href: string }[];
}

const Footer = ({ footerNav }: FooterProps) => {
  const windowWidth = useWindowWidth();
  return (
    <footer className='footer'>
      <div className='wrapper footer__wrapper'>
        {windowWidth && windowWidth > 636 && (
          <img className='footer__logo' src={logo} alt='logo' />
        )}
        <Navigation navItems={footerNav} className='footer__navigation' />
        <div className='footer__info'>
          {windowWidth && windowWidth > 636 && (
            <p className='footer__copyright'>
              © 2021 Gleap. All rights reserved.
            </p>
          )}
          <ul className='footer__documents'>
            <a className='footer__documents-item' href='test'>
              Privacy Policy
            </a>
            <a className='footer__documents-item' href='test'>
              Terms of Service
            </a>
            <a className='footer__documents-item' href='test'>
              Site Notice
            </a>
          </ul>
        </div>
        {windowWidth && windowWidth <= 636 && (
          <p className='footer__copyright'>
            © 2021 Gleap. All rights reserved.
          </p>
        )}
      </div>
    </footer>
  );
};

const App = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);
  return (
    <div className='App'>
      <Header
        headerNav={data.headerNav}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      <main className='main'>
        <Promo />
        <Features features={data.features} />
        <Management />
        <Benefits benefitsCards={data.benefitsCards} benefits={data.benefits} />
        <Pricing pricing={data.pricing} />
        <Cooperation cooperationCards={data.cooperationCards} />
        <Integration />
      </main>
      <Footer footerNav={data.footerNav} />
    </div>
  );
};

export default App;
