// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NorthIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NorthIcon(props: NorthIconProps) {
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
        d={"M5 9l1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NorthIcon;
/* prettier-ignore-end */
