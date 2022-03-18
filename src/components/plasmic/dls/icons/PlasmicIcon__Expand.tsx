// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExpandIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExpandIcon(props: ExpandIconProps) {
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
          "M20 20H4v2h16v-2zm0-18H4v2h16V2zM9.41 13.59L8 15l4 4 4-4-1.41-1.41L13 15.17V8.83l1.59 1.58L16 9l-4-4-4 4 1.41 1.41L11 8.83v6.34l-1.59-1.58z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ExpandIcon;
/* prettier-ignore-end */
