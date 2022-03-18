// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SwipeLeftAltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SwipeLeftAltIcon(props: SwipeLeftAltIconProps) {
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
          "M11.1 13a5 5 0 100-2H6.83l1.59-1.59L7 8l-4 4 4 4 1.41-1.41L6.83 13h4.27zm4.9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SwipeLeftAltIcon;
/* prettier-ignore-end */
