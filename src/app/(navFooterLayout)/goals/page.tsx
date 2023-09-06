import Body from "./layouts/Body";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paegume 5 - Goals",
  description: "Paegume 5 goals"
}

const GoalsPage = () => {

  return (
      <div>
        <Body />
      </div>
  )
}

export default GoalsPage