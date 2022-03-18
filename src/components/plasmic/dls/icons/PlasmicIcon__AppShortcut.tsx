// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppShortcutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppShortcutIcon(props: AppShortcutIconProps) {
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
          "M15 18H5V6h10v1h2V3c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zM5 3h10v1H5V3zm10 18H5v-1h10v1zm3.38-11.38L19 11l.62-1.38L21 9l-1.38-.62L19 7l-.62 1.38L17 9l1.38.62z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M14 8l-1.25 2.75L10 12l2.75 1.25L14 16l1.25-2.75L18 12l-2.75-1.25L14 8zm5 5l-.62 1.38L17 15l1.38.62L19 17l.62-1.38L21 15l-1.38-.62L19 13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppShortcutIcon;
/* prettier-ignore-end */
