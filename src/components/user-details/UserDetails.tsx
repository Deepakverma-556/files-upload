import { Complexity, Machines, Pars, RightArrow } from "@/utils/icons";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Description from "../common/Description";
import { DETAILED_METRICES_LIST } from "@/utils/helper";
import Image from "next/image";

function UserDetails() {
  return (
    <div className="bg-customWhite">
      <Header />
      <div className="max-w-[1172px] mx-auto px-4">
        <div className="flex items-center justify-between pt-6">
          <p className="font-semibold text-2xl leading-[100%] !font-syne">
            file123.zip
          </p>
          <button className="font-medium text-sm leading-[100%] !font-syne border border-black rounded-md px-[22.36px] py-[16.7px]">
            UPLOAD MORE FILES
          </button>
        </div>
        <div className="flex flex-wrap -mx-3 pt-[23px] pb-[31px]">
          <div className="w-1/2 px-3">
            <div className="bg-white flex justify-between items-center py-[19px] px-4 rounded-lg">
              <div className="flex items-center gap-4">
                <Complexity />
                <p className="!font-syne font-medium text-xl leading-[100%]">
                  Complexity of the code
                </p>
              </div>
              <p className="font-medium text-sm leading-[100%] bg-lightRed text-customRed !font-syne border border-customRed rounded-[49px] py-2 px-4 max-w-max max-h-max">
                HIGH
              </p>
            </div>
          </div>
          <div className="w-3/12 px-3">
            <div className="bg-white flex gap-4 items-center py-[19px] px-4 rounded-lg">
              <Machines />
              <div>
                <span className="font-medium text-[28px] leading-[100%]">
                  -
                </span>
                <Description text="No of Machines" />
              </div>
            </div>
          </div>
          <div className="w-3/12 px-3">
            <div className="bg-white flex gap-4 items-center py-[19px] px-4 rounded-lg">
              <Pars />
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
        <div className="flex flex-wrap -mx-3 pt-6 pb-[46px]">
          <div className="w-1/2 px-3">
            <div className="flex flex-col gap-4">
              {DETAILED_METRICES_LIST.map((obj, i) => (
                <div
                  key={i}
                  className="bg-white flex justify-between items-center py-3 px-4 rounded-lg"
                >
                  <div className="flex gap-4 items-center">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center bg-lightRed">
                      {obj.listNumber}
                    </div>
                    <Description text={obj.title} />
                      </div>
                      <RightArrow/>
                </div>
              ))}
            </div>
                  </div>
                  <Image src={"/assets/images/webp/pie.webp"} alt="pie" height={464} width={558} className="w-[558px] h-[464px] pointer-events-none mx-3"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserDetails;
