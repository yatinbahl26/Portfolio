/* eslint-disable react/jsx-no-comment-textnodes */
import { BiSolidRightArrow } from "react-icons/bi";

const About = () => {
  const items = [
    {
      skill: "HTML",
    },
    {
      skill: "CSS",
    },
    {
      skill: "JAVASCRIPT",
    },
    {
      skill: "REACTJS",
    },
    {
      skill: "PYTHON",
    },
    {
      skill: "ANIMATIONS",
    },
    {
      skill: "GIT & GITHUB",
    },
    {
      skill: "NPM",
    },
    {
      skill: "TAILWIND CSS",
    },
    {
      skill: "AXIOS/FETCH API",
    },
  ];

  return (
    <div
      className='flex flex-col items-start justify-center w-full mt-28 px-8 md:px-14 md:mt-40 lg:flex-row lg:px-24 
    lg:items-center lg:justify-between xl:px-52 xl:mt-72'
    >
      <div className='flex flex-col items-start justify-center w-full lg:w-[55%]'>
        <div className='flex items-center justify-start w-full mb-5 md:w-[60%] lg:w-full'>
          <p className='text-[15px] mt-1 md:mt-2 md:text-[19px] lg:text-[20px] xl:mt-1'>
            01.
          </p>
          <p className='text-[23px] font-medium ml-2 whitespace-nowrap text-[#C4C4C4] md:text-[27px] md:font-bold lg:text-[28px]'>
            About Me
          </p>
          <hr className='border-[0.01em] border-[#3d3b4b] w-full ml-2' />
        </div>
        <div className='md:w-[90%] lg:-[100%]'>
          <p>
            As a frontend developer, Welcome to my portfolio as a Frontend
            Developer! I am passionate about creating engaging and user-friendly
            web experiences that not only look visually stunning but also
            function seamlessly. With a keen eye for design, a strong grasp of
            modern web technologies, and a commitment to delivering top-notch
            user interfaces, I&apos;ve curated a selection of my work to
            showcase my skills and expertise in the field of frontend
            development.
            <br></br>
            <br></br>
            Project Name: Bankist: Developed a responsive loan platform from
            scratch, implementing a clean and intuitive user interface. Utilized
            HTML5, CSS3, and JavaScript to create a smooth loan experience.
            Technologies Used: HTML5, CSS3, JavaScript.
            <br></br>
            <br></br>
            Project Name: Tip Calculator: Developed a responsive tip-calculator
            platform from scratch, implementing a clean and intuitive user
            interface. Utilized HTML5, CSS3, and JavaScript to create a smooth
            calculation experience. Technologies Used: HTML5, CSS3, JavaScript.
          </p>
        </div>
      </div>

      <div className='mt-5 md:w-[60%] md:mt-8 lg:w-[40%] lg:mt-0 lg:ml-10'>
        <div className='xl:mb-6'>
          <h1 className='text-[21px] font-bold mb-4 text-[#df91f7] xl:text-[27px]'>
            Skills
          </h1>
        </div>
        <div className='flex flex-wrap items-start justify-between w-full'>
          {items.map((item) => {
            return (
              <div
                key={item.index}
                className='flex items-center justify-start w-[40%] mb-8'
              >
                <BiSolidRightArrow className='text-[#df91f7] text-[12px]' />
                <p className='text-[12px] text-[#C4C4C4] ml-2 whitespace-nowrap lg:text-[13px] xl:text-[16px]'>
                  {item.skill}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
