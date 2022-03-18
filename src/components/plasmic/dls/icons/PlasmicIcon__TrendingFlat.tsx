// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrendingFlatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrendingFlatIcon(props: TrendingFlatIconProps) {
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

      <path d={"M21.5 12l-4-4v3h-15v2h15v3l4-4z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default TrendingFlatIcon;
/* prettier-ignore-end */
