// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JoinInnerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JoinInnerIcon(props: JoinInnerIconProps) {
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
          "M12 17.74c1.657 0 3-2.57 3-5.74 0-3.17-1.343-5.74-3-5.74S9 8.83 9 12c0 3.17 1.343 5.74 3 5.74z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9.04 16.87c-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c.9 0 1.75-.19 2.53-.5-.61-.51-1.1-1.07-1.49-1.63zM16 5c-.9 0-1.75.19-2.53.5.61.51 1.1 1.07 1.49 1.63.33-.08.68-.13 1.04-.13 2.76 0 5 2.24 5 5s-2.24 5-5 5c-.36 0-.71-.05-1.04-.13-.39.56-.88 1.12-1.49 1.63.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default JoinInnerIcon;
/* prettier-ignore-end */
