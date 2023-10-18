"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { IoHome } from 'react-icons/io5'
import { BiLogoFacebookCircle} from 'react-icons/bi'
import Spinner from "@/components/spinner/Spinner";


const LoginPage = () => {
 const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
              <Spinner></Spinner>
           </div>;
  }

  if (status === "authenticated") {
    router.push("/")
  }
  return (
   
   <div className='relative min-h-screen '>
      <div className='border absolute backdrop-blur-lg top-[6%] left-[5%] lg:left-[10%] shadow-xl !rounded-[30px] p-10 w-[90%] lg:w-[80%] h-[80vh] background-gradient-color  '>
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
                  <h1 className=' md:text-xl text-lg lg:text-3xl  text-cyan-600 font-merriweather font-semibold'>Login to Your Account </h1>
                </div>

                <div className='mt-5 flex justify-center flex-col items-center gap-5 lg:w-[40%] w-[80%]'>
                  <button onClick={() => signIn("google") }
                   className=' border  flex items-center justify-evenly  font-semibold text-sm  bg-sky-200/40 rounded-xl py-2 w-full focus:scale-95 duration-300 ease-in-out transition-all hover:bg-sky-400/40' type='button'><span ><FcGoogle />
                  </span> Sign in with Google <span></span></button>
                  <button onClick={() => signIn("github") } className='  border  flex items-center justify-evenly  font-semibold text-sm  bg-sky-200/40 rounded-xl py-2 w-full focus:scale-95 duration-300 ease-in-out transition-all hover:bg-sky-400/40' type='button'><span ><BsGithub />
                  </span> Sign in with GitHub<span></span></button>               
                </div>
                <div className="lg:my-12 md:my-8 my-4 lg:w-[50%] text-center w-[80%] lg:text-sm text-xs">Click <span className="text-sky-600">“Sign In”</span>  to accept our <span className="border-b-[0.3px] hover:border-sky-600">Terms of Service</span> and <span className="border-b-[0.3px] hover:border-sky-600"> Privacy Policy</span> .</div>

              </div>
            </div>
  
  
      </div>
    </div>

  );
};

export default LoginPage;
