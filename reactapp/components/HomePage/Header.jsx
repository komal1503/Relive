import Image from "next/image";
import hero from "../../public/hero.svg";

export const Header = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[#D7C9C9] mx-5">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Become less severe and serious
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, readable English.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row ">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none text-black bg-[#20DBC2]">
              <span className="mr-3">memories</span>
            </a>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <Image src={hero} height={500} />
          {/* <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};
