import React from 'react';

interface CooperationCardProps {
  logo: string;
  review: string;
  author: string;
  company: string;
}

const CooperationCard = ({
  logo,
  review,
  author,
  company,
}: CooperationCardProps) => {
  return (
    <div className='cooperation__card'>
      <div className='cooperation__card-wrapper'>
        <div className='cooperation__logo-wrapper'>
          <img className='cooperation__logo' src={logo} alt='logo' />
        </div>
        <p className='review cooperation__review'>{review}</p>
        <span className='cooperation__author'>{author}</span>
        <span className='cooperation__company'>{company}</span>
      </div>
    </div>
  );
};

interface CooperationCardsProps {
  cooperationCards: {
    logo: string;
    review: string;
    author: string;
    company: string;
  }[];
}

const CooperationCards = ({ cooperationCards }: CooperationCardsProps) => {
  return (
    <div className='cooperation__cards'>
      {cooperationCards.map((card, index) => (
        <CooperationCard
          logo={card.logo}
          review={card.review}
          author={card.author}
          company={card.company}
        />
      ))}
    </div>
  );
};
export default CooperationCards;
