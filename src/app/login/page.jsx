"use client";

import Image from "next/image";
import Link from "next/link";
import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { IoHome } from 'react-icons/io5'
import { BiLogoFacebookCircle} from 'react-icons/bi'
import backgroundPhoto from '@/assets/loginPagePhoto.jpeg'

const LoginPage = () => {
 
  
  return (
   
   <div className='relative min-h-screen '>
      <div>
        <Image src={backgroundPhoto} alt='' className='h-[100vh] lg:w-[70%] w-full'  />
      </div>
      <div className='border absolute backdrop-blur-lg top-[10%] left-[5%] lg:left-[10%] shadow-xl !rounded-[30px] p-10 w-[90%] lg:w-[80%] h-[80vh] background-gradient-color  '>
            <div className='w-full py-10'>
              <div className='flex  justify-center  items-center w-full '>
                <Link href="/">
                  <button className=' flex items-center lg:gap-3 gap-1 lg:text-sm text-xs font-semibold  lg:px-4 px:2 border rounded-full p-1.5' type='button'>
                    Back to Home  <IoHome className=''  />
                  </button>
                </Link>
                
              </div>
              <div className='mt-3 flex flex-col items-center'>
                <div>
                  <h1 className=' md:text-xl text-lg lg:text-3xl  text-[#3b2250] font-semibold'>Login to Your Account </h1>
                </div>

                <div className='mt-5 flex justify-center flex-col items-center gap-5 lg:w-[40%] '>
                  <button className=' border  flex items-center justify-evenly  font-semibold text-sm  bg-[#871ae00e] rounded-xl py-2 w-full focus:scale-95 duration-300 ease-in-out transition-all hover:bg-[#871ae02d]' type='button'><span ><FcGoogle />
                  </span> Sign in with Google <span></span></button>
                  <button className='  border  flex items-center justify-evenly  font-semibold text-sm  bg-[#871ae00e] rounded-xl py-2 w-full focus:scale-95 duration-300 ease-in-out transition-all hover:bg-[#871ae02d]' type='button'><span ><BsGithub />
                  </span> Sign in with GitHub<span></span></button>
                  <button className='border pl-1 flex items-center justify-evenly  font-semibold text-sm  bg-[#871ae00e] rounded-xl py-2 w-full focus:scale-95 duration-300 ease-in-out transition-all hover:bg-[#871ae02d]' type='button'><span className="mr-1"><BiLogoFacebookCircle />
                  </span> Sign in with Facebook<span></span></button>
                  
                </div>

              </div>
            </div>
  
  
      </div>
    </div>

  );
};

export default LoginPage;
