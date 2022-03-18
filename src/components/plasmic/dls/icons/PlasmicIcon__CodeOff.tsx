// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CodeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CodeOffIcon(props: CodeOffIconProps) {
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
          "M19.475 11.29l-4.58-4.59 1.41-1.41 6 6-3.59 3.59-1.41-1.42 2.17-2.17zM1.695 3.51l4.19 4.19-3.58 3.59 6 6 1.41-1.41-4.58-4.59 2.17-2.17 12.78 12.78 1.41-1.41L3.115 2.1l-1.42 1.41z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CodeOffIcon;
/* prettier-ignore-end */
