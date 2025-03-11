import { DownArrow } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
   const [userData, setUserData] = useState<{
     firstName: string;
     lastName: string;
   } | null>(null);

   useEffect(() => {
     const storedData = localStorage.getItem("formvalue");
     if (storedData) {
       setUserData(JSON.parse(storedData));
     }
   }, []);
  return (
    <div className="max-w-[1172px] mx-auto px-4 justify-between flex w-full py-4">
      <div className="flex items-center gap-[10px] max-sm:gap-1">
        <Link href={"/"}>
          <Image
            src={"/assets/images/png/logo.png"}
            width={144}
            height={133}
            alt="logo"
            className="pointer-events-none max-sm:w-24"
          />
        </Link>
        <div className="w-[1.5px] bg-black h-[19px]"></div>
        <p className="!font-syne leading-[100%] text-black max-sm:text-sm font-medium pt-0.5">
          TMM Accelerator
        </p>
      </div>
      <div className="flex items-center">
        <Image
          src={"/assets/images/png/jhone.png"}
          width={40}
          height={40}
          alt="jhone"
          className="rounded-full w-10 h-10 pointer-events-none max-sm:w-9 max-sm:h-9"
        />
        <div className="pl-[7px] pr-[13px] max-sm:pr-0">
          <p className="!font-syne font-medium leading-[100%] max-sm:text-sm">
            {userData ? `${userData.firstName}` : "Jhon doe"}
          </p>
          <p className="leading-[100%] text-sm max-sm:text-xs text-black/70 pt-[1px]">
            {userData ? `${userData.lastName}` : "Admin"}
          </p>
        </div>
        <DownArrow myClass="max-sm:hidden" />
      </div>
    </div>
  );
}

export default Header;
