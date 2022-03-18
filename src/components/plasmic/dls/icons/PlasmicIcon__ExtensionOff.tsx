// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExtensionOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExtensionOffIcon(props: ExtensionOffIconProps) {
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
          "M1.445 4.17l1.62 1.62c0 .05-.01.1-.01.16v3.8c2.7 0 3 2.16 3 2.7s-.29 2.7-3 2.7v3.8c0 1.1.9 2 2 2h3.8c0-2.71 2.16-3 2.7-3s2.7.29 2.7 3h3.8c.06 0 .11 0 .16-.01l1.61 1.61 1.41-1.41L2.865 2.76l-1.42 1.41zm10.11 11.78c-1.5 0-3.57.83-4.37 3h-2.13v-2.13c2.17-.8 3-2.87 3-4.37 0-.69-.18-1.5-.58-2.25l6.33 6.33a4.89 4.89 0 00-2.25-.58zm-2.67-10l-2-2h2.17a2.5 2.5 0 015 0h4c1.1 0 2 .9 2 2v4a2.5 2.5 0 010 5v2.17l-2-2v-2.17h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2v-6h-6v-2c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2h-2.17z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ExtensionOffIcon;
/* prettier-ignore-end */
