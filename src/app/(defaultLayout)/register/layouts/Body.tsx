"use client";

import NotificationModal from "@components/NotificationModal";
import PrimaryButton from "@components/PrimaryButton";
import SecondaryButton from "@components/SecondaryButton";
import { useState } from "react";

const Body = () => {
  let contStyle = {
    marginTop: 0,
    backgroundImage: `linear-gradient(to top, #00000021 20%, #00000066), url('/img/header_bg.jpg')`,
  };

  const [submitting, setSubmitting] = useState(false);
  const [registerSuccess, setregisterSuccess] = useState(false);
  const [notify, setNotify] = useState(false);

  const inputStyles =
    "p-3 rounded text-sm outline-none border-2 focus:border-color-2 transition-all focus:invalid:border-color-6";

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    // let formLink = `https://formkeep.com/f/463b8fcf887d`;
    let formLink = `https://getform.io/f/abe98500-09cb-4693-8b40-d875e9a0cb62`;

    setSubmitting(true);
    setregisterSuccess(false);
    setNotify(false);
    await fetch(formLink, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        setregisterSuccess(response.ok);
      })
      .catch(() => setregisterSuccess(false));
    setSubmitting(false);
    setNotify(true);
    registerSuccess && form.reset();
  }

  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-center bg-cover"
      style={contStyle}
    >
      <NotificationModal
        open={notify}
        setOpen={setNotify}
        type={registerSuccess ? "success" : "error"}
        title={registerSuccess ? "Success" : "Error"}
      >
        {registerSuccess
          ? "Registration Successful! You will hear back from us soon."
          : "Registration failed! Please try again later."}
      </NotificationModal>
      <div className="fixed text-color-2 text-sm top-6 left-6 z-20">
        <PrimaryButton text="Back to homepage" link to="/" classes="text-xs" />
      </div>
      <div className="flex flex-col items-center gap-12 md:gap-6">
        <h1 className="text-3xl md:text-2xl text-white">Become a Member Now</h1>
        <form
          className="flex flex-col gap-3 px-8 py-12 mx-8 bg-white/70 rounded-lg shadow-2xl backdrop-blur-xl"
          onSubmit={handleFormSubmit}
        >
          <h1 className="self-center text-3xl font-bold">PAGD Registration</h1>
          <div className="flex justify-between gap-2">
            <input
              type="text"
              name="First Name"
              id=""
              minLength={2}
              placeholder="First Name"
              className={`${inputStyles} w-full`}
              required
            />
            <input
              type="text"
              name="Last Name"
              id=""
              minLength={2}
              placeholder="Last Name"
              className={`${inputStyles} w-full`}
              required
            />
          </div>
          <input
            type="text"
            name="Phone Number"
            id="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
            pattern="^([+]\d{2})?\d{10}$"
            placeholder="Phone Number"
            className={`${inputStyles}`}
            required
          />
          <input
            type="email"
            name="Email"
            id=""
            pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
            placeholder="Email Address"
            className={`${inputStyles}`}
            required
          />
          <textarea
            name="Comment"
            id=""
            rows={3}
            placeholder="Write a comment (optional)"
            className={`${inputStyles} resize-none`}
          />
          <div className="self-center w-fit">
            <SecondaryButton
              text={submitting ? "Registering ..." : "Register"}
              disabled={submitting}
              submit
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Body;
