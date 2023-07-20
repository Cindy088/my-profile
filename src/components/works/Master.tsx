import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';

const Master = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='w-full'
    >
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
        Master of Commerce (Professional Accounting)
      </h3>
      <p className='text-sm mt-1 font-medium text-textDark'>2015 - 2017</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Learned my accounting skills and expertise on MYOB accounting software
          and developed a down to details character.
        </li>

        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Worked as an Intern Accountant at Fortuna Accountants & Business
          Advisors, Perth. Developed team work with colleagues and communication
          skills with clients.
        </li>
      </ul>
    </motion.div>
  );
};

export default Master;
