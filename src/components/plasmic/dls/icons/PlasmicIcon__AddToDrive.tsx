// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AddToDriveIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AddToDriveIcon(props: AddToDriveIconProps) {
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
          "M18.5 11c.17 0 .33.01.49.02L14.5 3h-6l5.68 9.84A5.986 5.986 0 0118.5 11zM7.65 4.52L1.5 15.5l3 5.5 6.33-10.97-3.18-5.51zM12.7 15.5H9.4L6.23 21h7.81a5.93 5.93 0 01-1.54-4c0-.52.07-1.02.2-1.5zm6.8.5v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AddToDriveIcon;
/* prettier-ignore-end */
