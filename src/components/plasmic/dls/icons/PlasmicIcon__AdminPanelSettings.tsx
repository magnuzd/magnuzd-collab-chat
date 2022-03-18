// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AdminPanelSettingsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AdminPanelSettingsIcon(props: AdminPanelSettingsIconProps) {
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
        d={"M16 15.62a1.12 1.12 0 100-2.24 1.12 1.12 0 000 2.24z"}
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M16 16.5c-.73 0-2.19.36-2.24 1.08.5.71 1.32 1.17 2.24 1.17.92 0 1.74-.46 2.24-1.17-.05-.72-1.51-1.08-2.24-1.08z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M17 10.09V5.27L9.5 2 2 5.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55A5.973 5.973 0 0016 22c3.31 0 6-2.69 6-6 0-2.97-2.16-5.43-5-5.91zM10 16c0 .56.08 1.11.23 1.62-.24.11-.48.22-.73.3-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4 5.5 2.4v3.51c-2.84.48-5 2.94-5 5.91zm6 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AdminPanelSettingsIcon;
/* prettier-ignore-end */
