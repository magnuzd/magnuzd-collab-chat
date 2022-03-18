// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlarmIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlarmIcon(props: AlarmIconProps) {
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
          "M12.5 8.095H11v6l4.75 2.85.75-1.23-4-2.37v-5.25zm4.837-6.19l4.607 3.845-1.28 1.535-4.61-3.843 1.283-1.537zm-10.675 0l1.282 1.536-4.607 3.844-1.28-1.536 4.606-3.844zM12 4.095a9 9 0 10.002 18.001A9 9 0 0012 4.095zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlarmIcon;
/* prettier-ignore-end */
