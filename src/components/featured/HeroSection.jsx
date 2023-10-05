import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="mt-6">
      <h1 className={styles.title}>
        <b>Hey, I am Hasan Mt!</b> Discover my stories and creative ideas.
      </h1>
      <div className={`${styles.post} lg:mt-14 md:mt-10 mt-7`}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className={styles.textContainer}>
          <h1 className="lg:text-[2.2rem] md:text-[1.2rem] text-[0.8rem]">Our platform, Collaborative Mindspace, is a dynamic online space that welcomes voices from all walks of life.</h1>
          <p className={`${styles.postDesc} lg:text-[2rem] md:text-[0.6rem] text-[0.8rem] `}>
             It is your canvas for self-expression, where individuals from around the world come together to share their thoughts, stories, and opinions. Whether you are a seasoned writer or a first-time contributor, here, your voice matters. Join our inclusive community and contribute your unique perspective to the ever-growing tapestry of human thought.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
