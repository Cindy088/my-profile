import SectionTitle from './SectionTitle';
import Image from 'next/image';
import Fotopie from '../../public/Fotopie.png';
import ILoveIceCream from '../../public/ILoveIceCream.png';
import MyPortfolio from '../../public/MyPortfolio.png';
import FindPrompts from '../../public/FindPrompts.png';
import { TbBrandGithub } from 'react-icons/tb';
import { RxOpenInNewWindow } from 'react-icons/rx';

const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Some Things I Have Built' titleNo='03' />

      <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
        {/* Project One */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6'>
            {/* Left side */}
            <a
              href='https://www.fotopie.net/'
              target='_blank'
              className='w-full xl:w-1/2 h-auto relative group'
            >
              <div>
                <Image
                  src={Fotopie}
                  alt='image'
                  className='w-full h-full object-contain'
                />
              </div>
            </a>
            {/* Right side */}
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>FotoPie</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                As a <span className='text-textGreen'>full stack</span> project,
                FotoPie provides a dynamic and engaging space for users to share
                their favorite photos. Users can upload their own photos and
                subscribe by using{' '}
                <span className='text-textGreen'>Stripe</span>. They can also
                search for photos using keywords, and even generate unique
                images using <span className='text-textGreen'>OpenAI</span>{' '}
                models.
              </p>

              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>Next.js</li>
                <li>Typescript</li>
                <li>Nest.js</li>
                <li>MongoDB</li>
                <li>Stripe</li>
                <li>OpenAI</li>
                <li>AWS S3</li>
              </ul>

              <div className='text-2xl flex gap-4'>
                <a
                  href='https://github.com/Cindy088'
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <TbBrandGithub />
                </a>
                <a
                  href='https://www.fotopie.net/'
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Two */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
            {/* Left side */}
            <a
              href='https://i-love-ice-cream-au.netlify.app/'
              target='_blank'
              className='w-full xl:w-1/2 h-auto relative group'
            >
              <div>
                <Image
                  src={ILoveIceCream}
                  alt='image'
                  className='w-full h-full object-contain'
                />
              </div>
            </a>
            {/* Right side */}
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>I Love Ice Cream Website</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
                This is a static commercial website for ice creams. It is
                designed by using a combination of {''}
                <span className='text-textGreen'>
                  HTML, CSS, and React.
                </span>{' '}
                The website is fully{' '}
                <span className='text-textGreen'>responsive</span>, adapting
                seamlessly to various screen sizes for a top-notch browsing
                experience on any device.
              </p>

              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>React</li>
                <li>React Icon</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>

              <div className='text-2xl flex gap-4'>
                <a
                  href='https://github.com/Cindy088/I-Love-Ice-Cream-React'
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <TbBrandGithub />
                </a>

                <a
                  href='https://i-love-ice-cream-au.netlify.app/'
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Three */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6'>
            {/* Left side */}
            <a
              href='https://cindy-zhang.vercel.app/'
              target='_blank'
              className='w-full xl:w-1/2 h-auto relative group'
            >
              <div>
                <Image
                  src={MyPortfolio}
                  alt='image'
                  className='w-full h-full object-contain'
                />
              </div>
            </a>
            {/* Right side */}
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>My Portfolio</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                Built the frontend project in Next.js with{' '}
                <span className='text-textGreen'>Typescript</span> and adopted
                useState to control the rendering of different sections. Styled
                the website using{' '}
                <span className='text-textGreen'>tailwindcss</span> and added
                loading animations with{' '}
                <span className='text-textGreen'>Framer Motion</span>. Added
                responsive design to the website to fit with different screen
                sizes and deployed the project on Vercel.
              </p>

              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>Next.js</li>
                <li>Typescript</li>
                <li>Tailwindcss</li>
                <li>Frontend</li>
                <li>Responsive Design</li>
                <li>Vercel</li>
              </ul>

              <div className='text-2xl flex gap-4'>
                <a
                  href='https://github.com/Cindy088/my-portfolio'
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <TbBrandGithub />
                </a>
                <a
                  href='https://cindy-zhang.vercel.app/'
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Four */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
            {/* Left side */}
            <a
              href='https://find-prompts.vercel.app/'
              target='_blank'
              className='w-full xl:w-1/2 h-auto relative group'
            >
              <div>
                <Image
                  src={FindPrompts}
                  alt='image'
                  className='w-full h-full object-contain'
                />
              </div>
            </a>
            {/* Right side */}
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>Find Prompts</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
                Find Prompts is a is a full stack platform to help users find
                and share prompts for ChatGPT. It is built with{' '}
                <span className='text-textGreen'>Next.js</span> for frontend
                pages,{' '}
                <span className='text-textGreen'>Node.js and MongoDB</span> for
                backend API endpoints and data storage, and
                <span className='text-textGreen'>Google OAuth</span> for user
                authentication, providing secure sign-in through Google
                accounts.
              </p>

              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>React.js</li>
                <li>Tailwindcss</li>
                <li>Next.js</li>
                <li>NextAuth</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Google OAuth</li>
              </ul>

              <div className='text-2xl flex gap-4'>
                <a
                  href='https://github.com/Cindy088/FindPrompts'
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <TbBrandGithub />
                </a>
                <a
                  href='https://find-prompts.vercel.app/'
                  target='_blank'
                  className='hover:text-textGreen duration-300'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
