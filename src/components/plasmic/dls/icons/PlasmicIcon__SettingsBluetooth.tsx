// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SettingsBluetoothIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SettingsBluetoothIcon(props: SettingsBluetoothIconProps) {
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
          "M11.645 24h2v-2h-2v2zm-4 0h2v-2h-2v2zm8 0h2v-2h-2v2zm2.71-18.29L12.645 0h-1v7.59L7.055 3l-1.41 1.41 5.59 5.59-5.59 5.59L7.055 17l4.59-4.59V20h1l5.71-5.71-4.3-4.29 4.3-4.29zm-4.71-1.88l1.88 1.88-1.88 1.88V3.83zm1.88 10.46l-1.88 1.88v-3.76l1.88 1.88z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SettingsBluetoothIcon;
/* prettier-ignore-end */
