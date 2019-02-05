import React from 'react';
import ReactDOM from 'react-dom';
import './SeasonDisplay.css';

enum Seasons {
    WINTER = 'winter',
    SPRING = 'spring',
    SUMMER = 'summer',
    AUTUMN = 'autumn'
}

interface SeasonDiplayProps {
    lat: number
}

interface SeasonsDisplayState {
}

class SeasonDisplay extends React.Component<SeasonDiplayProps, SeasonsDisplayState> {
    private static seasonConfig: any = {};

    constructor(pros: any) {
        super(pros);

        SeasonDisplay.seasonConfig[Seasons.SUMMER] = {
            text: "Let's hit the beach",
            iconName: 'sun'
        };
        SeasonDisplay.seasonConfig[Seasons.AUTUMN] = {};
        SeasonDisplay.seasonConfig[Seasons.WINTER] = {
            text: "Brrr it's cold",
            iconName: 'snowflake'
        };
        SeasonDisplay.seasonConfig[Seasons.SPRING] = {};
    }

    public static getSeason(lat: number, month: number) {
        if (lat >= 0) {
            // north hemisphere or equator
            const northern_hemisphere_month_seasons: any = {
                0: Seasons.WINTER,
                1: Seasons.WINTER,
                2: Seasons.SPRING,
                3: Seasons.SPRING,
                4: Seasons.SPRING,
                5: Seasons.SUMMER,
                6: Seasons.SUMMER,
                7: Seasons.SUMMER,
                8: Seasons.AUTUMN,
                9: Seasons.AUTUMN,
                10: Seasons.AUTUMN,
                11: Seasons.WINTER
            };
            return northern_hemisphere_month_seasons[month]
        } else {
            // south hemisphere
            const southern_hemisphere_month_seasons: any = {
                0: Seasons.SUMMER,
                1: Seasons.SUMMER,
                2: Seasons.AUTUMN,
                3: Seasons.AUTUMN,
                4: Seasons.AUTUMN,
                5: Seasons.WINTER,
                6: Seasons.WINTER,
                7: Seasons.WINTER,
                8: Seasons.SPRING,
                9: Seasons.SPRING,
                10: Seasons.SPRING,
                11: Seasons.SUMMER
            };
            return southern_hemisphere_month_seasons[month]
        }
    }

    render() {
        const season = SeasonDisplay.getSeason(this.props.lat, new Date().getMonth());
        const {text, iconName} = SeasonDisplay.seasonConfig[season];
        return (
            <div className={`season-display ${season}`}>
                <i className={`massive ${iconName} icon`}/>
                <div>
                    Season display!
                </div>
                <div>
                    <h1>{text}</h1>
                </div>
                <i className={`massive ${iconName} icon`}/>
            </div>
        );
    }
}

export default SeasonDisplay;