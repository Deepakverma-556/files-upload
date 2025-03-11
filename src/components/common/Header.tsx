import { DownArrow } from "@/app/utils/icons";
import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <div className="max-w-[1172px] mx-auto px-4 justify-between flex w-full py-4">
      <div className="flex items-center gap-[10px]">
        <Link href={"/"}>
          <Image
            src={"/assets/images/png/logo.png"}
            width={144}
            height={133}
            alt="logo"
            className="pointer-events-none"
          />
        </Link>
        <div className="w-[1.5px] bg-black h-[19px]"></div>
        <p className="!font-syne leading-[100%] text-black font-medium pt-0.5">
          TMM Accelerator
        </p>
      </div>
      <div className="flex items-center">
        <Image
          src={"/assets/images/png/jhone.png"}
          width={40}
          height={40}
          alt="jhone"
          className="rounded-full w-10 h-10 pointer-events-none"
        />
        <div className="pl-[7px] pr-[13px]">
          <p className="!font-syne font-medium leading-[100%]">Jhon doe</p>
          <p className="leading-[100%] text-sm text-black/70 pt-[1px]">Admin</p>
        </div>
        <DownArrow />
      </div>
    </div>
  );
}

export default Header