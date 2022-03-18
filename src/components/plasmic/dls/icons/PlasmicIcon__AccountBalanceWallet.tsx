// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AccountBalanceWalletIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AccountBalanceWalletIcon(props: AccountBalanceWalletIconProps) {
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
          "M20.5 7.28V5c0-1.1-.9-2-2-2h-14a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-2.28a2 2 0 001-1.72V9a2 2 0 00-1-1.72zM19.5 9v6h-7V9h7zm-15 10V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2h-14z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M15.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AccountBalanceWalletIcon;
/* prettier-ignore-end */
