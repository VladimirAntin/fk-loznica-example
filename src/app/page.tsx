import Hero from '@components/home/Hero';
import Services from '@components/home/Services';
import AgeGroups from '@components/home/AgeGroups';
import Extras from '@components/home/Extras';
import Contact from '@/components/Contact';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'FK Junior Loznica — Škola Fudbala za Decu | U7 U9 U11 U13',
  description:
    'Upišite dete u FK Junior Loznica — školu fudbala za decu uzrasta 5–13 godina. Stručni treneri, 4 uzrasne grupe i letnji fudbalski kamp u Loznici.',
  alternates: {canonical: 'https://fkjuniorloznica.rs'},
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AgeGroups />
      <Extras />
      <Contact />
    </>
  );
}
