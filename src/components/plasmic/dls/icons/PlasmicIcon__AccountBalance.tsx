// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AccountBalanceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AccountBalanceIcon(props: AccountBalanceIconProps) {
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
        d={
          "M7 11H5v7h2v-7zm6 0h-2v7h2v-7zm8.5 9h-19v2h19v-2zM19 11h-2v7h2v-7zm-7-6.74L17.21 7H6.79L12 4.26zM12 2L2.5 7v2h19V7L12 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AccountBalanceIcon;
/* prettier-ignore-end */
