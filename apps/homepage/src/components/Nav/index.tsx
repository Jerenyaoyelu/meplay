'use client';

import { routes } from "@/app/routes";
import { PageCarousel } from "../Carousel";
import { IconSvg } from '@meplay/react';
import { useState } from "react";


export const Nav = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={`${show ? 'bg-zinc-400' : ''} flex justify-center absolute top-0 left-0 w-full z-20`}>
      {
        show ? (
          <PageCarousel className="cursor-pointer" pages={routes} onClick={() => {
            setShow(false);
          }} />
        ) : (
          <div onClick={() => {
            setShow(true);
          }} className="cursor-pointer p-2">
            <IconSvg size={18} name="ico-two-down-arrow" url="//at.alicdn.com/t/c/font_3352463_nja696cwlcn.js" />
          </div>
        )
      }
    </div>
  )
}