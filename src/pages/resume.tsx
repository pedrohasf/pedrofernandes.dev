import Head from "next/head";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Resume = () => {
  return (
    <div className="prose max-w-none mx-auto py-5 px-8 dark:text-white">
      <Head>
        <title>Pedro Fernandes | Front-End Developer</title>
      </Head>
      <h1 className="text-center dark:text-white">Pedro Fernandes</h1>
      <div className="flex divide-x-2 divide-gray-800 justify-center">
        <span className="text-lg flex items-center px-2">
          Front-End Developer
        </span>
        <span className="text-lg flex items-center px-2">Goiânia, Brazil</span>
        <span className="text-lg flex items-center px-2">July 8, 2001</span>
      </div>
      <div className="flex divide-x-2 divide-gray-800 justify-center my-2">
        <span className="text-lg flex items-center px-2">
          <FiMail size={16} className="mr-2" />
          pedrohasftb@gmail.com
        </span>
        <a
          href="https://github.com/pedrohasf"
          className="text-lg flex items-center px-2"
        >
          <FiGithub size={16} className="mr-2" /> pedrohasf
        </a>
        <a
          href="https://www.linkedin.com/in/pedrohasf/"
          className="text-lg flex items-center px-2"
        >
          <FiLinkedin size={16} className="mr-2" /> pedrohasf
        </a>
      </div>
      <div className="border-b-4 pb-5">
        <h2 className="dark:text-white">Summary</h2>
        <div>
          <p>
            I am a Front-End Developer that also have knowledge of Back-End
            development. Developed 2 SaaS end-to-end all by myself. Working with
            React.js, Next.js and Node.js since the end of 2019. Always aiming
            to create value through technology.
          </p>
        </div>
      </div>
      <div className="border-b-4 pb-5">
        <h2 className="dark:text-white">Work Experience</h2>
        <div className="border-b">
          <div className="flex">
            <h4 className="dark:text-white">Freelancer</h4>
            <div className="flex flex-col justify-end text-sm ml-auto">
              <span>Brazil</span>{" "}
              <span className="text-blue-800 dark:text-blue-500">
                Mar 2021 - Present
              </span>
            </div>
          </div>
          <ul>
            <li>Worked for multiple companies mostly with webdesign.</li>
            <li>
              Learned a lot about UX and creating pages that convert in new
              users and sales.
            </li>
            <li>
              Tech stack: React.js, jQuery, Vanilla JS, HTML and CSS, Webflow,
              Wordpress.
            </li>
          </ul>
        </div>
        <div className="border-b">
          <div className="flex">
            <h4 className="dark:text-white">Zape - CTO & Co-founder</h4>
            <div className="flex flex-col justify-end text-sm ml-auto">
              <span>Brazil</span>{" "}
              <span className="text-blue-800 dark:text-blue-500">
                Oct 2020 - Feb 2021
              </span>
            </div>
          </div>
          <ul>
            <li>
              Developed an end to end platform that allowed restaurant owners to
              create an digital menu and receive their orders directly on
              WhatsApp.
            </li>
            <li>About 100 paying users acquired through the SaaS lifetime.</li>
            <li>
              Tech stack: Next.js, TailwindCSS, Node.js, Express.js, MongoDB.
            </li>
          </ul>
        </div>
        <div>
          <div className="flex">
            <h4 className="dark:text-white">
              Futestatisticas - CTO & Co-founder
            </h4>
            <div className="flex flex-col justify-end text-sm ml-auto">
              <span>Brazil</span>{" "}
              <span className="text-blue-800 dark:text-blue-500">
                Jun 2020 - Sep 2020
              </span>
            </div>
          </div>
          <ul>
            <li>
              Developed an end to end platform that allowed sports bettors to
              visualize statistics to help them make the best decision possible.
            </li>
            <li>About 40 paying users acquired through the SaaS lifetime.</li>
            <li>
              Tech stack: Next.js, TailwindCSS, Node.js, Express.js, MongoDB,
              Redis.
            </li>
          </ul>
        </div>
      </div>
      <div className="border-b-4 pb-5">
        <h2 className="dark:text-white">Honors & Awards</h2>
        <h4 className="dark:text-white">
          Hackathon: Decentralized Governance Hackathon -{" "}
          <span className="text-blue-800 dark:text-blue-500 text-sm">
            Sep 2021
          </span>
        </h4>
        <ul>
          <li>
            3rd place - Build A DAO Governance Analytics Dashboard Or
            Leaderboard
          </li>
        </ul>
      </div>
      <div className="border-b-4 pb-5">
        <h2 className="dark:text-white">Languages</h2>
        <ul>
          <li>English: Fluent</li>
          <li>Portuguese: Native</li>
        </ul>
      </div>
      <div>
        <h2 className="dark:text-white">Education</h2>
        <h4 className="dark:text-white">UFG (Universidade Federal de Goiás)</h4>
        <ul>
          <li className="flex items-center">
            <span>Bachelor's degree in Software Engineering</span>
            <span className="text-sm text-blue-800 dark:text-blue-500 ml-12">
              2019 - 2022
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
