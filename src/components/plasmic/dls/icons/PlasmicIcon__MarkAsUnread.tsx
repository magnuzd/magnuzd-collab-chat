// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MarkAsUnreadIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MarkAsUnreadIcon(props: MarkAsUnreadIconProps) {
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
          "M16.23 7.5h2.6c-.06-.47-.36-.94-.79-1.17L10.5 2.5 2.8 6.33c-.48.26-.8.81-.8 1.34v7.83c0 1.1.9 2 2 2V7.9l6.5-3.4 5.73 3z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M20 8.5H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm0 11H7v-7l6.5 3.33L20 12.5v7zm-6.5-5.67L7 10.5h13l-6.5 3.33z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MarkAsUnreadIcon;
/* prettier-ignore-end */
