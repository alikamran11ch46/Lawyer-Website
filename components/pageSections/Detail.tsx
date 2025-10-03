import React from "react";
import BannerMaker from "../BannerMaker";
import Image from "next/image";

export default function Detail() {
  return (
    <div className=" mb-20">
      <BannerMaker title="Legal Ruling on Marital Infidelity" banner="detailbg" />

      <section className=" w-full px-5  md:px-10  leading-9 font-bold text-justify  text-[17px] mt-10 ">
        <p>
          A person who has been given authority by a client to defend them in various fields is called a lawyer. Finding the best lawyer in Tehran may seem difficult for some; because Tehran, as the capital of the country, is a very large and populous city with many lawyers. If you want to get your rights in legal matters and criminal, family lawsuits, we suggest you consult a good and skilled lawyer. A Tehran lawyer must have obtained a license to practice law so that with sufficient expertise and experience, he can solve your problem. So it is very important that during the consultation process, he explains a few examples of successful cases for you. In general, a Tehran lawyer with a series of special characteristics and features increases your chances of winning in court. In the following, by introducing the best first-class court lawyer in Tehran, we will help you defend your rights in various lawsuits and be the final winner of the court.
        </p>

        <h1 className=" mt-10 text-[24px] ">
        Who is a Tehran Lawyer?
        </h1>

        <p className=" mt-5">
        According to the law, every person has the right to hire a lawyer for matters that he himself is capable of doing. Therefore, a Tehran lawyer is not someone who is only present in court; because administrative affairs and any kind of transaction on behalf of the client are also carried out under his supervision. The best lawyer in Tehran, as an experienced person in solving criminal and legal disputes, claims and with mastery of legal materials and provisions, he can help the client's victory and close the case.
        </p>

        <div className=" w-full flex justify-center items-center mt-10 ">

        <Image src='/homepic/depic.jpg' alt="pic" className=" w-[35rem] shadow-2xl" width={300} height={200}/>

        </div>
      </section>
    </div>
  );
}
