// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UpgradeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UpgradeIcon(props: UpgradeIconProps) {
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
        d={"M16 18v2H8v-2h8zM11 7.99V16h2V7.99h3L12 4 8 7.99h3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UpgradeIcon;
/* prettier-ignore-end */
