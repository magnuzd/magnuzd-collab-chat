// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SyncAltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SyncAltIcon(props: SyncAltIconProps) {
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
          "M7.41 13.41L6 12l-4 4 4 4 1.41-1.41L5.83 17H21v-2H5.83l1.58-1.59zm9.18-2.82L18 12l4-4-4-4-1.41 1.41L18.17 7H3v2h15.17l-1.58 1.59z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SyncAltIcon;
/* prettier-ignore-end */
