"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const minDistance = 10;

export default function MinimumDistanceSlider() {
  const [value1, setValue1] = React.useState<number[]>([20, 37]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <div>
      <Box sx={{ width: 250 }}>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange1}
          disableSwap
          sx={{
            "& .MuiSlider-thumb": {
              backgroundImage: `url("/slider-thumb.svg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100 100",
              backgroundPosition: "center",
              borderRadius: "20px 0px 20px 0px",
              objectFit: "contain",
              backgroundColor: "rgba(98, 195, 198, 1)",

              "&:hover, &.Mui-focusVisible": {
                boxShadow: "none",
              },
            },
            "& .MuiSlider-track": {
              backgroundColor: "rgba(98, 195, 198, 1)",
              border: "none",
              height: "7px",
            },
            "& .MuiSlider-rail": {
              background: "rgba(98, 195, 198, 0.3)",
              height: "7px",
            },
          }}
        />
      </Box>
      <div className="flex items-center gap-1 w-full">
        <div className="bg-[rgba(129,145,145,0.1)] rounded-[20px] pt-[2px] pr-[10px] pb-[2px] pl-[10px] w-[50%]">
          <h1 className="font-[Sora] font-normal text-[16px] leading-[20.16px] text-[rgba(54,87,88,1)]">
            {value1[1]}%
          </h1>
        </div>
        <div>
          <h1 className="font-[SF Pro Display] font-normal text-[18px] leading-[21.48px] text-[rgba(88,85,85,1)]">
            -
          </h1>
        </div>
        <div className="bg-[rgba(129,145,145,0.1)] rounded-[20px] pt-[2px] pr-[10px] pb-[2px] pl-[10px] w-[50%]">
          <h1 className="font-[Sora] font-normal text-[16px] leading-[20.16px] text-[rgba(54,87,88,1)]">
            {value1[0]}%
          </h1>
        </div>
      </div>
    </div>
  );
}
