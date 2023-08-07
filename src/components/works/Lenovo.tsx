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
        {/* Business Specialist of Global Supply Chain */}
        QA Tester / Frontend Developer (intern)
      </h3>
      <p className='text-sm mt-1 font-medium text-textDark'>2023</p>
      {/* <p className='text-sm mt-1 font-medium text-textDark'>2010 - 2011</p> */}
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          {/* Used SAP system to manage over 500 PC purchase orders per month and
          coordinated with internal stakeholders to ensure timely and accurate
          delivery of orders. */}
          I involved in the quality assurance and development of an online
          platform for fresh farm picking using React.js, Javascript,
          Typescript, Redux, Node.js, Azure SQL and serverless Azure services.
        </li>

        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          I participated in test plans and test cases, performed manual and
          automated testing including functional and interface testing. I also
          utilized various testing tools like Postman, Selenium WebDriver,
          Cypress and JMeter to ensure the quality and reliability of the
          platform.
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          We used Azure DevOps as Agile development practices for efficient
          project management. I collaborated with Business Analysts, developers,
          and DevOps team to identify and analyze issues and risks during the
          project.
        </li>
      </ul>
      <br />
      {/* <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
        Administrator of Senior Vise President Office
      </h3>
      <p className='text-sm mt-1 font-medium text-textDark'>2011 - 2015</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
          Managed Lenovo ERP system and microsoft 365 software to schedule
          agendas, budget planning and business travel plans for the Senior Vice
          President’s office and provide support for company conferences and
          events.
        </li>
      </ul> */}
    </motion.div>
  );
};

export default Lenovo;
