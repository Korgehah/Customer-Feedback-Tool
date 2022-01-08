import React from 'react';

interface FeatureItemsProps {
  title: string;
  subtitle: string;
  src?: string;
  background?: boolean;
}

const FeatureItem = ({
  title,
  subtitle,
  src,
  background,
}: FeatureItemsProps) => {
  return (
    <div className='feature__card'>
      <div
        className={`feature__card-wrapper ${
          background ? 'feature__card-wrapper_colored' : ''
        }`}
      >
        <div className='feature__description'>
          <span className='feature__description_bold'>{title}</span>
          {subtitle}
        </div>
        <div className='feature__image-container'>
          <img className='feature__image' src={src} alt='feature' />
        </div>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  features: { title: string; subtitle: string; src?: string }[];
  background?: boolean;
}

const FeatureItems = ({ features, background }: FeatureItemProps) => {
  return (
    <div className='feature__cards'>
      {features.map((feature, index) => (
        <FeatureItem
          title={feature.title}
          subtitle={feature.subtitle}
          src={feature.src}
          key={index}
          background={background}
        />
      ))}
    </div>
  );
};
export default FeatureItems;
