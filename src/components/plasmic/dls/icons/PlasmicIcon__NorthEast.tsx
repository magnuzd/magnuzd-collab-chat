// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NorthEastIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NorthEastIcon(props: NorthEastIconProps) {
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
        d={"M9.5 4.5v2h6.59L4.5 18.09l1.41 1.41L17.5 7.91v6.59h2v-10h-10z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NorthEastIcon;
/* prettier-ignore-end */
