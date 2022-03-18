// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorkOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorkOffIcon(props: WorkOffIconProps) {
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
          "M9.43 3.58h4v2h-3.6l2 2h7.6v7.6l2 2v-9.6c0-1.11-.89-2-2-2h-4v-2c0-1.11-.89-2-2-2h-4c-.99 0-1.8.7-1.96 1.64l1.96 1.96v-1.6zm-6.6-2.16L1.42 2.83l2.75 2.75h-.74c-1.11 0-1.99.89-1.99 2l-.01 11c0 1.11.89 2 2 2h15.74l2 2 1.41-1.41L2.83 1.42zm.6 17.16v-11h2.74l11 11H3.43z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WorkOffIcon;
/* prettier-ignore-end */
