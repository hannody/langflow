import { stringToBool } from "@/utils/utils";

const DeepSeekSVG = (props) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="225.000000pt"
    height="225.000000pt"
    viewBox="0 0 225.000000 225.000000"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g
      transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
      fill={stringToBool(props.isdark) ? "#1f3a94" : "#4c6cfc"}
      stroke="none"
    >
      <path
        d="M1527 1893 c-18 -39 -22 -66 -22 -143 0 -84 3 -102 29 -158 20 -43
47 -80 88 -118 58 -53 59 -56 53 -93 -3 -22 -13 -47 -20 -58 -25 -33 -110 23
-266 174 -76 72 -162 148 -192 168 -90 60 -101 115 -35 177 35 32 40 41 28 49
-27 18 -169 3 -250 -27 -71 -25 -86 -27 -255 -28 -169 -1 -185 -3 -258 -29
-170 -59 -286 -166 -362 -332 -49 -106 -60 -164 -59 -305 1 -94 7 -145 23
-205 76 -283 304 -521 591 -617 92 -31 100 -32 265 -32 133 0 184 3 235 18 84
23 174 66 233 111 l47 36 47 -17 c29 -9 85 -16 138 -17 143 -3 195 15 195 68
0 19 -11 29 -53 48 -30 13 -71 30 -93 37 -69 22 -69 26 -6 99 32 36 73 88 91
114 84 123 156 333 168 488 l6 76 56 13 c75 17 124 43 182 97 60 56 95 125
111 220 10 58 9 74 -1 87 -19 23 -34 20 -67 -15 -41 -44 -99 -68 -164 -69 -57
0 -125 -25 -149 -53 -19 -23 -28 -21 -35 7 -10 39 -55 85 -110 113 -70 35 -93
58 -111 114 -22 66 -48 67 -78 2z m-1161 -544 c190 -33 365 -129 501 -273 38
-39 113 -136 168 -215 105 -151 216 -278 284 -326 23 -15 41 -32 41 -38 0 -14
-146 -2 -199 17 -24 9 -83 45 -130 80 -139 104 -217 149 -259 150 -33 1 -37
-2 -40 -26 -2 -14 8 -49 22 -77 30 -58 26 -76 -18 -91 -100 -33 -312 102 -429
272 -44 64 -103 193 -127 278 -28 100 -37 221 -19 237 28 23 116 28 205 12z
m943 -79 c50 -25 130 -115 166 -186 25 -50 27 -57 13 -71 -9 -8 -36 -18 -61
-20 -36 -4 -53 -1 -81 17 -47 28 -56 47 -56 114 0 61 -24 96 -66 96 -35 0 -54
10 -54 29 0 44 73 55 139 21z m-79 -105 c10 -12 10 -18 0 -30 -25 -30 -61 -7
-46 30 3 8 12 15 19 15 8 0 20 -7 27 -15z"
      />
    </g>
  </svg>
);

export default DeepSeekSVG;