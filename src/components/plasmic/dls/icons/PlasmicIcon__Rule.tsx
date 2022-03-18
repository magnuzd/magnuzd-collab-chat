// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RuleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RuleIcon(props: RuleIconProps) {
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
          "M16.45 11.035l-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66zm-5.54-4h-9v2h9v-2zm10 6.41l-1.41-1.41-2.59 2.59-2.59-2.59-1.41 1.41 2.59 2.59-2.59 2.59 1.41 1.41 2.59-2.59 2.59 2.59 1.41-1.41-2.59-2.59 2.59-2.59zm-10 1.59h-9v2h9v-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RuleIcon;
/* prettier-ignore-end */
