import Description from "../common/Description";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-customGray">
      <div className="max-w-[1172px] mx-auto px-4 flex justify-between w-full py-[23px]">
        <Description
          myClass="!text-white/50"
          text="Made with ❤ for the people of the internet."
        />
        <Description
          myClass="!text-white/50"
          text={`© ${year} Dataskate.io, All Rights Reserved`}
        />
      </div>
    </div>
  );
}

export default Footer;
