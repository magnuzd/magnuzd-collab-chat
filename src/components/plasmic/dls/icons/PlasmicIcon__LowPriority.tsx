// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LowPriorityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LowPriorityIcon(props: LowPriorityIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14 4.5h8v2h-8v-2zm0 5.5h8v2h-8v-2zm0 5.5h8v2h-8v-2zM2 11c0 3.58 2.92 6.5 6.5 6.5H9v2l3-3-3-3v2h-.5C6.02 15.5 4 13.48 4 11s2.02-4.5 4.5-4.5H12v-2H8.5C4.92 4.5 2 7.42 2 11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LowPriorityIcon;
/* prettier-ignore-end */
