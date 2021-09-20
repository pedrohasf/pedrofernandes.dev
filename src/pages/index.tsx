import Head from "next/head";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SiGithub, SiGooglemaps, SiLinkedin, SiTwitter } from "react-icons/si";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className="py-5 bg-gray-100 dark:bg-black min-h-screen">
      <Head>
        <title>Pedro Fernandes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-10/12 mx-auto">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800 mb-4"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 text-gray-800 dark:text-gray-200"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        <div className="px-5">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Hey, I’m Pedro Fernandes
          </h1>
          <p className="text-lg">
            I am a Front-End Developer that also have knowledge of Back-End
            development. Developed 2 SaaS end-to-end all by myself. Working with
            React.js, Next.js and Node.js since the end of 2019. Always aiming
            to create value through technology.
          </p>
          <ul className="my-6">
            <li className="text-2xl mb-3">
              <a
                className="flex items-center"
                href="https://twitter.com/phasfernandes"
              >
                <SiTwitter className="mr-2" /> TWITTER
              </a>
            </li>
            <li className="text-2xl mb-3">
              <a
                className="flex items-center"
                href="https://github.com/pedrohasf"
              >
                <SiGithub className="mr-2" /> GITHUB
              </a>
            </li>
            <li className="text-2xl">
              <a
                className="flex items-center"
                href="https://www.linkedin.com/in/pedrohasf/"
              >
                <SiLinkedin className="mr-2" /> LINKEDIN
              </a>
            </li>
          </ul>
          <p className="text-lg">
            Have a professional opportunity you feel I may be interested in?
            Email me at{" "}
            <a
              className="font-bold underline"
              href="mailto:pedrohasftb@gmail.com"
            >
              pedrohasftb@gmail.com
            </a>{" "}
            or reach out on any of my social networks.
          </p>
          <p className="flex text-lg mt-24 items-center text-center justify-center">
            <SiGooglemaps className="mr-2" />
            Goiânia, Brazil
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
