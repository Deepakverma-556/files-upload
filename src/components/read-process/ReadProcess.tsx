import { PlusIcon, RightTik, UploadIcon } from "@/utils/icons";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Description from "../common/Description";
import { FILES_LIST } from "../../utils/helper";
import Image from "next/image";

function ReadProcess() {
  return (
    <div className="relative">
      <Header />
      <h1 className="!font-syne font-semibold text-[32px] max-sm:text-3xl leading-[100%] text-black text-center pb-[34px] pt-9 max-sm:pt-5 max-sm:pb-5">
        Read & process your files online
      </h1>
      <div className="shadow-[0px_16px_42.7px_0px] shadow-lightGray max-w-[786px] mx-auto p-4 rounded-xl">
        <div className="border-dashed border rounded-lg border-customRed flex items-center justify-center cursor-pointer py-[94.5px] px-6 max-sm:py-12 max-sm:px-4">
          <label
            htmlFor="image"
            className="flex flex-col justify-center items-center"
          >
            <span>
              <UploadIcon />
            </span>
            <Description
              text="Paste or drag and drop files here"
              myClass="!text-sm text-center pt-[19px] pb-1"
            />
            <Description
              text="WAR, ZIP or EAR, file size no more than 10MB"
              myClass="!text-black/40 text-center pb-4"
            />
            <span className="flex size-[32px] rounded-sm bg-customRed items-center justify-center">
              <PlusIcon />
            </span>
          </label>
          <input accept="image/*" type="file" id="image" hidden />
        </div>
      </div>
      <div className="max-w-[818px] mx-auto px-4 pt-12 max-sm:pt-7 flex justify-between pb-[69px] max-md:flex-wrap">
        <Description
          myClass="max-w-[355px] max-md:mx-auto max-md:text-center max-md:pb-4"
          text="Our accelerator allows you to upload, read, and process multiple file types (e.g., Python, JAR, ZIP), extracting key data like classes, methods, and structure for easy review."
        />
        <ul className="flex flex-col gap-2 max-md:gap-1 max-md:mx-auto">
          {FILES_LIST.map((obj, i) => (
            <li key={i} className="flex items-center gap-[6px]">
              <span>
                <RightTik />
              </span>{" "}
              <Description text={obj} />
            </li>
          ))}
        </ul>
          </div>
          <Image src={'/assets/images/png/subtract.png'} alt="subtract" height={211} width={169} className="absolute pointer-events-none top-30 max-xl:h-32 max-lg:hidden max-xl:w-20"/>
          <Image src={'/assets/images/png/right-subtract.png'} alt="right-subtract" height={211} width={169} className="absolute pointer-events-none right-0 bottom-25 max-xl:h-32 max-lg:hidden max-xl:w-20"/>
      <Footer />
    </div>
  );
}

export default ReadProcess;
