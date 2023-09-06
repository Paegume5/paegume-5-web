import ChallengesCard from "@components/ChallengesCard";

const Challenges = () => {
  return (
    <div className="flex flex-col items-center h-full gap-6 px-4 my-12 sm:px-1">
      <div className="text-4xl text-center">Challenges and Gaps</div>
      <div className="grid w-full h-full grid-cols-4 gap-4 px-4 sm:gap-2 sm:px-2 text-gray-50 xl:grid-cols-2">
        <ChallengesCard
          header="Capacity Constraints"
          imgSrc="/svg/icons/capacity.svg"
        >
          Challenges faced due to human, financial, and logistical capacity
          constraints involve limited manpower and finances, in addition to
          transportation, infrastructure, and coordination issues.
        </ChallengesCard>
        <ChallengesCard
          header="Limited Partnerships"
          imgSrc="/svg/icons/partner.svg"
        >
          As the need for more diversified network is not yet adequately
          addressed, it hinders the organization's ability to access new funding
          sources, expertise, and networks, which limits potential for growth
          and innovation.
        </ChallengesCard>
        <ChallengesCard
          header="Limited Resource"
          imgSrc="/svg/icons/resource.svg"
        >
          Limited resources make it difficult for the organization to invest in
          long-term solutions or expand its reach to help more people in need.
          This hinders the organizations ability to achieve its goals
          effectively.
        </ChallengesCard>
        <ChallengesCard
          header="Sustainablity & Self-Reliance"
          imgSrc="/svg/icons/self-reliance.svg"
        >
          PAGD’s sustainability and self-reliance is yet to be enhanced through
          subsequent efforts. Due to this reason, the organization may find it
          difficult to carry out its mission effectively.
        </ChallengesCard>
      </div>
    </div>
  );
};

export default Challenges;
