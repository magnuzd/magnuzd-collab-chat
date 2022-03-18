// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FindInPageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FindInPageIcon(props: FindInPageIconProps) {
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
          "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 4h7l5 5v8.58l-1.84-1.84a4.992 4.992 0 00-.64-6.28A4.96 4.96 0 0012 8a5 5 0 00-3.53 1.46 4.98 4.98 0 000 7.05 4.982 4.982 0 006.28.63L17.6 20H6V4zm8.11 11.1c-.56.56-1.31.88-2.11.88-.8 0-1.55-.31-2.11-.88-.56-.56-.88-1.31-.88-2.11 0-.8.31-1.55.88-2.11.56-.57 1.31-.88 2.11-.88.8 0 1.55.31 2.11.88.56.56.88 1.31.88 2.11 0 .8-.31 1.55-.88 2.11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FindInPageIcon;
/* prettier-ignore-end */
