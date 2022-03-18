// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SettingsRemoteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SettingsRemoteIcon(props: SettingsRemoteIconProps) {
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
          "M15.005 9.5h-6c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-12c0-.55-.45-1-1-1zm-1 12h-4v-10h4v10z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12.005 14.5a1 1 0 100-2 1 1 0 000 2zm-4.95-7.95l1.41 1.41a5.022 5.022 0 017.08 0l1.41-1.41a6.976 6.976 0 00-4.95-2.05c-1.93 0-3.68.78-4.95 2.05zM12.005.5c-3.04 0-5.79 1.23-7.78 3.22l1.41 1.41a9.011 9.011 0 016.37-2.63c2.49 0 4.74 1.01 6.36 2.64l1.41-1.41c-1.98-2-4.73-3.23-7.77-3.23z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SettingsRemoteIcon;
/* prettier-ignore-end */
