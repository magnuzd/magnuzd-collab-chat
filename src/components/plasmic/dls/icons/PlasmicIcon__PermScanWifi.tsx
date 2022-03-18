// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PermScanWifiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PermScanWifiIcon(props: PermScanWifiIconProps) {
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
          "M12 2.5c-5.05 0-8.85 1.85-12 4.23L12 21.5 24 6.75C20.85 4.37 17.05 2.5 12 2.5zM2.92 7.15C5.8 5.35 8.74 4.5 12 4.5c3.25 0 6.18.85 9.08 2.67L12 18.33 2.92 7.15zM11 9.5h2v6h-2v-6zm0-4h2v2h-2v-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PermScanWifiIcon;
/* prettier-ignore-end */
