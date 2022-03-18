// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TollIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TollIcon(props: TollIconProps) {
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
          "M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12a5.99 5.99 0 014-5.65V4.26C3.55 5.15 1 8.27 1 12c0 3.73 2.55 6.85 6 7.74v-2.09A5.99 5.99 0 013 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TollIcon;
/* prettier-ignore-end */
