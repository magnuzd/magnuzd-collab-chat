// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ContentPasteOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ContentPasteOffIcon(props: ContentPasteOffIconProps) {
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
          "M21.9 21.385L3.52 3.005 2.1 4.415l1.61 1.61v13.17c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.42zm-16.19-2.19V8.025l11.17 11.17H5.71zm12-11v-3h2v11.17l2 2V5.195c0-1.1-.9-2-2-2h-4.18c-.42-1.16-1.52-2-2.82-2-1.3 0-2.4.84-2.82 2H6.54l5 5h6.17zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ContentPasteOffIcon;
/* prettier-ignore-end */
