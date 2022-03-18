// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UpdateIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UpdateIcon(props: UpdateIconProps) {
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
          "M11 8v5l4.25 2.52.77-1.28-3.52-2.09V8H11zm10 2V3l-2.64 2.64A8.937 8.937 0 0012 3a9 9 0 109 9h-2c0 3.86-3.14 7-7 7s-7-3.14-7-7 3.14-7 7-7c1.93 0 3.68.79 4.95 2.05L14 10h7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UpdateIcon;
/* prettier-ignore-end */
