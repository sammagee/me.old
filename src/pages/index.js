import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  return (
    <main className="flex items-center justify-center min-h-screen w-full">
      <Helmet>
        <title>Sam Magee - Fullstack Devsigner</title>
        <meta name="description" content="Hey there! My name is Sam Magee. I'm a fullstack developer and designer based in Iowa, but willing to work with anyone, anywhere!" />
        <meta name="keywords" content="sam magee, sam, magee, designer, developer, web designer, web developer, full stack, full stack developer, full-stack, fullstack" />
        <meta name="author" content="Sam Magee" />
        <meta name="copyright" content="Sam Magee" />
      </Helmet>

      <header className="fixed flex items-center justify-between left-0 right-0 top-0 p-8 z-10">
        <div className="flex-1">
          <a className="flex h-24 w-24 rise rounded-full text-yellow-400" href="/" aria-label="Home">
            <svg className="rounded-full h-24 w-24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="128" height="128" rx="64" fill="#1A202C" />
              <path d="M84.454 74.038C84.454 66.166 76.486 59.446 72.358 53.782C81.958 44.182 78.406 37.75 70.15 37.75C63.046 37.75 55.558 42.07 55.558 49.558C55.558 51.67 56.23 53.686 57.19 55.606C54.022 58.102 49.606 60.982 43.75 64.534L46.534 70.486C52.582 67.51 57.67 64.726 61.798 62.038C66.214 66.934 71.206 71.254 71.206 74.71C71.206 78.166 65.638 79.126 48.742 78.262L48.454 90.262C76.294 90.55 84.454 82.678 84.454 74.038Z" fill="currentColor" />
            </svg>
          </a>
        </div>

        {/* <nav className="flex flex-1 items-center justify-center mx-auto navigation">
          <a className="active" href="#">Home</a>
          <a className="mx-4" href="#">About</a>
          <a className="mx-4" href="#">Projects</a>
        </nav> */}

        <div className="flex flex-1 items-center justify-end">
          <div className="navigation">
            <a className="flex items-center" href="https://github.com/sammagee" target="_blank" rel="noopener noreferrer">
              <svg className="text-gray-600 h-4 w-4" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>

              <span className="link-text ml-1 mt-1 text-white">GitHub</span>

              <svg className="ml-1 h-3 w-3 text-gray-700" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          <a className="contact-button bg-yellow-400 flex items-center ml-6 px-6 py-3 rise rounded-full text-yellow-900 uppercase" href="mailto:hi@sammagee.me">
            <span className="mr-2 mt-1">Contact</span>

            <svg className="fill-current text-yellow-700 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
            </svg>
          </a>
        </div>
      </header>

      <div className="flex h-screen items-center justify-center">
        <hgroup>
          <h1 className="font-bold text-white text-5xl">Sam Magee</h1>
          <h2 className="font-bold text-gray-500 text-2xl text-right">Devsigner</h2>
        </hgroup>
      </div>
    </main>
  );
}

export default Index;
