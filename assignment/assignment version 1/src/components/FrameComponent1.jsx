import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <Box
      className={`absolute top-[0px] left-[0px] w-full h-[905.2px] text-left text-[56px] text-black font-rubik ${className}`}
    >
      <img
        className="absolute top-[-14px] left-[1318px] w-[359px] h-[376px] object-cover z-[1]"
        alt=""
        src="/Asset-2@2x.png"
      />
      <Box className="absolute top-[116px] left-[-29px] w-[1426px] h-[789.2px] z-[2]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[23px] max-h-full w-[1403px] object-cover"
          alt=""
          src="/Graphic-1-2@2x.png"
        />
        <img
          className="absolute top-[209px] left-[0px] w-[266px] h-[580px] object-cover z-[1]"
          alt=""
          src="/Assets-3@2x.png"
        />
        <img
          className="absolute top-[350.8px] left-[171.2px] w-[643.6px] h-[438.4px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/Vector-Smart-Object21-1@2x.png"
        />
        <Typography
          className="!m-0 absolute top-[161px] left-[955px] z-[3] mq850:text-[45px] mq450:text-num-34"
          variant="inherit"
          variantMapping={{ inherit: "h1" }}
          sx={{ fontWeight: "500" }}
        >
          <Typography className="!m-0" variant="inherit">
            Mendleson
          </Typography>
          <Typography className="!m-0" variant="inherit">
            Communication
          </Typography>
          <Typography className="!m-0" variant="inherit">
            and Engagement
          </Typography>
        </Typography>
        <div className="absolute top-[384px] left-[955px] text-num-18 text-gray z-[3]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed
          ipsum, ut quam volutpat, tortor.
        </div>
      </Box>
      <img
        className="absolute top-[645px] left-[1426px] w-[207px] h-[249px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/Assets-4@2x.png"
      />
    </Box>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
