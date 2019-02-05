import React from 'react';
import ReactDOM from 'react-dom';

const WINTER = 'winter';
const SPRING = 'spring';
const SUMMER = 'summer';
const AUTUMN = 'autumn';

const getSeason = (lat, month) => {
    if (lat >= 0) {
        // north hemisphere or equator
        const northern_hemisphere_month_seasons = {
            0: WINTER,
            1: WINTER,
            2: SPRING,
            3: SPRING,
            4: SPRING,
            5: SUMMER,
            6: SUMMER,
            7: SUMMER,
            8: AUTUMN,
            9: AUTUMN,
            10: AUTUMN,
            11: WINTER
        };
        return northern_hemisphere_month_seasons[month]
    } else {
        // south hemisphere
        const southern_hemisphere_month_seasons = {
            0: SUMMER,
            1: SUMMER,
            2: AUTUMN,
            3: AUTUMN,
            4: AUTUMN,
            5: WINTER,
            6: WINTER,
            7: WINTER,
            8: SPRING,
            9: SPRING,
            10: SPRING,
            11: SUMMER
        };
        return southern_hemisphere_month_seasons[month]
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    let text;
    if (WINTER === season || AUTUMN === season) {
        text = "it's chilly";
    } else {
        text = "let's head to the beach";
    }
    return (
        <div>
            <div>
                Season display!
            </div>
            <div>
                {text}
            </div>
        </div>
    );
};

export default SeasonDisplay;