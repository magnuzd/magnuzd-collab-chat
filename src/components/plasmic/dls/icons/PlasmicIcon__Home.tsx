// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomeIcon(props: HomeIconProps) {
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
          "M12 6.19l5 4.5v7.81h-2v-6H9v6H7v-7.81l5-4.5zm0-2.69l-10 9h3v8h6v-6h2v6h6v-8h3l-10-9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HomeIcon;
/* prettier-ignore-end */
