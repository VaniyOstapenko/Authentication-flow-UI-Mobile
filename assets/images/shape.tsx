import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function Shape(props: any) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path transform="translate(0 .476)" fill="#fff" d="M0 0H16V16H0z" />
      <Rect y={0.476196} width={16} height={16} rx={2} fill="#59CDBE" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.816 4.683a.667.667 0 01-.023.943l-7.704 7.333a.667.667 0 01-.961-.044L2.165 9.531a.667.667 0 111.003-.879l2.505 2.862 7.2-6.854a.667.667 0 01.943.023z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Shape;
