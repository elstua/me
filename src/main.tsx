import { useEffect, useState } from 'react';
import Cave from './Cave';
import './Cave.css';

type Theme = 'light' | 'dark';

export default function FirstScreen() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'dark') setTheme('dark');
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b0907' : '#fff7ed');
  }, [theme]);

  return (
    <main className="cave-page" id="main" data-theme={theme}>
      <Cave theme={theme} onToggleTheme={() => setTheme((current) => current === 'light' ? 'dark' : 'light')} />

      <section className="intro" aria-labelledby="intro-title">
        <h1 id="intro-title">Hi, I'm Artem Savelev, Product Designer</h1>
        <div className="bio">
          <p>From pre-seed startups to large corporations, for the last 10 years I've explored ways to give people new angles on their everyday tasks.</p>
          <p>Believe that software is a culture medium and a story.</p>
          <p>It offers teams a journey of decisions and ideas that evolve into greatness and something worth of building.</p>
        </div>

        <a className="contact-link" href="mailto:stua@fastmail.com">
          <span className="contact-default">Let's work together</span>
          <span className="contact-email">stua@fastmail.com</span>
        </a>

        <div className="personal-details">
          <div>
            <span>Social</span>
            <a href="https://x.com/s_II_a" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com/in/stua" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div>
            <span>City</span>
            <p>Lisbon</p>
          </div>
        </div>
      </section>
    </main>
  );
}
