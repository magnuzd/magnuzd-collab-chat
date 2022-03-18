// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OpacityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OpacityIcon(props: OpacityIconProps) {
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
          "M17.66 7.995L12 2.345l-5.66 5.65A8.02 8.02 0 004 13.635c0 2 .78 4.11 2.34 5.67a7.99 7.99 0 0011.32 0c1.56-1.56 2.34-3.67 2.34-5.67s-.78-4.08-2.34-5.64zm-11.66 6c.01-2 .62-3.27 1.76-4.4L12 5.265l4.24 4.38c1.14 1.12 1.75 2.35 1.76 4.35H6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OpacityIcon;
/* prettier-ignore-end */
