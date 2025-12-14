import { Box } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <header
      className={`absolute top-[0px] left-[0px] w-[1470px] flex items-start justify-between gap-5 max-w-full ${className}`}
    >
      <Box className="flex items-start gap-[11px] max-w-full">
        <img
          className="h-[111px] w-[119px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/Asset-1@2x.png"
        />
        <Box className="h-[95px] flex-1 flex flex-col items-start !pt-2.5 !pb-num-0 !pl-num-0 !pr-num-0 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/logo-1-1@2x.png"
          />
        </Box>
      </Box>
      <Box className="w-[472px] flex flex-col items-start !pt-num-42 !pb-num-0 !pl-num-0 !pr-num-0 box-border max-w-full">
        <nav className="!m-0 self-stretch h-[21px] relative text-left text-num-18 text-black font-roboto">
          <div className="absolute top-[0px] left-[0px] inline-block min-w-[74px] whitespace-nowrap z-[1]">
            About Us
          </div>
          <div className="absolute top-[0px] left-[109px] inline-block min-w-[68px] z-[1]">
            Services
          </div>
          <div className="absolute top-[0px] left-[212px] inline-block min-w-[45px] z-[1]">
            Team
          </div>
          <div className="absolute top-[0px] left-[292px] inline-block min-w-[56px] z-[2]">
            Clients
          </div>
          <div className="absolute top-[0px] left-[383px] inline-block min-w-[89px] whitespace-nowrap z-[2]">
            Contact Us
          </div>
        </nav>
      </Box>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
