// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HourglassDisabledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HourglassDisabledIcon(props: HourglassDisabledIconProps) {
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
          "M8.705 3.34h8v3.5l-2.84 2.84 1.25 1.25 3.59-3.58-.01-.01h.01v-6h-12v1.17l2 2V3.34zm-5.9-1.9l-1.41 1.41 8.9 8.9-3.59 3.59.01.01h-.01v5.99h12v-1.17l2.49 2.49 1.41-1.41-19.8-19.81zm13.9 17.9h-8v-3.5l2.84-2.84 5.16 5.17v1.17z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HourglassDisabledIcon;
/* prettier-ignore-end */
