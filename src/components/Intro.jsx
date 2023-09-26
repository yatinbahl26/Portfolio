import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const Intro = () => {
  return (
    <div className='poppins flex flex-col items-start justify-end w-full px-8 mt-56 md:px-14 md:w-[85%] lg:w-full lg:px-24 lg:mt-40 xl:px-52 xl:mt-48'>
      <p className='text-[14px] text-[#C4C4C4] font-light mb-1 md:font-light md:mb-2 md:text-[16px] lg:mb-1'>
        Hi, Welcome to
      </p>
      <h1 className=' text-[38px] font-bold leading-[95px]  mb-1 txt md:text-[48px] lg:text-[55px] xl:text-[80px] font-peralta'>
        YATIN&apos;S
      </h1>
      <div className='flex z-10 justify-center sm:mt-0 mt-[-60px] sm:mb-0 mb-[-20px] font-peralta'>
        <h1 className='sm:text-[80px] text-[50px] txt uppercase font-bold leading-[114px] z-10 flex justify-center items-center '>
          Wo
        </h1>
        <h1 className='txt sm:text-[80px] text-[45px] uppercase font-bold leading-[114px] z-10 flex justify-center items-center'>
          rld
        </h1>
      </div>

      <p className='text-[13px] font-normal leading-5 text-[#C4C4C4] md:text-[15px] md:leading-6 lg:text-[16px] lg:w-[65%] xl:w-[60%] xl:text-[18px] xl:leading-8 font-peralta'>
        Hello, fellows. Welcome to my portfolio. I am a frontend developer who
        loves to gain knowledge about development and love to evolve in the
        world of frontend development. Just as I am a fresher in this frontend
        developer field, this portfolio will guide you my skills and projects..
      </p>

      <div className='w-full mt-12 lg:hidden'>
        <div className='flex items-start justify-around w-[15%] mb-1 text-[#feed7a] md:mb-2'>
          <a
            href='https://github.com/yatinbahl26'
            target='_blank'
            rel='noreferrer'
          >
            <FiGithub className='text-[16px] md:text-[18px]' />
          </a>
          {/* ERROR */}
          <a
            href='https://www.linkedin.com/in/yatin-bahl-2b57ba230/'
            target='_blank'
            rel='noreferrer'
          >
            <SlSocialLinkedin className='text-[16px] md:text-[18px]' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
