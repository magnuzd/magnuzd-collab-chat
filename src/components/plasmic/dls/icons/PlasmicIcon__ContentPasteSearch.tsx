// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ContentPasteSearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ContentPasteSearchIcon(props: ContentPasteSearchIconProps) {
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
          "M4 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C13.4 1.84 12.3 1 11 1c-1.3 0-2.4.84-2.82 2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H4V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M19.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S11 14 11 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4-2.7-2.7zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ContentPasteSearchIcon;
/* prettier-ignore-end */
