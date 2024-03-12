import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useHotkeys, useLocalStorage, useViewportSize } from '@mantine/hooks';
import gsap from 'gsap';
import { Observer } from 'gsap/all';
import { useLayoutEffect } from 'react';
import AvartaInfo from './models/AvartaInfo';
import Intro from './models/Intro';
import ToggleTheme from './components/ToggleTheme';
import Experience from './models/Experience';
import Portfolio from './models/Portfolio';
import Footer from './models/Footer';
import ToggleLanguage from './components/ToggleLanguage';
import NotSupport from '@/components/NotSupport/NotSupport';

gsap.registerPlugin(Observer);

function App() {
  const { width } = useViewportSize();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  useLayoutEffect(() => {
    const sections = document.querySelectorAll('section');
    const images = document.querySelectorAll('.bg');
    const outerWrappers = gsap.utils.toArray('.outer');
    const innerWrappers = gsap.utils.toArray('.inner');

    let currentIndex = -1;
    let animating = false;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index: number, direction: number) {
      if (index < 0 || index >= sections.length) return;

      animating = true;

      const fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: { duration: 1.25, ease: 'power1.inOut' },
          onComplete: () => {
            animating = false;
          },
        });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 },
        );
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        {
          yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
        },
        {
          yPercent: 0,
        },
        0,
      ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

      currentIndex = index;
    }

    Observer.create({
      type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    setTimeout(() => {
      gotoSection(0, 1);
    }, 0);
  }, []);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <div>
          <div className="absolute top-5 right-5 z-[100] mobile:top-7 mobile:right-1">
            <ToggleTheme />
          </div>
          <div className="absolute top-11 right-[100px] z-[100] mobile:top-3 mobile:right-1 laptop:right-[100px]">
            <ToggleLanguage />
          </div>
          <section className="first">
            <div className="outer">
              <div className="inner">
                <AvartaInfo />
              </div>
            </div>
          </section>
          <section className="second">
            <div className="outer">
              <div className="inner">
                <Intro />
              </div>
            </div>
          </section>
          <section className="fourth">
            <div className="outer">
              <div className="inner">
                <Experience />
              </div>
            </div>
          </section>
          <section className="fifth">
            <div className="outer">
              <div className="inner">
                {width > 1279 ? <Portfolio /> : <NotSupport />}
              </div>
            </div>
          </section>
          <section className="sixth">
            <div className="outer">
              <div className="inner">
                <Footer />
              </div>
            </div>
          </section>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
