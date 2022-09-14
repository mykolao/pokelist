import { FC, useState } from 'react';

import { IPokemonDetails } from 'api';

interface Props extends Pick<IPokemonDetails, 'name' | 'sprites'> {}

export const CardImage: FC<Props> = ({ name, sprites }) => {
  const [isHovered, setIsHovered] = useState(false);

  const front = sprites.front_default;
  const back = sprites.back_default;

  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isHovered) {
      setIsHovered(false);
    }
  };

  return (
    <img
      src={isHovered ? back : front}
      alt={name}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};
