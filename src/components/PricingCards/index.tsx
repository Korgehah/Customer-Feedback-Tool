import React from 'react';
import Button from '../Button';

interface PricingCardProps {
  title: string;
  price: string;
  projects: string;
  dataRetention: string;
}

const PricingCard = ({
  title,
  price,
  projects,
  dataRetention,
}: PricingCardProps) => {
  return (
    <a className='pricing__card' href='test'>
      <div className='pricing__card-wrapper'>
        <h2 className='pricing__card-title'>{title}</h2>
        <span className='pricing__price'>{price}</span>
        <span className='pricing__term'>per month</span>
        <div className='pricing__info'>
          <div className='pricing__projects'>
            <span className='pricing__info_bold'>Projects</span>
            {projects}
          </div>
          <div className='pricing__retention'>
            <span className='pricing__info_bold'>Data retention</span>
            {dataRetention}
          </div>
        </div>
        <Button className='pricing__card-button' buttonVariant='--blue'>
          Get started
        </Button>
      </div>
    </a>
  );
};

interface PricingCardsProps {
  pricing: {
    title: string;
    price: string;
    projects: string;
    dataRetention: string;
  }[];
}

const PricingCards = ({ pricing }: PricingCardsProps) => {
  return (
    <div className='pricing__cards'>
      {pricing.map((card, index) => (
        <PricingCard
          title={card.title}
          price={card.price}
          projects={card.projects}
          dataRetention={card.dataRetention}
          key={index}
        />
      ))}
    </div>
  );
};
export default PricingCards;
