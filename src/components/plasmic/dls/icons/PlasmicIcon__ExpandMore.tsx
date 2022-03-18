// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExpandMoreIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExpandMoreIcon(props: ExpandMoreIconProps) {
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
        d={"M16.59 8.295L12 12.875l-4.59-4.58L6 9.705l6 6 6-6-1.41-1.41z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ExpandMoreIcon;
/* prettier-ignore-end */
