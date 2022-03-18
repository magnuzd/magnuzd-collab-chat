// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SettingsVoiceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SettingsVoiceIcon(props: SettingsVoiceIconProps) {
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
          "M7 21.5h2v2H7v-2zm5-9c1.66 0 3-1.34 3-3v-6c0-1.66-1.34-3-3-3s-3 1.34-3 3v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .56-.44 1-1 1-.55 0-1-.45-1-1v-6zm0 18h2v2h-2v-2zm4 0h2v2h-2v-2zm4-12h-1.7c0 3-2.54 5.1-5.3 5.1s-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72v3.28h2v-3.28c3.28-.49 6-3.31 6-6.72z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SettingsVoiceIcon;
/* prettier-ignore-end */
