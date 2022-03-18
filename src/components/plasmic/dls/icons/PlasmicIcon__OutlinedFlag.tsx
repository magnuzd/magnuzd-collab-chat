// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OutlinedFlagIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OutlinedFlagIcon(props: OutlinedFlagIconProps) {
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
          "M13.5 5.5l-1-2h-8v17h2v-7h5l1 2h7v-10h-6zm4 8h-4l-1-2h-6v-6h5l1 2h5v6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OutlinedFlagIcon;
/* prettier-ignore-end */
