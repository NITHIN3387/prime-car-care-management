import type { SVGAttributes } from "react";

export const ViewIcon = (props: SVGAttributes<HTMLOrSVGElement>) => {
  const { fill = "currentcolor", ...restProps } = props;

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.000000 512.000000"
      {...restProps}
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={fill}
      >
        <path
          d="M2275 4194 c-631 -96 -1266 -455 -1865 -1054 -197 -197 -345 -370
-379 -440 -22 -46 -26 -69 -26 -140 0 -113 24 -162 151 -309 438 -508 1011
-946 1508 -1154 344 -143 604 -193 960 -184 339 8 607 75 951 237 401 187 882
553 1252 950 261 281 288 324 288 460 0 116 -23 162 -165 325 -384 440 -832
803 -1271 1029 -300 154 -557 241 -839 281 -131 18 -441 18 -565 -1z m477
-549 c146 -26 292 -84 423 -170 77 -50 250 -223 300 -300 125 -191 184 -386
185 -611 1 -357 -157 -673 -445 -889 -190 -143 -410 -215 -657 -215 -610 0
-1099 490 -1098 1099 1 296 100 545 300 755 119 125 246 212 393 270 66 26
192 61 252 69 70 10 276 5 347 -8z"
        />
        <path
          d="M2445 3340 c-193 -31 -373 -133 -495 -283 -62 -76 -133 -217 -157
-312 -24 -101 -22 -286 5 -386 75 -276 288 -487 572 -565 97 -27 290 -25 393
4 418 118 661 530 562 952 -21 89 -93 232 -155 307 -101 125 -271 233 -420
267 -84 20 -229 27 -305 16z"
        />
      </g>
    </svg>
  );
};
