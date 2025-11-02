import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start !pt-num-0 !pb-[39px] !pl-num-0 !pr-num-0 box-border max-w-full ${className}`}
    >
      <Box className="flex items-start !pt-num-0 !pb-num-0 !pl-[233px] !pr-num-20 box-border gap-20 max-w-full mq1525:flex-wrap mq1225:!pl-[116px] mq1225:box-border mq850:gap-10 mq850:!pl-[58px] mq850:box-border mq450:gap-5 mq450:!pl-num-20 mq450:box-border">
        <img
          className="!ml-[-259px] h-[404px] w-[179px] relative object-cover shrink-0"
          loading="lazy"
          alt=""
          src="/Assets-9-1@2x.png"
        />
        <Box className="flex flex-col items-start !pt-[66px] !pb-num-0 !pl-num-0 !pr-num-0 box-border max-w-full shrink-0 mq850:!pt-[43px] mq850:box-border">
          <Box className="self-stretch flex items-end gap-[7px] shrink-0 max-w-full mq1225:flex-wrap">
            <Box className="w-[220px] flex flex-col items-start justify-end !pt-num-0 !pb-[7px] !pl-num-0 !pr-2 box-border">
              <Box className="self-stretch flex-1 flex flex-col items-start gap-[72px]">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/Layer-19@2x.png"
                />
                <img
                  className="w-[185px] h-[106px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/Layer-21@2x.png"
                />
              </Box>
            </Box>
            <section className="flex-1 flex flex-col items-start gap-20 min-w-[413px] max-w-full text-left text-num-48 text-black font-rubik mq850:gap-10 mq850:min-w-full mq450:gap-5">
              <Box className="self-stretch flex flex-col items-end gap-[55px] max-w-full mq850:gap-[27px]">
                <Box className="flex items-start justify-end !pt-num-0 !pb-num-0 !pl-[140px] !pr-[140px] box-border max-w-full mq850:!pl-[70px] mq850:!pr-[70px] mq850:box-border mq450:!pl-num-20 mq450:!pr-num-20 mq450:box-border">
                  <Box className="w-[310px] flex flex-col items-start gap-0.5">
                    <Typography
                      className="!m-0 relative mq850:text-num-38 mq450:text-num-29"
                      variant="inherit"
                      variantMapping={{ inherit: "h2" }}
                      sx={{ fontWeight: "500" }}
                    >
                      OUR CLIENTS
                    </Typography>
                    <Box className="self-stretch h-num-7 relative">
                      <Box className="absolute top-[4px] left-[0px] border-darkgray border-solid border-t-[1px] box-border w-[311px] h-px" />
                      <Box className="absolute top-[0px] left-[0px] rounded-num-4 bg-darkgray w-[104px] h-num-7 z-[1]" />
                    </Box>
                  </Box>
                </Box>
                <Box className="self-stretch flex items-end gap-[63px] mq850:gap-[31px] mq850:flex-wrap mq450:gap-4">
                  <Box className="flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-0 !pr-num-15">
                    <img
                      className="w-[129px] h-[131px] relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/Layer-20@2x.png"
                    />
                  </Box>
                  <Box className="h-24 flex flex-col items-start justify-end !pt-num-0 !pb-[34px] !pl-num-0 !pr-num-0 box-border">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      loading="lazy"
                      alt=""
                      src="/1280px-Brigitte-Logo@2x.png"
                    />
                  </Box>
                  <Box className="h-[119px] flex flex-col items-start justify-end !pt-num-0 !pb-3 !pl-num-0 !pr-num-0 box-border">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      loading="lazy"
                      alt=""
                      src="/Layer-22@2x.png"
                    />
                  </Box>
                </Box>
              </Box>
              <Box className="flex items-start !pt-num-0 !pb-num-0 !pl-num-15 !pr-num-15 box-border max-w-full">
                <Box className="flex items-start gap-14 max-w-full mq850:gap-7 mq850:flex-wrap">
                  <img
                    className="h-[120px] w-[268px] relative object-cover mq850:flex-1"
                    loading="lazy"
                    alt=""
                    src="/Layer-23@2x.png"
                  />
                  <Box className="h-[109px] flex flex-col items-start !pt-2.5 !pb-num-0 !pl-num-0 !pr-num-0 box-border mq850:flex-1">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq850:self-stretch mq850:w-full"
                      loading="lazy"
                      alt=""
                      src="/Layer-24@2x.png"
                    />
                  </Box>
                </Box>
              </Box>
            </section>
            <Box className="w-[243px] flex flex-col items-start justify-end !pt-num-0 !pb-[31px] !pl-num-0 !pr-num-0 box-border">
              <Box className="self-stretch flex-1 flex flex-col items-end gap-[145px]">
                <img
                  className="w-[163px] flex-1 relative max-h-full object-cover"
                  alt=""
                  src="/BHP-2017-logo@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/MelbourneWaterLogo-1024x282@2x.png"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
