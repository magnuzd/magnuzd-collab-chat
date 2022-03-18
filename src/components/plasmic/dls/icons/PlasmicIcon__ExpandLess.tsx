// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExpandLessIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExpandLessIcon(props: ExpandLessIconProps) {
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
        d={"M12 8.295l-6 6 1.41 1.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ExpandLessIcon;
/* prettier-ignore-end */
