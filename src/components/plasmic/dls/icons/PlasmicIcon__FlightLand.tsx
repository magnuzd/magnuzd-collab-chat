// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlightLandIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlightLandIcon(props: FlightLandIconProps) {
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
          "M2.5 19.5h19v2h-19v-2zm16.84-3.15c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02-1.93-.51v8.28L5.15 9.45l-.93-2.32-1.45-.39v5.17l16.57 4.44z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FlightLandIcon;
/* prettier-ignore-end */
