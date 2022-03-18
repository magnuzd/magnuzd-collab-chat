// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SatelliteAltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SatelliteAltIcon(props: SatelliteAltIconProps) {
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
          "M21.503 14.501h2a9 9 0 01-9 9v-2c3.87 0 7-3.13 7-7zm-7 3v2c2.76 0 5-2.24 5-5h-2c0 1.66-1.34 3-3 3zm4.26-16.41l3.54 3.54c.78.78.78 2.05 0 2.83l-3.18 3.18c-.78.78-2.05.78-2.83 0l-1.24-1.24-.71.7 1.24 1.24c.78.78.78 2.05 0 2.83l-1.41 1.41c-.78.78-2.05.78-2.83 0l-1.24-1.24-.71.71 1.24 1.24c.78.78.78 2.05 0 2.83l-3.18 3.18c-.78.78-2.05.78-2.83 0l-3.54-3.54c-.78-.78-.78-2.05 0-2.83l3.18-3.18c.78-.78 2.05-.78 2.83 0l1.24 1.24.71-.71-1.24-1.23c-.78-.78-.78-2.05 0-2.83l1.42-1.42c.78-.78 2.05-.78 2.83 0l1.24 1.24.71-.71-1.25-1.23c-.78-.78-.78-2.05 0-2.83l3.18-3.18c.79-.79 2.05-.79 2.83 0zm-15.2 15.2l-1.06 1.06 3.54 3.54 1.06-1.06-3.54-3.54zm2.12-2.12l-1.06 1.06 3.54 3.54 1.06-1.06-3.54-3.54zm4.95-4.95l-1.41 1.41 3.54 3.54 1.41-1.41-3.54-3.54zm4.6-4.6l-1.06 1.06 3.54 3.54 1.06-1.06-3.54-3.54zm2.12-2.12l-1.06 1.06 3.54 3.54 1.06-1.06-3.54-3.54z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SatelliteAltIcon;
/* prettier-ignore-end */
