import Goal from "@components/Goal";
import MainCard from "@components/MainCard";
import PrimaryButton from "@components/PrimaryButton";
import { useState } from "react";

const Goals = () => {
  const [activeGoals, setActiveGoals] = useState([false, false, false]);

  const toggleAccordion = (id: number) => {
    let ac = [false, false, false];
    // setActiveGoals(ac)
    ac[id] = !activeGoals[id];
    setActiveGoals(ac);
  };

  return (
    <MainCard title="Goals" titleInside>
      <>
        <div className="flex justify-center mx-[6vw]">
          The organization was established mainly to support the needy and poor
          people on the streets. Focusing on the youth who face different
          problems for various reasons, the organization will help them identify
          their problems and lead them to a better life. By doing so, the
          organization aims to lift the needy and poor from the streets and
          transform them from being in need to helping the needy.
        </div>
        <div className="relative grid grid-cols-3 gap-4 mx-2 my-6 transition-all delay-200 md:grid-cols-1">
          <Goal
            title="Vision"
            active={activeGoals[0]}
            click={() => {
              toggleAccordion(0);
            }}
          >
            To facilitate development of communities and environments that can
            cope with natural disasters and mitigate risks.
          </Goal>
          <Goal
            title="Mission"
            active={activeGoals[1]}
            click={() => {
              toggleAccordion(1);
            }}
          >
            To address the basic needs of the neediest (the most vulnerable) by
            mobilizing resources from national and international partners and
            supporters.
          </Goal>
          <Goal
            title="Vaule"
            active={activeGoals[2]}
            click={() => {
              toggleAccordion(2);
            }}
          >
            Our track record of performance, serving both the urban poor and
            homeless groups, with a high degree of impartiality, ensures
            organizational and operational integrity in principle and action.
          </Goal>
        </div>
        <div className="w-full">
          <center>
            <PrimaryButton text="Explore" arrow link to="/goals" />
          </center>
        </div>
      </>
    </MainCard>
  );
};

export default Goals;
