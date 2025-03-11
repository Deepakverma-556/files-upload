import Description from "../common/Description";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-customGray">
      <div className="max-w-[1172px] mx-auto px-4 flex justify-between w-full py-[23px] max-sm:flex-wrap max-sm:py-4 max-sm:gap-1">
        <Description
          myClass="!text-white/50 max-sm:text-center max-sm:w-full"
          text="Made with ❤ for the people of the internet."
        />
        <Description
          myClass="!text-white/50 max-sm:text-center max-sm:w-full"
          text={`© ${year} Dataskate.io, All Rights Reserved`}
        />
      </div>
    </div>
  );
}

export default Footer;
