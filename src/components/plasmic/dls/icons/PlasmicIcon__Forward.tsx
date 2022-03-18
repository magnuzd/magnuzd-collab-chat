// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ForwardIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ForwardIcon(props: ForwardIconProps) {
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
        d={"M14 8.83L17.17 12 14 15.17V14H6v-4h8V8.83zM12 4v4H4v8h8v4l8-8-8-8z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ForwardIcon;
/* prettier-ignore-end */
