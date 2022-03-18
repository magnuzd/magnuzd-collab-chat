// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SettingsBackupRestoreIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SettingsBackupRestoreIcon(
  props: SettingsBackupRestoreIconProps
) {
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
          "M15.5 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9a9 9 0 00-9 9h-3l4 4 4-4h-3c0-3.87 3.13-7 7-7s7 3.13 7 7a6.995 6.995 0 01-11.06 5.7l-1.42 1.44A9 9 0 1013.5 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SettingsBackupRestoreIcon;
/* prettier-ignore-end */
