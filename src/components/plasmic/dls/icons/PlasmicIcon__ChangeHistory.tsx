// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChangeHistoryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChangeHistoryIcon(props: ChangeHistoryIconProps) {
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
        d={"M12 7.77L18.39 18H5.61L12 7.77zM12 4L2 20h20L12 4z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChangeHistoryIcon;
/* prettier-ignore-end */
