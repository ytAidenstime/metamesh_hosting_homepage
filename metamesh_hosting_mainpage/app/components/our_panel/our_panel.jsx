import "./our_panel.css";

import ImageSlider from "../image_slider/image_slider.jsx";

import Tooltip from "@mui/material/Tooltip";

import NotStartedOutlinedIcon from '@mui/icons-material/NotStartedOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';

export default function Panel() {
    const images = ["pteropanel_1.png", "pteropanel_2.png"]


    return <div className="panel-wrapper" id="about">
        <div className="panel-content">
            <h1>Pterodactyl Panel</h1>
            <p>
                Our Shared Game Hosting uses the Pterodactyl Panel to give you
                full control over your server.
            </p>
            <div className="control-wrapper">
                <Tooltip title="Start">
                    <NotStartedOutlinedIcon className="control-icon" />
                </Tooltip>
                <Tooltip title="Restart">
                    <RestartAltOutlinedIcon className="control-icon" />
                </Tooltip>
                <Tooltip title="Stop">
                    <StopCircleOutlinedIcon className="control-icon" />
                </Tooltip>
            </div>
        </div>
        <ImageSlider imageUrls={images} className="image-slider" />
    </div>
}