// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TextFormatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TextFormatIcon(props: TextFormatIconProps) {
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
          "M5 17.5v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1l-4.75-11h-1.5l-4.75 11h2.1l.9-2.2zM12 6.48l1.87 5.02h-3.74L12 6.48z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TextFormatIcon;
/* prettier-ignore-end */
