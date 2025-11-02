import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const AboutContainer = ({ className = "" }) => {
  return (
    <Box
      className={`w-[658px] flex flex-col items-start gap-[25px] max-w-full text-left text-num-48 text-black font-rubik ${className}`}
    >
      <Box className="self-stretch flex flex-col items-start !pt-num-0 !pb-num-15 !pl-num-0 !pr-num-0 gap-[21px]">
        <Box className="flex flex-col items-start gap-0.5">
          <Typography
            className="!m-0 relative mq850:text-num-38 mq450:text-num-29"
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{ fontWeight: "500" }}
          >
            ABOUT US
          </Typography>
          <Box className="self-stretch h-num-7 relative">
            <Box className="absolute top-[4px] left-[0px] border-darkgray border-solid border-t-[1px] box-border w-[239px] h-px" />
            <Box className="absolute top-[0px] left-[0px] rounded-num-4 bg-darkgray w-[156px] h-num-7 z-[1]" />
          </Box>
        </Box>
        <div className="self-stretch relative text-num-18 leading-[147.5%] text-gray">
          We love what we do and are driven by achieving great results for our
          clients. Our awards and impressive client list are testament to our
          high quality approach. We deliver value, creaKvity, results and
          excepKonal levels of customer service and professionalism. We
          specialise in infrastructure development, energy and natural
          resources.
        </div>
      </Box>
      <Box className="w-96 flex items-start justify-between gap-5 max-w-full mq450:flex-wrap">
        <img
          className="h-[41px] w-10 relative object-cover"
          alt=""
          src="/Enagagement-icon-1@2x.png"
        />
        <img
          className="h-[41px] w-[43px] relative object-cover"
          alt=""
          src="/coomunication-icon-1@2x.png"
        />
      </Box>
      <Box className="w-[619px] flex flex-col items-start gap-[15px] max-w-full text-num-24">
        <Box className="w-[557px] flex items-start justify-between gap-5 max-w-full mq450:flex-wrap">
          <Typography
            className="!m-0 relative uppercase mq450:text-num-19"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "500" }}
          >
            Engagement
          </Typography>
          <Typography
            className="!m-0 relative uppercase mq450:text-num-19"
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "500" }}
          >
            Communications
          </Typography>
        </Box>
        <Box className="self-stretch flex items-start flex-wrap content-start gap-[73px] text-num-18 text-gray mq850:gap-9 mq450:gap-[18px]">
          <div className="h-[89px] flex-1 relative leading-[147.5%] inline-block min-w-[177px]">
            We are engagement specialists, who have led projects at all levels
            of the IAP2 spectrum. READ MORE
          </div>
          <div className="h-28 flex-1 relative leading-[147.5%] inline-block min-w-[177px]">
            We are award-winning leaders in communications and campaign
            management. READ MORE
          </div>
        </Box>
      </Box>
    </Box>
  );
};

AboutContainer.propTypes = {
  className: PropTypes.string,
};

export default AboutContainer;
