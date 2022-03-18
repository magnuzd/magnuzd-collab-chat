// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CommentBankIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CommentBankIcon(props: CommentBankIconProps) {
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

      <path d={"M18 14V6h-5v8l2.5-1.5L18 14z"} fill={"currentColor"}></path>

      <path
        d={
          "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CommentBankIcon;
/* prettier-ignore-end */
