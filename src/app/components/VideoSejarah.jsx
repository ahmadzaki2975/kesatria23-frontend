import Image from "next/image";
import Link from "next/link";

export default function VideoSejarah() {
  return (
    <section className="min-h-screen flex flex-col bg-pattern-cream bg-repeat justify-center items-center pt-28 pb-36 lg:pt-0 lg:pb-0 gap-20 lg:gap-15">
      
      {/*Sejarah Teknik*/}
      <div about="Sejarah Teknik" className="flex flex-col lg:flex-row w-4/5 gap-14 lg:gap-28 items-center justify-center">
        <div>
          <h1 className="font-alstoria text-green-400 text-[40px] md:text-[60px] text-center lg:text-left">
            Sejarah Teknik
          </h1>
          <p className="font-creato font-medium max-w-[700px] text-[18px] sm:text-[20px] 2xl:text-[25px] text-green-400 text-center lg:text-left">
            Fakultas Teknik merupakan salah satu fakultas tertua di indonesia.
            Jadi kita harus belajar tentang sejarahnya! Fakultas teknik adalah
            yang terbaik. Senang bisa tembus  ke teknik hihi. Semoga IPK aman :D
          </p>
        </div>
        <div id="video-sejarah-teknik" className="relative flex justify-center items-center aspect-video bg-red-100 rounded-2xl min-w-[300px] md:min-w-[550px] lg:min-w-[400px]">
          <div className="relative z-10 h-40 md:h-72 lg:h-52 aspect-video overflow-hidden rounded-xl">
            <iframe
            src="https://www.youtube.com/embed/cAfRzKW-Tyw"
            className="w-full h-full"
            allowFullScreen />
          </div>
          <div className="absolute z-[11] w-36 md:w-48 lg:w-36 h-full flex justify-end -mt-[11.5rem] ml-[17rem] md:-mt-80 md:ml-[33rem] lg:-mt-60 lg:ml-[23rem] ">
            <Image src="/bird1.svg" alt="" fill/>
          </div>
        </div>
      </div>

      {/*Sejarah Kesatria @media:lg*/}
      <div about="Sejarah Kesatria" className="hidden lg:flex flex-row w-4/5 gap-28 items-center justify-center">
        <div id="video-sejarah-kesatria" className="relative flex justify-center items-center rounded-2xl min-w-[400px] aspect-video bg-red-100">
          <div className="relative z-10 h-40 md:h-52 aspect-video overflow-hidden rounded-xl">
            <iframe
            src="https://www.youtube.com/embed/cAfRzKW-Tyw"
            className="w-full h-full"
            allowFullScreen />
          </div>
          <div className="absolute z-[11] w-48 h-full flex justify-end -mt-[7.5rem] mr-[23rem] ">
            <Image src="/bird2.svg" alt="" fill/>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h1 className="font-alstoria text-green-400 text-[40px] md:text-[60px] text-center md:text-right">
            Sejarah Kesatria
          </h1>
          <p className="font-creato font-medium max-w-[700px] text-[18px] sm:text-[20px] 2xl:text-[25px] text-green-400 text-center md:text-right">
            Fakultas Teknik merupakan salah satu fakultas tertua di indonesia.
            Jadi kita harus belajar tentang sejarahnya! Fakultas teknik adalah
            yang terbaik. Senang bisa tembus  ke teknik hihi. Semoga IPK aman :D
          </p>
        </div>
      </div>

      {/* Sejarah Kesatria @media: sm */}
      <div about="Sejarah Kesatria" className="flex flex-col lg:hidden w-4/5 gap-14 items-center">
        <div>
          <h1 className="font-alstoria text-green-400 text-[40px] md:text-[60px] text-center lg:text-left">
            Sejarah Kesatria
          </h1>
          <p className="font-creato font-medium max-w-[660px] text-[18px] sm:text-[20px] 2xl:text-[25px] text-green-400 text-center lg:text-left">
            Fakultas Teknik merupakan salah satu fakultas tertua di indonesia.
            Jadi kita harus belajar tentang sejarahnya! Fakultas teknik adalah
            yang terbaik. Senang bisa tembus  ke teknik hihi. Semoga IPK aman :D
          </p>
        </div>
        <div id="video-sejarah-kesatria" className="relative flex justify-center items-center rounded-2xl min-w-[300px] md:min-w-[550px] aspect-video bg-red-100">
          <div className="relative z-10 h-40 md:h-72 aspect-video overflow-hidden rounded-xl">
            <iframe
            src="https://www.youtube.com/embed/cAfRzKW-Tyw"
            className="w-full h-full"
            allowFullScreen />
          </div>
          <div className="absolute z-[11] w-48 h-full flex justify-end -mt-[5.5rem] mr-[18rem] md:w-40 md:-mt-[13rem] md:mr-[30rem]">
            <Image alt="" src="/bird2.svg" fill/>
          </div>
        </div>
      </div>

    </section>
  );
}
