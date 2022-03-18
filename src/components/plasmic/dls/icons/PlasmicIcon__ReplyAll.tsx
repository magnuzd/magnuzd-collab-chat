// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ReplyAllIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ReplyAllIcon(props: ReplyAllIconProps) {
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
          "M7 7.5v-3l-7 7 7 7v-3l-4-4 4-4zm6 1v-4l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ReplyAllIcon;
/* prettier-ignore-end */
