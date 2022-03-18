// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StackedBarChartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StackedBarChartIcon(props: StackedBarChartIconProps) {
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
          "M5.5 9.5h3v10h-3v-10zm0-5h3v4h-3v-4zm10 11h3v4h-3v-4zm0-3h3v2h-3v-2zm-5 0h3v7h-3v-7zm0-4h3v3h-3v-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StackedBarChartIcon;
/* prettier-ignore-end */
