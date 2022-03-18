// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DoubleArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DoubleArrowIcon(props: DoubleArrowIconProps) {
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
        d={"M15.25 5h-4.5l5 7-5 7h4.5l5-7-5-7z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M8.25 5h-4.5l5 7-5 7h4.5l5-7-5-7z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DoubleArrowIcon;
/* prettier-ignore-end */
