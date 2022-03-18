// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlarmOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlarmOffIcon(props: AlarmOffIconProps) {
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
          "M10.263 6.385c.62-.18 1.28-.29 1.96-.29 3.86 0 7 3.14 7 7 0 .68-.11 1.34-.29 1.96l1.56 1.56c.47-1.08.73-2.27.73-3.52a9 9 0 00-12.53-8.28l1.57 1.57zm7.297-4.48l4.607 3.845-1.28 1.535-4.61-3.843 1.283-1.537zm-14.317.29l-1.41 1.41 1.37 1.37-.92.77 1.28 1.54 1.06-.88.8.8a8.964 8.964 0 00-2.2 5.89 9 9 0 009 9c2.25 0 4.31-.83 5.89-2.2l2.1 2.1 1.41-1.41-18.38-18.39zm8.98 17.9c-3.86 0-7-3.14-7-7 0-1.7.61-3.26 1.62-4.47l9.85 9.85a6.956 6.956 0 01-4.47 1.62zm-4.52-16.27l.46-.38-1.28-1.54-.6.5 1.42 1.42z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlarmOffIcon;
/* prettier-ignore-end */
