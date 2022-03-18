// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SettingsInputAntennaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SettingsInputAntennaIcon(props: SettingsInputAntennaIconProps) {
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
          "M12 5.295c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29a2.5 2.5 0 00-5 0c0 1.02.62 1.9 1.5 2.29v3.3l-3.41 3.41L9 22.705l3-3 3 3 1.41-1.41-3.41-3.41v-3.3zm-1-13.29c-6.07 0-11 4.93-11 11h2a9 9 0 0118 0h2c0-6.07-4.93-11-11-11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SettingsInputAntennaIcon;
/* prettier-ignore-end */
