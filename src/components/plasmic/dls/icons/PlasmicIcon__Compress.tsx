// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CompressIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CompressIcon(props: CompressIconProps) {
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
          "M4 9.5v2h16v-2H4zm12-5l-1.41-1.41L13 4.67V1.5h-2v3.19L9.39 3.11 8 4.5l4 4 4-4zm-12 10h16v-2H4v2zm4 5l1.39 1.39L11 19.31v3.19h2v-3.17l1.59 1.59L16 19.5l-4-4-4 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CompressIcon;
/* prettier-ignore-end */
