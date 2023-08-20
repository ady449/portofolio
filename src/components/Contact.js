import React from "react";
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';
import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import FormControlLabel from '@mui/material/FormControlLabel';

const Contact = () => {

  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <Box sx={{
        height: 180,
        width: 240,
        display: 'flex',
        padding: 2,
        borderRadius: 1,
        
        overflow: 'hidden',
      }}>

        <Box sx={{ width: 200 }} ref={containerRef}>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show from target"
          />
          <Slide direction="up" in={checked} container={containerRef.current}>

            <DevicePhoneMobileIcon className="h-6 w-6 text-gray-100" />

          </Slide>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
