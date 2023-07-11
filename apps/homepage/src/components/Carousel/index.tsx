'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";


export interface CarouselItemType {
  path: string;
  cover: string;
}

export interface PageCarouselProp {
  pages: CarouselItemType[];
  className?: string;
  onClick?: () => void;
}

export const PageCarousel: React.FC<PageCarouselProp> = ({ pages, className, onClick }) => {
  const router = useRouter();

  return (
    <div className={className + ' w-fit h-fit'}>
      <div className="carousel rounded-box">
        {
          pages.map((p, i) => {
            return (
              <div onClick={() => {
                router.push(p.path);
                setTimeout(() => {
                  onClick?.();
                }, 0)
              }} id={'page-' + i} key={i} className="carousel-item h-[200px]">
                <Image width={400} height={200} src={p.cover} alt="" className="w-full" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}