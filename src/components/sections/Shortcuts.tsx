import ShortcutBtn from "@components/ShortcutBtn";

const Shortcuts = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-1">
      <ShortcutBtn
        header="Who are We?"
        linkText="Learn More"
        to="/about-us"
        bgColor="bg-color-2"
      >
        We are a dedicated group of individuals committed to making a
        difference. With a strong focus on our mission and values, we work
        tirelessly to address the needs and challenges faced by those we serve.
      </ShortcutBtn>
      <ShortcutBtn
        header="Our Goals"
        linkText="Join Us"
        to="/join-us"
        bgColor="bg-color-1"
      >
        We are driven by the mission of providing critically needed humanitarian
        support to the needy. We aim to alleviate suffering, offer relief, and
        restore hope in the lives of those affected by crises, disasters, and
        hardships.
      </ShortcutBtn>
      <ShortcutBtn
        header="Support Us"
        linkText="Donate"
        to="/donate"
        bgColor="bg-color-6"
      >
        We kindly request your support through donations. Your generosity, both
        monetary and in-kind will make a significant impact on our cause and
        help us continue our important work.
      </ShortcutBtn>
    </div>
  );
};

export default Shortcuts;
