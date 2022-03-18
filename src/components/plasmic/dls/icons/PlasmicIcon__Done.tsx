// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DoneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DoneIcon(props: DoneIconProps) {
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
        d={"M8.8 15.9l-4.2-4.2-1.4 1.4 5.6 5.6 12-12-1.4-1.4L8.8 15.9z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DoneIcon;
/* prettier-ignore-end */
