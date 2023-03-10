import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/Info";

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
               <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
               <h4>{heading}</h4>
               <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Finally done with his React clone", "Trending news")}
            {newsArticle("Coronavirus updates", "Trending news")}
            {newsArticle("Coronavirus updates", "Trending news")}
            {newsArticle("Coronavirus updates", "Trending news")}
        </div>
    );
};

export default Widgets;
