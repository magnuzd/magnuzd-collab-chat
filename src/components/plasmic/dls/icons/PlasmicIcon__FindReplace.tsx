// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FindReplaceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FindReplaceIcon(props: FindReplaceIconProps) {
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
          "M10.255 5.255c1.38 0 2.63.56 3.54 1.46l-2.54 2.54h6v-6l-2.05 2.05a6.976 6.976 0 00-4.95-2.05c-3.53 0-6.43 2.61-6.92 6h2.02a5 5 0 014.9-4zm5.64 9.14a6.89 6.89 0 001.28-3.14h-2.02a5 5 0 01-4.9 4c-1.38 0-2.63-.56-3.54-1.46l2.54-2.54h-6v6l2.05-2.05a6.976 6.976 0 004.95 2.05c1.55 0 2.98-.51 4.14-1.36l4.86 4.85 1.49-1.49-4.85-4.86z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FindReplaceIcon;
/* prettier-ignore-end */
