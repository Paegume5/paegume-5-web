import { navHeight, topMargin } from "@constants/constants";

const Body = () => {
  let marginT = topMargin(navHeight);

  return <div style={{ marginTop: marginT }}>Prjoects</div>;
};

export default Body;
