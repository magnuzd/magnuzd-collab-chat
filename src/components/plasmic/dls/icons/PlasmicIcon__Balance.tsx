// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BalanceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BalanceIcon(props: BalanceIconProps) {
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
          "M13 8.33c.85-.3 1.53-.98 1.83-1.83H18l-3 7c0 1.66 1.57 3 3.5 3s3.5-1.34 3.5-3l-3-7h2v-2h-6.17a2.99 2.99 0 00-2.83-2c-1.31 0-2.42.83-2.83 2H3v2h2l-3 7c0 1.66 1.57 3 3.5 3s3.5-1.34 3.5-3l-3-7h3.17c.3.85.98 1.53 1.83 1.83V19.5H2v2h20v-2h-9V8.33zm7.37 5.17h-3.74l1.87-4.36 1.87 4.36zm-13 0H3.63L5.5 9.14l1.87 4.36zm4.63-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BalanceIcon;
/* prettier-ignore-end */
