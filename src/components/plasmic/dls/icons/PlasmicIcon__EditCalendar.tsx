// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EditCalendarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EditCalendarIcon(props: EditCalendarIconProps) {
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
          "M3.934 9.5h14v2h2v-6c0-1.1-.9-2-2-2h-1v-2h-2v2h-8v-2h-2v2h-1c-1.11 0-1.99.9-1.99 2l-.01 14a2 2 0 002 2h7v-2h-7v-10zm0-4h14v2h-14v-2zm17.84 10.28l-.71.71-2.12-2.12.71-.71a.996.996 0 011.41 0l.71.71c.39.39.39 1.02 0 1.41zm-3.54-.7l2.12 2.12-5.3 5.3h-2.12v-2.12l5.3-5.3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EditCalendarIcon;
/* prettier-ignore-end */
