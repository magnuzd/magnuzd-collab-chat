// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SwitchAccessShortcutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SwitchAccessShortcutIcon(props: SwitchAccessShortcutIconProps) {
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
          "M8.06 8.94L6 8l2.06-.94L9 5l.94 2.06L12 8l-2.06.94L9 11l-.94-2.06zM9 21l.94-2.06L12 18l-2.06-.94L9 15l-.94 2.06L6 18l2.06.94L9 21zm-3.63-8.63L4 13l1.37.63L6 15l.63-1.37L8 13l-1.37-.63L6 11l-.63 1.37zM13 12c0-3.09 1.38-5.94 3.44-8H13V2h7v7h-2V5.28c-1.8 1.74-3 4.2-3 6.72 0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SwitchAccessShortcutIcon;
/* prettier-ignore-end */
