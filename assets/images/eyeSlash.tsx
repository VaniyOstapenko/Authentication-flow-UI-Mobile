import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props: any) {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.108 8.868l-4.216 4.216a2.98 2.98 0 114.217-4.217z"
        stroke="#6C6F72"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.85 5.785c-1.458-1.1-3.125-1.7-4.85-1.7-2.942 0-5.683 1.733-7.592 4.733-.75 1.175-.75 3.15 0 4.325a11.937 11.937 0 002.259 2.641M7.017 17.251c.95.4 1.958.617 2.983.617 2.942 0 5.683-1.733 7.592-4.733.75-1.175.75-3.15 0-4.325a13.526 13.526 0 00-.884-1.225M12.925 11.56a2.97 2.97 0 01-2.35 2.35M7.892 13.085l-6.225 6.224M18.333 2.643l-6.225 6.225"
        stroke="#6C6F72"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
