import React, {ChangeEvent, FC} from 'react';
import Button from "../Button/Button";

type SettingsWrapperTypeProps = {
    minValue: number
    maxValue: number

    disableButtonOnFocusInput: () => void
    disableButtonOnFocusInput2: () => void

    showOnBlur: () => void

    handleMinValueChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleMaxValueChange: (event: ChangeEvent<HTMLInputElement>) => void

    inputChangeRed: () => object
    setMinMaxValues: () => void

    buttonStates: Array<boolean>

}

const SettingsWrapper: FC<SettingsWrapperTypeProps> = ({
                                                           buttonStates,
                                                           disableButtonOnFocusInput2,
                                                           disableButtonOnFocusInput,
                                                           inputChangeRed,
                                                           handleMaxValueChange,
                                                           maxValue,
                                                           setMinMaxValues,
                                                           minValue,
                                                           handleMinValueChange,
                                                           showOnBlur
                                                       }) => {
    return (
        <div className='settingsMain'>
            <div className='settingsWrapper'>
                <div className='startValue'>
                    <h3>start value:</h3><input className='startInput' type="number"
                                                value={minValue} onFocus={disableButtonOnFocusInput}
                                                onBlur={showOnBlur}
                                                onChange={handleMinValueChange}
                                                style={inputChangeRed()}/>
                </div>
                <div className='maxValue'>
                    <h3>max value:</h3><input className='maxInput' type="number"
                                              value={maxValue} onFocus={disableButtonOnFocusInput2}
                                              onBlur={showOnBlur}
                                              onChange={handleMaxValueChange}
                                              style={inputChangeRed()}/>
                </div>
            </div>
            <div className='btnWrap'>
                <Button onClickHandler={setMinMaxValues} buttonStateDisable={buttonStates[0]} className='setButton'
                        nameButton='Set'/>
            </div>
        </div>
    );
};

export default SettingsWrapper;