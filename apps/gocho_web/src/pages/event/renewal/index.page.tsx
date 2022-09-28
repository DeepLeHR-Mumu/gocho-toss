import { NextPage } from "next";

import { Part1 } from "./part/part1";
import { Part2 } from "./part/part2";
import { Part3 } from "./part/part3";
import { Part4 } from "./part/part4";
import { Part5 } from "./part/part5";
import { Part6 } from "./part/part6";

import { wrapper } from "./style";

const EventRenewal: NextPage = () => {
  return (
    <main css={wrapper}>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
    </main>
  );
};

export default EventRenewal;
