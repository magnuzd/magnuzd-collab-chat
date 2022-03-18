// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowCircleRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowCircleRightIcon(props: ArrowCircleRightIconProps) {
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
          "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zM4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8zm12 0l-4 4-1.41-1.41L12.17 13H8v-2h4.17l-1.59-1.59L12 8l4 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowCircleRightIcon;
/* prettier-ignore-end */
