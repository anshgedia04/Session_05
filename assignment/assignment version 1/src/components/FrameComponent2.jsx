import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`flex items-start justify-end !pt-num-0 !pb-num-42 !pl-[220px] !pr-[244px] box-border max-w-full text-left text-num-48 text-black font-rubik mq850:!pl-[110px] mq850:!pr-[122px] mq850:!pb-[27px] mq850:box-border mq450:!pl-num-20 mq450:!pr-num-20 mq450:box-border ${className}`}
    >
      <Box className="flex flex-col items-end gap-[41px] max-w-full mq850:gap-5">
        <Box className="flex items-start justify-end !pt-num-0 !pb-num-0 !pl-[434px] !pr-[434px] box-border max-w-full mq1225:!pl-[217px] mq1225:!pr-[217px] mq1225:box-border mq850:!pl-[108px] mq850:!pr-[108px] mq850:box-border mq450:!pl-num-20 mq450:!pr-num-20 mq450:box-border">
          <Box className="w-[238px] flex flex-col items-start gap-0.5">
            <Typography
              className="!m-0 relative mq850:text-num-38 mq450:text-num-29"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{ fontWeight: "500" }}
            >
              SERVICES
            </Typography>
            <Box className="self-stretch h-num-7 relative">
              <Box className="absolute top-[4px] left-[0px] border-darkgray border-solid border-t-[1px] box-border w-[239px] h-px" />
              <Box className="absolute top-[0px] left-[0px] rounded-num-4 bg-darkgray w-[62px] h-num-7 z-[1]" />
            </Box>
          </Box>
        </Box>
        <section className="w-[1136px] flex items-start justify-between gap-5 max-w-full text-left text-num-42 text-gray font-rubik mq1525:flex-wrap">
          <Box className="w-[529px] flex flex-col items-start !pt-[52px] !pb-num-0 !pl-num-0 !pr-num-0 box-border max-w-full mq1525:flex-1 mq1225:min-w-full">
            <Box className="self-stretch flex flex-col items-start gap-5 max-w-full">
              <Box className="self-stretch flex items-start justify-end">
                <Typography
                  className="!m-0 relative uppercase mq850:text-num-34 mq450:text-num-25"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{ fontWeight: "500" }}
                >
                  Engagement
                </Typography>
              </Box>
              <Box className="self-stretch flex items-start relative max-w-full text-right text-num-16">
                <div className="h-[126px] flex-1 relative leading-[147.5%] inline-block max-w-full shrink-0">
                  We love what we do and are driven by achieving great results
                  for our clients. Our awards and impressive client list are
                  testament to our high quality approach. We deliver value,
                  creaKvity, results and excepKonal levels of customer service
                  and professionalism. We specialise in infrastructure
                  development, energy and natural resources.
                </div>
                <Box className="h-[825px] w-[732px] absolute !!m-[0 important] top-[-742px] left-[-220px] shrink-0">
                  <img
                    className="absolute top-[0px] left-[120px] w-[612px] h-[408px] object-cover"
                    loading="lazy"
                    alt=""
                    src="/about-us-1@2x.png"
                  />
                  <img
                    className="absolute top-[394px] left-[-52px] w-[366px] h-num-431 object-cover z-[1]"
                    alt=""
                    src="/Asset-5-2@2x.png"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <img
            className="w-num-454 relative max-h-full object-cover max-w-full mq1525:flex-1"
            loading="lazy"
            alt=""
            src="/Engagement-vector-1@2x.png"
          />
        </section>
      </Box>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
