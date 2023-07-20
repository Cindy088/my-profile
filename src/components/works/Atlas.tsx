import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';

const Atlas = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='w-full'
    >
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
        Accountant
      </h3>
      <p className='text-sm mt-1 font-medium text-textDark'>2017 - 2022</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          As an accountant of a residential and commercial real-estate
          development and investment company in NSW for five years, I am an
          expertise in MYOB essential accounting software, Business Activity
          Statement, bank reconciliation and journal entries.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Interacted directly with stakeholders like employees, sub contractors,
          banks, ATO, external auditors
        </li>

        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Registered as a CPA Australia member in 2018, and became a certified
          CPA Australia in 2020.
        </li>
      </ul>
    </motion.div>
  );
};

export default Atlas;
