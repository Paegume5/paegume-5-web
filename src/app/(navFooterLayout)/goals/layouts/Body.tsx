import { navHeight } from "@constants/constants";
import { makeTopMargin } from "@utils/utils";

const Body = () => {
  let marginT = makeTopMargin(navHeight);

  return <div style={{ marginTop: marginT }}>Goals</div>;
};

export default Body;
