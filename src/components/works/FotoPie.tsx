import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';

const FotoPie = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='w-full'
    >
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
        Full Stack Developer / QA Tester (Freelance)
      </h3>
      <p className='text-sm mt-1 font-medium text-textDark'>2022 - 2023</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          In project FotoPie, I built frontend components and pages using
          Next.js, Typescript, Redux and MUI, as well as crafting API requests
          with Axios, and conducting unit testing with Jest.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          On the backend, I design API interfaces using Nest.js controllers and
          Typescript, while creating CRUD services for MongoDB interactions
          through Mongoose.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          In addition to development, I have conducted functional and interface
          testing to ensure the quality and reliability of the platform. I have
          also used Postman to test backend APIs and Selenium WebDriver to test
          cross-browser compatibility.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          As a member of a 16-member team comprising Business
          Analysis,developers, and DevOps personnel, we utilize Jira for ticket
          delivery and foster collaboration among team members using Git/Github.
        </li>
      </ul>
    </motion.div>
  );
};

export default FotoPie;
