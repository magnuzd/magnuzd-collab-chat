// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NotificationImportantIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NotificationImportantIcon(
  props: NotificationImportantIconProps
) {
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
          "M10.01 20.76c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zM12 5.75c2.76 0 5 2.24 5 5v7H7v-7c0-2.76 2.24-5 5-5zm0-4.5c-.83 0-1.5.67-1.5 1.5v1.17C7.36 4.6 5 7.4 5 10.75v6l-2 2v1h18v-1l-2-2v-6c0-3.35-2.36-6.15-5.5-6.83V2.75c0-.83-.67-1.5-1.5-1.5zm-1 6.5h2v4h-2v-4zm0 6h2v2h-2v-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NotificationImportantIcon;
/* prettier-ignore-end */
