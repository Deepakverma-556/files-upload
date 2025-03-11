"use client";
import { Complexity, Machines, Pars, RightArrow } from "@/utils/icons";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Description from "../common/Description";
import { DETAILED_METRICES_LIST } from "@/utils/helper";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function UserDetails() {
  const router = useRouter();
  const [fileName, setFileName] = useState<string | null>(null);

  useEffect(() => {
    const storedFileName = localStorage.getItem("uploadedFile");
    router.push(`/user-details?fileName=${storedFileName}`);
    setFileName(storedFileName);
  }, []);

  function updateUrl(title: string) {
    const myTitle = title.replace(/\s+/g, "-");
    router.push(`?${myTitle}`);
  }

  function submitHandler() {
    router.push(`/read-process`);
    localStorage.removeItem("uploadedFile");
  }

  return (
    <div className="bg-customWhite">
      <Header />
      <div className="max-w-[1172px] mx-auto px-4">
        <div className="flex items-center justify-between pt-6">
          <p className="font-semibold text-2xl leading-[100%] !font-syne">
            {fileName}
          </p>
          <button
            onClick={submitHandler}
            className="font-medium text-sm leading-[100%] !font-syne border border-black rounded-md px-[22.36px] py-[16.7px] max-sm:p-3 transition-all duration-300 hover:text-white hover:bg-black cursor-pointer"
          >
            UPLOAD MORE FILES
          </button>
        </div>
        <div className="flex flex-wrap -mx-3 max-sm:-mx-1 pt-[23px] pb-[31px]">
          <div className="w-1/2 px-3 max-sm:px-1 max-lg:w-full max-lg:mb-6 max-sm:mb-2">
            <div className="bg-white flex justify-between items-center py-[19px] px-4 max-lg:py-3 max-lg:px-2 rounded-lg">
              <div className="flex items-center gap-4 max-md:gap-1">
                <Complexity myClass="max-lg:h-12 max-sm:h-10 max-sm:w-10" />
                <p className="!font-syne font-medium text-xl max-sm:text-lg leading-[100%]">
                  Complexity of the code
                </p>
              </div>
              <p className="font-medium text-sm leading-[100%] bg-lightRed text-customRed !font-syne border border-customRed rounded-[49px] py-2 px-4 max-w-max max-h-max">
                HIGH
              </p>
            </div>
          </div>
          <div className="w-3/12 px-3 max-sm:px-1 max-lg:w-1/2">
            <div className="bg-white flex gap-4 max-md:gap-0 items-center py-[19px] px-4 max-lg:py-2 max-lg:px-2 max-sm:pl-0 rounded-lg">
              <Machines myClass="max-lg:h-12 max-sm:h-10 max-sm:w-13" />
              <div>
                <span className="font-medium text-[28px] leading-[100%]">
                  -
                </span>
                <Description text="No of Machines" />
              </div>
            </div>
          </div>
          <div className="w-3/12 px-3 max-sm:px-1 max-lg:w-1/2">
            <div className="bg-white flex gap-4 max-md:gap-0 items-center py-[19px] px-4 max-lg:py-2 max-lg:px-2 max-sm:pl-0 rounded-lg">
              <Pars myClass="max-lg:h-12 max-sm:h-10" />
              <div>
                <span className="font-medium text-[28px] leading-[100%]">
                  -
                </span>
                <Description text="No of Pars" />
              </div>
            </div>
          </div>
        </div>
        <p className="!font-syne font-semibold text-2xl leading-[100%]">
          Detailed metrices
        </p>
        <div className="flex -mx-3 pt-6 pb-[46px] max-lg:items-center max-[800px]:flex-wrap">
          <div className="w-1/2 max-[800px]:w-full px-3">
            <div className="flex flex-col gap-4">
              {DETAILED_METRICES_LIST.map((obj, i) => (
                <button
                  onClick={() => updateUrl(obj.title)}
                  key={i}
                  className="bg-white cursor-pointer flex justify-between items-center py-3 px-4 rounded-lg"
                >
                  <div className="flex gap-4 items-center">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center bg-lightRed">
                      {obj.listNumber}
                    </div>
                    <Description text={obj.title} />
                  </div>
                  <RightArrow />
                </button>
              ))}
            </div>
          </div>
          <Image
            src={"/assets/images/webp/pie.webp"}
            alt="pie"
            height={464}
            width={558}
            className="w-[558px] h-[464px] max-lg:w-[450px] max-lg:h-[370px] rounded-lg pointer-events-none mx-3 max-[800px]:mx-auto max-[800px]:mt-7 max-sm:w-[340px] max-sm:h-[280px] object-cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserDetails;
