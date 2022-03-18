// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LoyaltyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LoyaltyIcon(props: LoyaltyIconProps) {
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
          "M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.4 4.55c0 .57.23 1.07.6 1.45l3.5 3.5 3.5-3.5a2.053 2.053 0 00-2.9-2.9l-.6.6-.6-.59c-.37-.38-.89-.61-1.45-.61-1.13 0-2.05.92-2.05 2.05z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LoyaltyIcon;
/* prettier-ignore-end */
