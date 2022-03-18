// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HorizontalSplitIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HorizontalSplitIcon(props: HorizontalSplitIconProps) {
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
        d={"M19 15v2H5v-2h14zm2-10H3v2h18V5zm0 4H3v2h18V9zm0 4H3v6h18v-6z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HorizontalSplitIcon;
/* prettier-ignore-end */
