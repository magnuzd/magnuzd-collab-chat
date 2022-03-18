// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBackIosIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBackIosIcon(props: ArrowBackIosIconProps) {
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
          "M17.835 3.87l-1.78-1.77-9.89 9.9 9.9 9.9 1.77-1.77L9.705 12l8.13-8.13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBackIosIcon;
/* prettier-ignore-end */
