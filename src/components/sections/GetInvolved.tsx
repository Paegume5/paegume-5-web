"use client";

import Modal from "@components/Modal";
import SecondaryButton from "@components/SecondaryButton";
import { useState } from "react";

const GetInvolved = () => {
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const visitUsModal = (
    <>
      <Modal open={visitModalOpen} setOpen={setVisitModalOpen}>
        <div className="w-[35vw] md:w-[75vw] h-96 p-8 bg-white">Visit Us</div>
      </Modal>
    </>
  );

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 bg-slate-200">
      <h1 className="w-full mx-8 text-5xl font-bold text-center sm:text-4xl sm:font-semibold">
        Get involved now
      </h1>
      <p className="px-48 lg:px-24 md:px-8 sm:text-sm">
        We believe that everyone has the power to make a difference, and we
        invite you to join us in our mission. Whether you choose to host an
        event, volunteer your time, or make a donation, your involvement will
        directly impact the lives of those in need and contribute to positive
        change in the world. Together, we can create a better future for all.
      </p>
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <h1 className="text-4xl font-medium sm:text-3xl sm:text-center sm:font-medium">
          Ways to get involved
        </h1>
        <div className="flex flex-col gap-1">
          <SecondaryButton
            text="Become a volunteer"
            classes="px-36 md:px-24"
            link
            to="/register"
          />
          <SecondaryButton
            text="Monetary Donation"
            classes="px-36 md:px-24"
            link
            to="/donate"
          />
          <SecondaryButton
            text="Item donation"
            classes="px-36 md:px-24"
            link
            to="/donate#item-donation"
          />
          <SecondaryButton
            text="Visit Us"
            classes="px-36 md:px-24"
            click={() => setVisitModalOpen(true)}
          />
        </div>
      </div>
      {visitUsModal}
    </div>
  );
};

export default GetInvolved;
