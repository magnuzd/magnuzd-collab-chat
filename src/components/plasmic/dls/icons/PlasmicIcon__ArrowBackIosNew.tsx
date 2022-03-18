// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBackIosNewIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBackIosNewIcon(props: ArrowBackIosNewIconProps) {
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
        d={"M17.885 3.77L16.115 2l-10 10 10 10 1.77-1.77L9.655 12l8.23-8.23z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBackIosNewIcon;
/* prettier-ignore-end */
