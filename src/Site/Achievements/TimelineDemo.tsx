import React from "react";
import { Timeline } from "./Timeline";
import { title } from "process";
import centralstage from "../../assets/Photos/CentralStage.svg";
import powerplay from "../../assets/Photos/PowerPlay.svg";
import skystone from "../../assets/Photos/SkyStone.svg";
import ultimategoal from "../../assets/Photos/UltimateGoal.svg";
import frightfrenzy from "../../assets/Photos/FREIGHTFRENZY.png";
import intothedeep from "../../assets/Photos/IntoTheDeep.png";

export function TimelineDemo() {
  const data = [
    {
      title: (
        <div className="flex items-center">
          <img src={intothedeep} alt="IntoTheDeep" className="w-1/3 h-1/3 mr-5" />
          <span className="">2024-2025 IntoTheDeep</span>
        </div>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          OMG asta chiar merge, nu mai pot, vreau sa dorm
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center">
          <img src={centralstage} alt="CentralStage" className="w-1/2 h-1/2 mr-4" />
          <span>2023-2024 CentralStage</span>
        </div>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          I usually run out of copy, but when I see content this big, I try to
          integrate lorem ipsum.
            
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
           
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center">
          <img src={powerplay} alt="PowerPlay" className="w-1/2 h-1/2 mr-4" />
          <span>2022-2023 PowerPlay</span>
        </div>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 margin-bottom-20">
          Ce vreau eu de Craciun
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            Stardew Valley
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            Sa dorm inconjurat de pisici
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            Sa nu primesc 20 de erori
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              Pelmeni
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center">
          <img src={frightfrenzy} alt="FrightFrenzy" className="w-1/2 h-1/2 mr-4" />
          <span>2021-2022 FrightFrenzy</span>
        </div>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          OMG asta chiar merge, nu mai pot, vreau sa dorm
          </p>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center">
          <img src={ultimategoal} alt="UltimateGoal" className="w-1/2 h-1/2 mr-4" />
          <span>2020-2021 UltimateGoal</span>
        </div>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          OMG asta chiar merge, nu mai pot, vreau sa dorm
          </p>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center">
          <img src={skystone} alt="SkyStone" className="w-1/2 h-1/2 mr-4" />
          <span>2019-2020 SkyStone</span>
        </div>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          OMG asta chiar merge, nu mai pot, vreau sa dorm
          </p>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
export default TimelineDemo;