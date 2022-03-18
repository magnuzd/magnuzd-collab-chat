// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AddchartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AddchartIcon(props: AddchartIconProps) {
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
          "M21.5 5.5v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3zm-3 14h-14v-14h6v-2h-6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2v6zm-4-6v4h2v-4h-2zm-4 4h2v-8h-2v8zm-2 0v-6h-2v6h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AddchartIcon;
/* prettier-ignore-end */
