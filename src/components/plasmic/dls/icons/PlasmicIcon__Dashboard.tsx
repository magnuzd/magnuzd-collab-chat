// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DashboardIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DashboardIcon(props: DashboardIconProps) {
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
          "M19 5v2h-4V5h4zM9 5v6H5V5h4zm10 8v6h-4v-6h4zM9 17v2H5v-2h4zM21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DashboardIcon;
/* prettier-ignore-end */
