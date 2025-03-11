import React, { FormEvent, useEffect, useState } from "react";
import MyInput from "./common/MyInput";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { useRouter } from "next/navigation";

const WelcomeForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const [formValue, setFormValue] = useState(initialState);
  const router = useRouter();
  function handleClick(e: FormEvent) {
    e.preventDefault();
    localStorage.setItem("formvalue", JSON.stringify(formValue));
    setFormValue(initialState);
    router.push(`/read-process`);
  }
  return (
    <div className="flex flex-col max-2xl:min-h-screen justify-between">
      <Header />
      <form
        onSubmit={handleClick}
        action="#"
        className="bg-black flex flex-col px-5 py-3 gap-2 rounded-lg max-w-[600px] mx-auto 2xl:my-40"
      >
        <h1 className="text-white text-center text-3xl pb-5">Welcome Form</h1>
        <MyInput
          customOnChange={(e) =>
            setFormValue({ ...formValue, firstName: e.target.value })
          }
          myValue={formValue.firstName}
          customId="firstName"
          customType="text"
          myPlaceholder="First Name"
        />
        <MyInput
          customOnChange={(e) =>
            setFormValue({ ...formValue, lastName: e.target.value })
          }
          myValue={formValue.lastName}
          customId="lastName"
          customType="text"
          myPlaceholder="Last Name"
        />
        <MyInput
          customOnChange={(e) =>
            setFormValue({ ...formValue, email: e.target.value })
          }
          myValue={formValue.email}
          customId="email"
          customType="email"
          myPlaceholder="Email"
        />
        <button
          type="submit"
          className="bg-white flex max-w-max mx-auto px-4 py-1 rounded-xl cursor-pointer"
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default WelcomeForm;
