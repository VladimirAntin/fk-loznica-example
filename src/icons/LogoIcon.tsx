import {FC, memo} from 'react';

// Svet Igre — playful balloon with smiley face
const LogoIcon: FC<Icon> = ({width = 40, height = 40, className}) => (
  <svg
    width={width}
    height={height}
    viewBox={'0 0 24 24'}
    fill={'none'}
    xmlns={'http://www.w3.org/2000/svg'}
    className={className}>
    {/* Balloon body */}
    <circle cx={'12'} cy={'9'} r={'7.5'} fill={'currentColor'} />
    {/* Shine highlight */}
    <circle cx={'9.5'} cy={'6.5'} r={'1.8'} fill={'white'} opacity={'0.35'} />
    {/* Eyes */}
    <circle cx={'10'} cy={'9'} r={'1'} fill={'white'} />
    <circle cx={'14'} cy={'9'} r={'1'} fill={'white'} />
    {/* Smile */}
    <path
      d={'M9.5 11.5 Q12 14 14.5 11.5'}
      stroke={'white'}
      strokeWidth={'1.2'}
      strokeLinecap={'round'}
      fill={'none'}
    />
    {/* Balloon string */}
    <path
      d={'M12 16.5 C11 18 13 19.5 12 21.5'}
      stroke={'currentColor'}
      strokeWidth={'1.2'}
      strokeLinecap={'round'}
      fill={'none'}
    />
    {/* String knot */}
    <circle cx={'12'} cy={'16.5'} r={'0.8'} fill={'currentColor'} />
  </svg>
);

export default memo(LogoIcon);
