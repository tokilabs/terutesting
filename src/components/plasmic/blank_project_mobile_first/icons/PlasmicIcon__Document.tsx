// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DocumentIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DocumentIcon(props: DocumentIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 38"}
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
        d={"M23.973 25.814H10.135m13.838-7.206H10.135m5.28-7.206h-5.28"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        clipRule={"evenodd"}
        d={
          "M1 18.73c0 13.295 4.021 17.728 16.083 17.728 12.063 0 16.083-4.433 16.083-17.729S29.146 1 17.083 1C5.02 1 1 5.433 1 18.73z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DocumentIcon;
/* prettier-ignore-end */
