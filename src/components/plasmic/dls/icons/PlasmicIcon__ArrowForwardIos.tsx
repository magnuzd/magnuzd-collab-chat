// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowForwardIosIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowForwardIosIcon(props: ArrowForwardIosIconProps) {
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
        d={"M6.115 20.23L7.885 22l10-10-10-10-1.77 1.77 8.23 8.23-8.23 8.23z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowForwardIosIcon;
/* prettier-ignore-end */
