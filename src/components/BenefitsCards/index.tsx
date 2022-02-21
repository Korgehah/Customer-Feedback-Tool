interface BenefitsCardProps {
  title: string;
  description: string;
  src?: string;
}

const BenefitsCard = ({ title, description, src }: BenefitsCardProps) => {
  return (
    <div className='benefits__card'>
      <div className='benefits__image-container'>
        <img className='benefits__image' src={src} alt='benefits_icon' />
      </div>
      <p className='benefits__title'>{title}</p>
      <p className='benefits__description'>{description}</p>
    </div>
  );
};

interface BenefitsCardsProps {
  benefitsCards: { title: string; description: string; src?: string }[];
}

const BenefitsCards = ({ benefitsCards }: BenefitsCardsProps) => {
  return (
    <div className='benefits__cards'>
      {benefitsCards.map((card, index) => (
        <BenefitsCard
          key={index}
          title={card.title}
          description={card.description}
          src={card.src}
        />
      ))}
    </div>
  );
};
export default BenefitsCards;
