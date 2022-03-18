// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NorthWestIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NorthWestIcon(props: NorthWestIconProps) {
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
        d={"M4.5 14.5h2V7.91L18.09 19.5l1.41-1.41L7.91 6.5h6.59v-2h-10v10z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NorthWestIcon;
/* prettier-ignore-end */
