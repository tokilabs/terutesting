// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse2Icon(props: Ellipse2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 55 28"}
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
          "M54.667.333a27.332 27.332 0 01-37.794 25.253A27.332 27.332 0 010 .333h7.17a20.162 20.162 0 1040.326 0h7.17z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse2Icon;
/* prettier-ignore-end */
