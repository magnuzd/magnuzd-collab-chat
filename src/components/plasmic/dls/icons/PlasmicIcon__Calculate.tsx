// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalculateIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalculateIcon(props: CalculateIconProps) {
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
          "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.25 7.72h-5v1.5h5v-1.5zM18 15.75h-5v1.5h5v-1.5zm0-2.5h-5v1.5h5v-1.5zM8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2v2zm6.09-7.05l1.41-1.41 1.41 1.41 1.06-1.06-1.41-1.42 1.41-1.41L16.91 6 15.5 7.41 14.09 6l-1.06 1.06 1.41 1.41-1.41 1.42 1.06 1.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CalculateIcon;
/* prettier-ignore-end */
