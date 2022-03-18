// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SensorsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SensorsIcon(props: SensorsIconProps) {
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
          "M7.76 16.24A5.944 5.944 0 016 12c0-1.66.67-3.16 1.76-4.24l1.42 1.42C8.45 9.9 8 10.9 8 12c0 1.1.45 2.1 1.17 2.83l-1.41 1.41zm8.48 0A5.944 5.944 0 0018 12c0-1.66-.67-3.16-1.76-4.24l-1.42 1.42C15.55 9.9 16 10.9 16 12c0 1.1-.45 2.1-1.17 2.83l1.41 1.41zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 2c0 2.21-.9 4.21-2.35 5.65l1.42 1.42A9.969 9.969 0 0022 12c0-2.76-1.12-5.26-2.93-7.07l-1.42 1.42A7.94 7.94 0 0120 12zM6.35 6.35L4.93 4.93A9.969 9.969 0 002 12c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42A7.94 7.94 0 014 12c0-2.21.9-4.21 2.35-5.65z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SensorsIcon;
/* prettier-ignore-end */
