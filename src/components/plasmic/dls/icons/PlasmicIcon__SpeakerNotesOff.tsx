// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SpeakerNotesOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SpeakerNotesOffIcon(props: SpeakerNotesOffIconProps) {
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
          "M20.93 3.34v12h-1.34l1.91 1.91a2.01 2.01 0 001.43-1.91v-12c0-1.1-.9-2-2-2H5.59l2 2h13.34zm-14 8h2v2h-2v-2zm12-3h-6.34l2 2h4.34v-2zm0-3h-8v1.34l.66.66h7.34v-2zM2.34.93L.93 2.34l2.01 2.01-.01 16.99 4-4h9l5.73 5.73 1.41-1.41L2.34.93zM6.1 15.34l-1.17 1.17V6.34l2 2v2h2l5 5H6.1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SpeakerNotesOffIcon;
/* prettier-ignore-end */
