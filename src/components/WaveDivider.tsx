const WaveDivider = ({fill, inverted = false}: {fill: string; inverted?: boolean}) => (
  <div className={'absolute bottom-0 left-0 w-full overflow-hidden leading-none'} aria-hidden={'true'}>
    <svg
      viewBox={'0 0 1440 80'}
      preserveAspectRatio={'none'}
      className={'block h-20 w-full sm:h-28 lg:h-36'}
      fill={fill}
      style={inverted ? {transform: 'scaleX(-1)'} : undefined}>
      <path d={'M0,40 C180,80 360,10 540,50 C720,90 900,10 1080,50 C1260,90 1350,30 1440,50 L1440,80 L0,80 Z'} />
    </svg>
  </div>
);

export default WaveDivider;
