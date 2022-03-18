// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SwipeRightAltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SwipeRightAltIcon(props: SwipeRightAltIconProps) {
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
          "M12.9 11a5 5 0 100 2h4.27l-1.59 1.59L17 16l4-4-4-4-1.41 1.41L17.17 11H12.9zM8 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SwipeRightAltIcon;
/* prettier-ignore-end */
