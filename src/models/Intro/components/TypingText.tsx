import { useEffect, useRef, useState } from 'react';
import { useStyles } from '../styles';
import React from 'react';
import i18next from 'i18next';

interface ITypingText {
  text: string;
  speed: number;
}
export default function TypingText({ text, speed }: ITypingText) {
  const { classes } = useStyles();
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const updateDisplayText = () => {
      setDisplayText('');
    };

    i18next.on('languageChanged', updateDisplayText);

    updateDisplayText();

    return () => {
      i18next.off('languageChanged', updateDisplayText);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let currentIndex = -1;
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length - 1) {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
      return () => clearInterval(typingInterval);
    }
  }, [isVisible, text, speed]);

  return (
    <div className={classes.contentIntro} ref={elementRef}>
      {displayText.split('\n\n').map((paragraph, index) => (
        <React.Fragment key={index}>
          <div>
            {paragraph.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}
