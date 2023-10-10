import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className=" relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
      <div className="relative z-10">
        <div
            className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true">
                <defs>
                    <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                        patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                        <path d="M.5 200V.5H200" fill="none"></path>
                    </pattern>
                </defs>
                <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
                    <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path>
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                </rect>
            </svg>
        </div>
        
    </div>
      <div className="lg:-mt-28 md:-mt-16 -mt-14">
      <h1 className={`${styles.title} `}>
        <b>Share thoughts and ideas. </b> <br></br>
        Join, be part of global conversation.
      </h1>
      <div className={`${styles.post} lg:mt-14 md:mt-10 mt-7`}>
        <div className={styles.imgContainer}>
          <Image src="/heroPhoto.jpg" alt="" fill className="object-cover z-20" />
        </div>
        <div className={styles.textContainer}>
          <h1 className="lg:text-[2.2rem] md:text-[1.2rem] text-[0.8rem]">Our platform, Collaborative Mindspace, welcomes all voices.</h1>
          <p className={`${styles.postDesc} lg:text-[1.8rem] md:text-[0.8rem] text-[0.6rem] `}>
             Join a global self-expression community. Your perspective matters here. Share stories, thoughts, and connect with voices worldwide.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Featured;
