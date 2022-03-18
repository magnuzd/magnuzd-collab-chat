// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlightTakeoffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlightTakeoffIcon(props: FlightTakeoffIconProps) {
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
          "M2.52 18.715h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06l-5.31 1.42-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49 16.57-4.43c.81-.23 1.28-1.05 1.07-1.85z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FlightTakeoffIcon;
/* prettier-ignore-end */
