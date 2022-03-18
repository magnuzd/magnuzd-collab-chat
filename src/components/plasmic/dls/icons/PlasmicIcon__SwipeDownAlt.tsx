// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SwipeDownAltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SwipeDownAltIcon(props: SwipeDownAltIconProps) {
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
          "M13 12.9a5 5 0 10-2 0v4.27l-1.59-1.59L8 17l4 4 4-4-1.41-1.41L13 17.17V12.9zM15 8c0 1.66-1.34 3-3 3S9 9.66 9 8s1.34-3 3-3 3 1.34 3 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SwipeDownAltIcon;
/* prettier-ignore-end */
