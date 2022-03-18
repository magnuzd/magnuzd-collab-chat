// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarBorderIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarBorderIcon(props: StarBorderIconProps) {
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
          "M22 9.74l-7.19-.62L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77l6.18 3.73-1.63-7.03L22 9.74zM12 15.9l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.6l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarBorderIcon;
/* prettier-ignore-end */
