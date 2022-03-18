// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FactCheckIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FactCheckIcon(props: FactCheckIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M19.41 10.42L17.99 9l-3.17 3.17-1.41-1.42L12 12.16 14.82 15l4.59-4.58z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M10 7H5v2h5V7zm0 4H5v2h5v-2zm0 4H5v2h5v-2z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FactCheckIcon;
/* prettier-ignore-end */
