// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DoneAllIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DoneAllIcon(props: DoneAllIconProps) {
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
          "M17.965 6.705l-1.41-1.41-6.34 6.34 1.41 1.41 6.34-6.34zm4.24-1.41l-10.58 10.58-4.18-4.17-1.41 1.41 5.59 5.59 12-12-1.42-1.41zm-21.83 7.82l5.59 5.59 1.41-1.41-5.58-5.59-1.42 1.41z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DoneAllIcon;
/* prettier-ignore-end */
