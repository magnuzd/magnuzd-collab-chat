// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookmarkRemoveIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookmarkRemoveIcon(props: BookmarkRemoveIconProps) {
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
          "M16 11v6.97l-5-2.14-5 2.14V5h6V3H6c-1.1 0-2 .9-2 2v16l7-3 7 3V11h-2zm4-4h-6V5h6v2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BookmarkRemoveIcon;
/* prettier-ignore-end */
