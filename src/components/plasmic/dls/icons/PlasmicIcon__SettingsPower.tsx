// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SettingsPowerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SettingsPowerIcon(props: SettingsPowerIconProps) {
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
          "M7 23h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V1zm3.56 2.44l-1.45 1.45A5.969 5.969 0 0118 10c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 3.44A7.961 7.961 0 004 10c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 23h2v-2h-2v2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SettingsPowerIcon;
/* prettier-ignore-end */
