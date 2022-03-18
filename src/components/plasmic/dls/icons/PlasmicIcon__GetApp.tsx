// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GetAppIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GetAppIcon(props: GetAppIconProps) {
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
          "M13 5.5v6h1.17L12 13.67 9.83 11.5H11v-6h2zm2-2H9v6H5l7 7 7-7h-4v-6zm4 15H5v2h14v-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GetAppIcon;
/* prettier-ignore-end */
