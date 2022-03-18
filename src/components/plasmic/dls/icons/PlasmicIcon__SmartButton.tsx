// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SmartButtonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SmartButtonIcon(props: SmartButtonIconProps) {
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
          "M22 8v6c0 1.1-.9 2-2 2h-1v-2h1V8H4v6h6v2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-7.5 10l1.09-2.41L18 14.5l-2.41-1.09L14.5 11l-1.09 2.41L11 14.5l2.41 1.09L14.5 18zm2.5-5l.62-1.38L19 11l-1.38-.62L17 9l-.62 1.38L15 11l1.38.62L17 13zm-2.5 5l1.09-2.41L18 14.5l-2.41-1.09L14.5 11l-1.09 2.41L11 14.5l2.41 1.09L14.5 18zm2.5-5l.62-1.38L19 11l-1.38-.62L17 9l-.62 1.38L15 11l1.38.62L17 13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SmartButtonIcon;
/* prettier-ignore-end */
