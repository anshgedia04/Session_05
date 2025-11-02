import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const ConsultationDetails = ({ className = "" }) => {
  return (
    <main
      className={`self-stretch h-[1288px] relative max-w-full text-left text-num-16 text-gray font-rubik ${className}`}
    >
      <Box className="absolute top-[0px] left-[220px] w-[523px] h-[645px] text-right">
        <img
          className="absolute top-[0px] left-[0px] w-[523px] h-[363px] object-cover"
          loading="lazy"
          alt=""
          src="/Consultation-vector-1@2x.png"
        />
        <div className="absolute top-[512px] left-[2px] leading-[147.5%] inline-block w-[522px] h-[133px]">
          We love what we do and are driven by achieving great results for our
          clients. Our awards and impressive client list are testament to our
          high quality approach. We deliver value, creaKvity, results and
          excepKonal levels of customer service and professionalism. We
          specialise in infrastructure development, energy and natural
          resources.
        </div>
        <Typography
          className="!m-0 absolute top-[442px] left-[44px] uppercase text-left inline-block w-[478px] mq850:text-num-34 mq450:text-num-25"
          variant="inherit"
          variantMapping={{ inherit: "h2" }}
          sx={{ fontWeight: "500", fontSize: "42px" }}
        >{`Traning & Mentoring`}</Typography>
      </Box>
      <Box className="absolute top-[738px] left-[0px] w-[366px] flex items-start max-w-full">
        <img
          className="h-num-221 w-num-278 absolute !!m-[0 important] right-[-156px] bottom-[-102px] object-cover shrink-0"
          loading="lazy"
          alt=""
          src="/Person-1-img-1@2x.png"
        />
        <img
          className="h-num-431 flex-1 relative max-w-full overflow-hidden object-cover z-[1] shrink-0"
          alt=""
          src="/Asset-5-2@2x.png"
        />
      </Box>
      <Box className="absolute top-[120px] left-[926px] w-[674px] h-[1152px] text-num-18">
        <Box className="absolute top-[95px] left-[0px] w-[674px] h-[557px]">
          <img
            className="absolute top-[208px] left-[0px] w-num-454 h-[349px] object-cover"
            alt=""
            src="/Training-and-vector-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[418px] w-[370.6px] h-[457.4px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/Asset-8-2@2x.png"
          />
        </Box>
        <div className="absolute top-[120px] left-[0px] leading-[147.5%] inline-block w-num-454 h-[114px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. `}</div>
        <Typography
          className="!m-0 absolute top-[0px] left-[0px] uppercase mq850:text-num-34 mq450:text-num-25"
          variant="inherit"
          variantMapping={{ inherit: "h1" }}
          sx={{ fontWeight: "500", fontSize: "42px" }}
        >
          <Typography className="!m-0" variant="inherit">
            Consultation and
          </Typography>
          <Typography className="!m-0" variant="inherit">
            Research
          </Typography>
        </Typography>
        <img
          className="absolute top-[931px] left-[152px] w-[276px] h-num-221 object-cover"
          alt=""
          src="/Person-3-img-1@2x.png"
        />
      </Box>
      <Box className="absolute top-[954px] left-[661px] w-num-278 h-[318px] text-num-48 text-black">
        <img
          className="absolute top-[97px] left-[0px] w-num-278 h-num-221 object-cover"
          loading="lazy"
          alt=""
          src="/Person-2-img-1@2x.png"
        />
        <Box className="absolute top-[59px] left-[24px] w-[241px] h-num-7">
          <Box className="absolute top-[4px] left-[0px] border-darkgray border-solid border-t-[1px] box-border w-[242px] h-px" />
          <Box className="absolute top-[0px] left-[0px] rounded-num-4 bg-darkgray w-[101px] h-num-7 z-[1]" />
        </Box>
        <Typography
          className="!m-0 absolute top-[0px] left-[24px] mq850:text-num-38 mq450:text-num-29"
          variant="inherit"
          variantMapping={{ inherit: "h2" }}
          sx={{ fontWeight: "500" }}
        >
          OUR TEAM
        </Typography>
      </Box>
    </main>
  );
};

ConsultationDetails.propTypes = {
  className: PropTypes.string,
};

export default ConsultationDetails;
