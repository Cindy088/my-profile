import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';

const Lenovo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='w-full'
    >
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
        Business Specialist of Global Supply Chain
      </h3>
      <p className='text-sm mt-1 font-medium text-textDark'>2010 - 2011</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Managed over 500 PC purchase orders per month and coordinated with
          internal stakeholders to ensure timely and accurate delivery of
          orders.
        </li>
      </ul>
      <br />
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
        Administrator of Senior Vise President Office
      </h3>
      <p className='text-sm mt-1 font-medium text-textDark'>2011 - 2015</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Scheduled agendas, budget planning and business travel plans for the
          Senior Vice President’s office and provide support for company
          conferences and events.
        </li>
      </ul>
    </motion.div>
  );
};

export default Lenovo;
