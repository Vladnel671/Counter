import React from 'react';
import './Settings.css';

const Settings = () => {





    return (
        <div className="settingsMain">
            <div className="settingsWrapper">
                <div>
                    <div className="maxValue">
                        <h1 className="maxTitle">max value: </h1><input type='number' className="maxInput" min={-3} max={7} />
                    </div>
                    <div className="startValue">
                        <h1 className="startTitle">start value: </h1><input className="startInput" type='number' min={-3} max={7}/>
                    </div>
                </div>
            </div>
            <div className="btnWrap">
                <button className="setButton">Set</button>
            </div>
        </div>
    );
};

export default Settings;