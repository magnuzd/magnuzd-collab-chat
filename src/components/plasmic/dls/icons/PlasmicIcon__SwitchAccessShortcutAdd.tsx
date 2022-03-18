// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SwitchAccessShortcutAddIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SwitchAccessShortcutAddIcon(
  props: SwitchAccessShortcutAddIconProps
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
          "M5.56 8.94L3.5 8l2.06-.94L6.5 5l.94 2.06L9.5 8l-2.06.94L6.5 11l-.94-2.06zM6.5 21l.94-2.06L9.5 18l-2.06-.94L6.5 15l-.94 2.06L3.5 18l2.06.94L6.5 21zm-3.63-8.63L1.5 13l1.37.63L3.5 15l.63-1.37L5.5 13l-1.37-.63L3.5 11l-.63 1.37zM10.5 12c0-3.09 1.38-5.94 3.44-8H10.5V2h7v7h-2V5.28c-1.8 1.74-3 4.2-3 6.72 0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10zm12 2h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SwitchAccessShortcutAddIcon;
/* prettier-ignore-end */
