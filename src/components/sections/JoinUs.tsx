import SecondaryButton from "@components/SecondaryButton";
import ServiceCard from "@components/ServiceCard";

const JoinUs = () => {
  return (
    <div className="flex items-center justify-between px-8 mx-auto lg:flex-col md:px-4">
      <div className="flex flex-col justify-center gap-8 px-12 my-8 lg:px-6">
        <h1 className="text-4xl font-semibold">Join Us In Our Mission!</h1>
        <p className="text-lg text-gray-600">
          We are one of the very few organizations striving to address the needs
          of the most vulnerable urban poor and homeless groups in an integrated
          approach, providing critically needed humanitarian support.
        </p>
        <div className="flex gap-1">
          <SecondaryButton text="Join Us" link to="/register" />
          <SecondaryButton text="Donate" link to="/donate" />
        </div>
      </div>
      <div className="grid items-center grid-cols-3 gap-4 px-6 py-16 sm:grid-cols-2 lg:py-8">
        <ServiceCard header="Shelter" iconSrc="/svg/icons/shelter.svg">
          Currently working to find a permanent solution to the housing problem.
        </ServiceCard>
        <ServiceCard header="Food" iconSrc="/svg/icons/food.svg">
          Sharing of food through holiday programs such as New Year's Eve,
          Christmas, Easter & Ramadan.
        </ServiceCard>
        <ServiceCard header="WASH" iconSrc="/svg/icons/wash.svg">
          Water Sanitaion & Hygiene are provided through our food service,
          emergency water supply and response services.
        </ServiceCard>
        <ServiceCard header="Health" iconSrc="/svg/icons/health.svg">
          We have tried to cover the full cost of medical care of almost
          everyone to the best of our ability.
        </ServiceCard>
        <ServiceCard
          header="Education Materials"
          iconSrc="/svg/icons/education.svg"
        >
          Provision of different educational materials to students in need.
        </ServiceCard>
        <ServiceCard
          header="Technical Support"
          iconSrc="/svg/icons/support.svg"
        >
          Assistance in the use optimized use of limited resources.
        </ServiceCard>
      </div>
    </div>
  );
};

export default JoinUs;
