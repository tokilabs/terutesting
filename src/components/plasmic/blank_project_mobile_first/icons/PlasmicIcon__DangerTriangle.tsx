// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DangerTriangleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DangerTriangleIcon(props: DangerTriangleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
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
          "M6.542 11.5c-3.789 0-5.276-.27-5.517-1.631-.24-1.363 1.301-3.924 1.777-4.77C4.39 2.275 5.47 1 6.542 1c1.07 0 2.15 1.274 3.74 4.1.475.845 2.017 3.406 1.776 4.769-.24 1.362-1.728 1.631-5.516 1.631z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6.542 4.208V6.48M6.54 8.522h.004"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DangerTriangleIcon;
/* prettier-ignore-end */
