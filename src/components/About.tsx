import SectionTitle from './SectionTitle';
import { AiFillThunderbolt } from 'react-icons/ai';
import Image from 'next/image';
import profile from '../../public/profile.jpg';

const About = () => {
  return (
    <section
      id='about'
      className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
      <SectionTitle title='About Me' titleNo='01' />

      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
          {/* Introduction */}
          <p>
            Hello! My name is Cindy and I enjoy creating things that live on the
            Internet. I am a QA Engineer and Full Stack Developer with over one
            year web development experience and a background in accounting.
          </p>
          <p>
            In the past few months, I have built a few team and individual full
            stack projects, which showcasing my ability to adapt and learn{' '}
            <span className='text-textGreen'>new skills and technologies.</span>
          </p>
          <p>
            Apart from technical skills, I also bring with me a lot of{' '}
            <span className='text-textGreen'>transferable soft skills</span>{' '}
            from my previous roles, such as problem-solving, communication, team
            work and quick learning abilities and stakeholder management, which
            proved to be very useful in working environment involving multiple
            stakeholders.
          </p>
          <p> Here are the tech stacks I have been working with recently:</p>

          {/* Tech Stack */}
          <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-4 gap-2 mt-6'>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Javascript
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Typescript
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>

            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              HTML5
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              CSS3
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Material UI
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Bootstrap
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              AzureSQL
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Redux
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Jest/Mocha
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Git/Github
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Agile
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Linux
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              SQL
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Selenium
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Cypress
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              JMeter
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              Jira/Azure
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'>
                <AiFillThunderbolt />
              </span>
              AzureDevops
            </li>
          </ul>
        </div>

        {/* Photo */}
        <div className='w-full lgl:w-1/3 h-80 relative group'>
          <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
            <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
              <Image
                src={profile}
                alt='image'
                className='rounded-lg h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
