import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// image
import profile from "./profile.jpeg";
// components
import BackButton from "../../components/BackButton/BackButton";
import Projects from "../../components/BackButton/Projects/Projects";
import SocialMedia from '../../components/SocialMedia/SocialMedia';

export default function Profile() {
  useEffect(() => {
    AOS.init(); // Initialize AOS when component mounts
  }, []);

  return (
    <div>
     <header>
      <h1 className='kode-mono-text text-[4rem] text-center p-4 underline decoration-from-font'  data-aos="fade-down">Profile</h1>
     </header>
      <div className="flex justify-center items-center flex-col my-8 ">
        <img
          className="h-64 w-64 shadow-stone-400 shadow-md  rounded-3xl hover:shadow-purple-300  duration-200 "
          src={profile}
          alt=""
          data-aos="zoom-out"
        />
        <h1 className="kode-mono-text text-[1.5rem] my-4 md:text-[4rem] xl:text-[4rem]">
          Hey i'm a <span></span>
          <a href="https://www.instagram.com/idkconundrum_/" target="_blank" className="cursor-pointer  hover:underline decoration-from-font ">Sujan Thapa</a>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row xl:flex-row ">
        <div className=" w-screen p-8 md:w-[50%] xl:w-[50%] ">
          <h1 className="kode-mono-text text-3xl  ">this is heading</h1>
          <span>
            Lorem ipsum, dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim voluptatibus impedit consectetur nemo repellendus eveniet quia sit? Adipisci sapiente maxime et atque, molestias quibusdam, suscipit, consequatur repellat est facilis neque! amet consectetur adipisicing elit. Dolor dolorem repellat voluptas itaque officia harum alias hic laudantium natus, nam atque non.
          </span>
        </div>
        <div className=" w-screen p-8 md:w-[50%] xl:w-[50%]">
          <h1 className="kode-mono-text text-3xl">this is heading</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, nobis dicta. Tenetur quae voluptatum necessitatibus accusantium ex quaerat amet in esse earum laudantium quis doloribus labore hic, facere culpa molestias est sed! Quod voluptatibus officia sit nam vitae laboriosam minima repudiandae vero saepe asperiores, molestias quia libero iusto laudantium autem cum tenetur eum esse odit qui perspiciatis aliquid doloremque. Doloribus, eos voluptatum esse facere maiores sit nulla officiis natus autem ut voluptate dolores distinctio accusamus consectetur inventore quae reiciendis cumque? Unde, aut dolorem. Natus, sint. Est natus error dolorum, corrupti sit inventore nisi nostrum officiis perferendis magni assumenda architecto.
          </span>
        </div>
      </div>

      <section className=''>
        <h1 className='kode-mono-text text-3xl text-center p-4 md:p-12 xl:p-12'>Projects</h1>
        <div>
          <Projects></Projects>
        </div>
        <div className='my-12'>
          <SocialMedia></SocialMedia>
        </div>
      </section>
      <BackButton />
    </div>
  );
}
