// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ModelTrainingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ModelTrainingIcon(props: ModelTrainingIconProps) {
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
          "M15.5 14.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5zm-2.5 6h-2V22h2v-1.5zm6-6.5c0 1.68-.59 3.21-1.58 4.42l1.42 1.42a8.978 8.978 0 00-1-12.68l-1.42 1.42A6.993 6.993 0 0119 14zm-3-8l-4-4v3a9 9 0 00-9 9c0 2.23.82 4.27 2.16 5.84l1.42-1.42A6.938 6.938 0 015 14c0-3.86 3.14-7 7-7v3l4-4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ModelTrainingIcon;
/* prettier-ignore-end */
