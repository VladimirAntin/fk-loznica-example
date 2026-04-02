'use client';
import {memo} from 'react';
import {servicesItems} from '@components/data/services';
import {motion} from 'framer-motion';
import {cn} from '@utils/CN';
import WaveDivider from '@/components/WaveDivider';

const ACCENTS = [
  {num: 'bg-emerald-500', chip: 'border-emerald-300/50 bg-emerald-50 text-emerald-700'},
  {num: 'bg-sky-500', chip: 'border-sky-300/50 bg-sky-50 text-sky-700'},
  {num: 'bg-amber-500', chip: 'border-amber-300/50 bg-amber-50 text-amber-700'},
  {num: 'bg-violet-500', chip: 'border-violet-300/50 bg-violet-50 text-violet-700'},
  {num: 'bg-orange-500', chip: 'border-orange-300/50 bg-orange-50 text-orange-700'},
];

const Services = () => (
  <section id={'programs'} className={'relative bg-stone-950 pb-40 pt-20 lg:pb-52 lg:pt-28'}>
    <div className={'mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'}>
      {/* Header */}
      <motion.div
        className={'mb-12 text-center'}
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.5, ease: 'easeOut'}}>
        <span className={'mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-bold tracking-widest text-primary uppercase'}>
          {'Uzrasne grupe'}
        </span>
        <h2 className={'mb-3 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl'}>
          {'Naši Programi 🎮'}
        </h2>
        <p className={'mx-auto max-w-lg text-base text-white/50'}>
          {'Stručni treneri i prilagođen program za svaki uzrast — 5 do 13 godina'}
        </p>
      </motion.div>

      {/* List */}
      <div className={'flex flex-col gap-4'}>
        {servicesItems.map((service, index) => {
          const accent = ACCENTS[index] ?? ACCENTS[0];
          return (
            <motion.div
              key={index}
              initial={{opacity: 0, x: -24}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true, margin: '-40px'}}
              transition={{duration: 0.45, ease: 'easeOut', delay: index * 0.07}}
              className={'group flex items-start gap-5 overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm transition hover:border-white/10 hover:bg-white/8 sm:items-center sm:flex-row'}>

              {/* Number badge */}
              <div className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-black text-white shadow-lg', accent.num)}>
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Circular image */}
              <div className={'hidden h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white/10 sm:block'}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading={'lazy'}
                  className={'h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'}
                />
              </div>

              {/* Text */}
              <div className={'min-w-0 flex-1'}>
                <h3 className={'mb-1 text-lg font-extrabold text-white'}>{service.title}</h3>
                <p className={'mb-3 text-sm leading-relaxed text-white/55 line-clamp-2'}>{service.description}</p>
                <div className={'flex flex-wrap gap-1.5'}>
                  {service.features.map((f, i) => (
                    <span
                      key={i}
                      className={cn('rounded-full border px-2.5 py-0.5 text-[11px] font-semibold', accent.chip)}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
    <WaveDivider fill={'#fafaf9'} inverted />
  </section>
);

export default memo(Services);
