// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SwipeUpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SwipeUpIcon(props: SwipeUpIconProps) {
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
          "M19.974 10.503l-4.15.01a.975.975 0 00-.45.08l-.59.26-1.83-4.1a2.503 2.503 0 00-3.3-1.27 2.503 2.503 0 00-1.27 3.3l3.3 7.45-1.87.39c-.19.05-.99.27-1.36 1.21l-.7 1.86 6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51zm1.27 7.34l-5.99 2.66-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66.25-.11.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01 1.36 5.34zM1.814 6.063l-1.06-1.06 3.5-3.5 3.5 3.5-1.06 1.06-1.62-1.62a10.457 10.457 0 001.88 8.99l-1.07 1.07a11.974 11.974 0 01-2.63-7.5c0-.92.1-1.82.3-2.68l-1.74 1.74z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SwipeUpIcon;
/* prettier-ignore-end */
