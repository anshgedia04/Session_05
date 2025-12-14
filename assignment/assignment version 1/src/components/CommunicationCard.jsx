import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const CommunicationCard = ({ className = "" }) => {
  return (
    <section
      className={`w-[1447px] flex items-start !pt-num-0 !pb-num-0 !pl-num-20 !pr-num-0 box-border gap-[104px] max-w-full mq1525:flex-wrap mq850:gap-[52px] mq450:gap-[26px] ${className}`}
    >
      <section className="w-[575px] flex flex-col items-end gap-[136px] shrink-0 max-w-full text-left text-num-42 text-gray font-rubik mq1525:flex-1 mq850:gap-[68px] mq850:min-w-full mq450:gap-[34px]">
        <img
          className="w-[487px] relative max-h-full object-cover max-w-full"
          loading="lazy"
          alt=""
          src="/Coominucation-vector-1@2x.png"
        />
        <Box className="self-stretch flex items-start max-w-full">
          <Box className="flex flex-col items-start !pt-num-0 !pb-num-0 !pl-num-0 !pr-num-20 box-border gap-5 max-w-full">
            <Box className="w-[521px] flex items-start justify-end">
              <Typography
                className="!m-0 relative uppercase mq850:text-num-34 mq450:text-num-25"
                variant="inherit"
                variantMapping={{ inherit: "h2" }}
                sx={{ fontWeight: "500" }}
              >
                facilitation
              </Typography>
            </Box>
            <div className="w-[521px] relative text-num-16 leading-[147.5%] text-right inline-block">
              <Typography
                className="!m-0"
                variant="inherit"
              >{`We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and `}</Typography>
              <Typography className="!m-0" variant="inherit">
                natural resources.
              </Typography>
            </div>
          </Box>
        </Box>
      </section>
      <Box className="h-[703px] relative min-w-[778px] shrink-0 max-w-full mq1525:flex-1 mq850:min-w-full">
        <section className="absolute top-[63px] left-[0px] w-[544px] flex flex-col items-end gap-[73px] max-w-full text-left text-num-42 text-gray font-rubik">
          <Box className="w-[478px] flex flex-col items-start gap-5 max-w-full">
            <Typography
              className="!m-0 self-stretch relative uppercase mq850:text-num-34 mq450:text-num-25"
              variant="inherit"
              variantMapping={{ inherit: "h2" }}
              sx={{ fontWeight: "500" }}
            >
              Communications
            </Typography>
            <div className="relative text-num-18 leading-[147.5%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. `}</div>
          </Box>
          <Box className="self-stretch flex items-start max-w-full">
            <img
              className="w-[481px] relative max-h-full object-cover max-w-full"
              loading="lazy"
              alt=""
              src="/facilation-vector-1@2x.png"
            />
          </Box>
        </section>
        <img
          className="absolute top-[0px] left-[528px] w-[250px] h-num-431 object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/Asset-6-1@2x.png"
        />
      </Box>
    </section>
  );
};

CommunicationCard.propTypes = {
  className: PropTypes.string,
};

export default CommunicationCard;
