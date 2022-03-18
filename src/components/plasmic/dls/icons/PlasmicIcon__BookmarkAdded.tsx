// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookmarkAddedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookmarkAddedIcon(props: BookmarkAddedIconProps) {
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
          "M15.115 11.185v6.97l-5-2.14-5 2.14V5.185h6v-2h-6c-1.1 0-2 .9-2 2v16l7-3 7 3v-10h-2zm.83-2l-2.83-2.83 1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41-4.94 4.96z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BookmarkAddedIcon;
/* prettier-ignore-end */
