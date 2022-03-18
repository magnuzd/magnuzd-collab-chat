// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlarmAddIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlarmAddIcon(props: AlarmAddIconProps) {
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
          "M17.337 1.905l4.607 3.845-1.28 1.535-4.61-3.843 1.283-1.537zm-10.675 0l1.282 1.536-4.607 3.844-1.28-1.536 4.606-3.844zM12 4.095a9 9 0 10.002 18.001A9 9 0 0012 4.095zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3v-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlarmAddIcon;
/* prettier-ignore-end */
