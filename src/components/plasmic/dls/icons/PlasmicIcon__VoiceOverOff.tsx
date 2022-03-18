// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VoiceOverOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VoiceOverOffIcon(props: VoiceOverOffIconProps) {
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
          "M16.762 5.86l-1.68 1.69c.8 1.13.83 2.58.09 3.74l1.7 1.7c1.9-2.02 1.87-4.98-.11-7.13zm3.31-3.36l-1.63 1.63c2.72 2.97 2.76 7.39.14 10.56l1.64 1.64c3.74-3.89 3.71-9.84-.15-13.83zM9.432 5.54l3.53 3.53a3.979 3.979 0 00-3.53-3.53zm-5.02-2.18l-1.41 1.41 2.62 2.62c-.39.61-.62 1.33-.62 2.11 0 2.21 1.79 4 4 4 .78 0 1.5-.23 2.11-.62l4.4 4.4c-1.77-1.18-4.73-1.78-6.51-1.78-2.67 0-8 1.34-8 4v2h16v-2c0-.37-.11-.7-.29-1.02l3.02 3.02 1.41-1.41L4.412 3.36zM3.002 19.5c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2h-12zm6-8c-1.1 0-2-.9-2-2 0-.22.04-.42.11-.62l2.51 2.51c-.2.07-.4.11-.62.11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VoiceOverOffIcon;
/* prettier-ignore-end */
