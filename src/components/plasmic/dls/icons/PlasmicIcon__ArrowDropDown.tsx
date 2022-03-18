// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDropDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDropDownIcon(props: ArrowDropDownIconProps) {
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

      <path d={"M7 9.5l5 5 5-5H7z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default ArrowDropDownIcon;
/* prettier-ignore-end */
