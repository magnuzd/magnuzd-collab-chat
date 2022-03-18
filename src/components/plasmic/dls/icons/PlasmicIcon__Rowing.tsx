// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RowingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RowingIcon(props: RowingIconProps) {
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
          "M8 14l-4.5 4.5L5 20l3.5-3.5h2L8 14zM14.5.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01l-3 2.99-2.99-3.01V19l-7.1-7.09c-.31.05-.61.07-.91.07V9.82c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03c1.24.01 2.25 1.02 2.25 2.26v5.75c0 .84-.35 1.61-.92 2.16L12 12.09V9.82c-.63.52-1.43 1.02-2.29 1.39L16 17.5h1.5l3 3.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RowingIcon;
/* prettier-ignore-end */
