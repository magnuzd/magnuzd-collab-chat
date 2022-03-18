// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NoAccountsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NoAccountsIcon(props: NoAccountsIconProps) {
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
          "M15.18 10.94c.2-.44.32-.92.32-1.44C15.5 7.57 13.93 6 12 6c-.52 0-1 .12-1.44.32l4.62 4.62z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.85.63-3.55 1.69-4.9l2.86 2.86a3.47 3.47 0 002.99 2.99l2.2 2.2c-.57-.1-1.15-.15-1.74-.15-2.32 0-4.45.8-6.14 2.12A7.957 7.957 0 014 12zm8 8c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17c1.74 0 3.34.56 4.65 1.5-1.31.94-2.91 1.5-4.65 1.5zm6.31-3.1L7.1 5.69A7.902 7.902 0 0112 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.54-1.69 4.9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NoAccountsIcon;
/* prettier-ignore-end */
