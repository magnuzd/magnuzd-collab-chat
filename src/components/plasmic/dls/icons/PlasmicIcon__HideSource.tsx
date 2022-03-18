// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HideSourceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HideSourceIcon(props: HideSourceIconProps) {
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
          "M3.115 2.505l-1.42 1.41 2.27 2.27a9.91 9.91 0 00-1.66 5.51c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.41-18.38-18.39zm9.19 17.19c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06l10.94 10.94c-1.2.71-2.58 1.12-4.06 1.12zm-4.06-14.88l-1.45-1.46a9.91 9.91 0 015.51-1.66c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46a7.869 7.869 0 001.12-4.05c0-4.41-3.59-8-8-8-1.48 0-2.86.41-4.06 1.12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HideSourceIcon;
/* prettier-ignore-end */
