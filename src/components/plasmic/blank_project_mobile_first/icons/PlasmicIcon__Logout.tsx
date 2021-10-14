// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoutIcon(props: LogoutIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 22"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.346 10.761H8.803m9.494-3.037l3.05 3.037-3.05 3.038m-2.609-7.716C15.345 2.354 13.95 1 8.397 1 1 1 1 3.406 1 10.635c0 7.23 0 9.636 7.397 9.636 5.552 0 6.948-1.354 7.291-5.084"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LogoutIcon;
/* prettier-ignore-end */
