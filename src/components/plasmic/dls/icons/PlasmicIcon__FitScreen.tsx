// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FitScreenIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FitScreenIcon(props: FitScreenIconProps) {
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
          "M6 16h12V8H6v8zm2-6h8v4H8v-4zm-4 5H2v3c0 1.1.9 2 2 2h3v-2H4v-3zm0-9h3V4H4c-1.1 0-2 .9-2 2v3h2V6zm16-2h-3v2h3v3h2V6c0-1.1-.9-2-2-2zm0 14h-3v2h3c1.1 0 2-.9 2-2v-3h-2v3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FitScreenIcon;
/* prettier-ignore-end */
