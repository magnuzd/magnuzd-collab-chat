// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SwipeVerticalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SwipeVerticalIcon(props: SwipeVerticalIconProps) {
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
          "M1.254 2h5v5h-1.5V4.09c-1.86 2.11-3 4.88-3 7.91 0 3.03 1.14 5.79 3 7.91V17h1.5v5h-5v-1.5h2.02A13.413 13.413 0 01.254 12c0-3.22 1.13-6.18 3.02-8.5h-2.02V2zm19.22 8l-4.15.01a.975.975 0 00-.45.08l-.59.26-1.83-4.1a2.503 2.503 0 00-3.3-1.27 2.503 2.503 0 00-1.27 3.3l3.3 7.45-1.87.39c-.19.05-.99.27-1.36 1.21l-.7 1.86 6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51zm1.27 7.34L15.754 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66.25-.11.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01 1.36 5.34z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SwipeVerticalIcon;
/* prettier-ignore-end */
