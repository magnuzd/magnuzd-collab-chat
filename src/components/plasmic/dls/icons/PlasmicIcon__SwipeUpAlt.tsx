// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SwipeUpAltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SwipeUpAltIcon(props: SwipeUpAltIconProps) {
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
          "M13 6.83l1.59 1.59L16 7l-4-4-4 4 1.41 1.41L11 6.83v4.27a5 5 0 102 0V6.83zM12 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SwipeUpAltIcon;
/* prettier-ignore-end */
