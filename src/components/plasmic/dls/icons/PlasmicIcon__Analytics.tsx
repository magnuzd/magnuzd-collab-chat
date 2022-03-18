// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AnalyticsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AnalyticsIcon(props: AnalyticsIconProps) {
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
          "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M9 12H7v5h2v-5zm8-5h-2v10h2V7zm-4 7h-2v3h2v-3zm0-4h-2v2h2v-2z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AnalyticsIcon;
/* prettier-ignore-end */
