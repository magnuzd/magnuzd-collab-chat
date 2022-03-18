// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PetsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PetsIcon(props: PetsIconProps) {
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
          "M4.5 11.498a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm4.5-4a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm6 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm4.5 4a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-2.16 2.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PetsIcon;
/* prettier-ignore-end */
