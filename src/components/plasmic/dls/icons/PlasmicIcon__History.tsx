// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HistoryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HistoryIcon(props: HistoryIconProps) {
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
          "M13.5 3a9 9 0 00-9 9h-3l3.89 3.89.07.14L9.5 12h-3c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013.5 21a9 9 0 000-18zm-1 5v5l4.25 2.52.77-1.28L14 12.15V8h-1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HistoryIcon;
/* prettier-ignore-end */
