import SecondaryButton from "@components/SecondaryButton";

const GetInvolved = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 bg-slate-200">
      <h1 className="w-full mx-8 text-5xl font-bold text-center sm:text-4xl sm:font-semibold">
        Get involved now
      </h1>
      <p className="px-48 lg:px-24 md:px-8">
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
          <SecondaryButton text="Monetary Donation" classes="px-36 md:px-24" />
          <SecondaryButton text="Item donation" classes="px-36 md:px-24" />
          <SecondaryButton text="Contact Us" classes="px-36 md:px-24" />
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
