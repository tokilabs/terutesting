// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Password2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Password2Icon(props: Password2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
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
        clipRule={"evenodd"}
        d={
          "M9.27 10.635a1.929 1.929 0 11-1.93-1.929h.004a1.928 1.928 0 011.926 1.93z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9.273 10.635h6.581v1.93m-2.946 0v-1.93"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        clipRule={"evenodd"}
        d={
          "M1 10.635C1 3.41 3.41 1 10.635 1c7.226 0 9.636 2.41 9.636 9.635 0 7.226-2.41 9.636-9.636 9.636C3.41 20.27 1 17.86 1 10.635z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Password2Icon;
/* prettier-ignore-end */
