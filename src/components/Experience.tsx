import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import FotoPie from './works/FotoPie';
import Lenovo from './works/Lenovo';
import Master from './works/Master';
import Atlas from './works/Atlas';

const Experience = () => {
  // set state
  const [LenovoStatus, setLenovoStatus] = useState(false);
  const [MasterStatus, setMasterStatus] = useState(false);
  const [AtlasStatus, setAtlasStatus] = useState(false);
  const [FotoPieStatus, setFotoPieStatus] = useState(true);

  // set onClick handler
  const handleLenovoCompany = () => {
    setLenovoStatus(true);
    setMasterStatus(false);
    setAtlasStatus(false);
    setFotoPieStatus(false);
  };

  const handleMaster = () => {
    setLenovoStatus(false);
    setMasterStatus(true);
    setAtlasStatus(false);
    setFotoPieStatus(false);
  };

  const handleAtlasCompany = () => {
    setLenovoStatus(false);
    setMasterStatus(false);
    setAtlasStatus(true);
    setFotoPieStatus(false);
  };

  const handleFotoPieCompany = () => {
    setLenovoStatus(false);
    setMasterStatus(false);
    setAtlasStatus(false);
    setFotoPieStatus(true);
  };

  return (
    <section
      id='experience'
      className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'
    >
      <SectionTitle title='My Experience' titleNo='02' />

      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          <li
            onClick={handleFotoPieCompany}
            className={`${
              FotoPieStatus
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            FotoPie
          </li>
          <li
            onClick={handleAtlasCompany}
            className={`${
              AtlasStatus
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            Atlas
          </li>
          <li
            onClick={handleMaster}
            className={`${
              MasterStatus
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            Master
          </li>
          <li
            onClick={handleLenovoCompany}
            className={`${
              LenovoStatus
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            Lenovo
          </li>
        </ul>

        {/* only render the component that is true */}
        {LenovoStatus && <Lenovo />}
        {MasterStatus && <Master />}
        {AtlasStatus && <Atlas />}
        {FotoPieStatus && <FotoPie />}
      </div>
    </section>
  );
};

export default Experience;
