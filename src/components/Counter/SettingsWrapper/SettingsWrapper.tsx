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

    setMinMaxValues: () => void

    isValidFirstInput: boolean
    isValidSecondInput: boolean
    buttonStates: Array<boolean>

}

const SettingsWrapper: FC<SettingsWrapperTypeProps> = ({
                                                           buttonStates,
                                                           disableButtonOnFocusInput2,
                                                           disableButtonOnFocusInput,
                                                           handleMaxValueChange,
                                                           maxValue,
                                                           setMinMaxValues,
                                                           minValue,
                                                           handleMinValueChange,
                                                           showOnBlur,isValidSecondInput, isValidFirstInput
                                                       }) => {
    return (
        <div className='settingsMain'>
            <div className='settingsWrapper'>
                <div className='startValue'>
                    <h3>start value:</h3><input className='startInput' type="number"
                                                value={minValue} onFocus={disableButtonOnFocusInput}
                                                onBlur={showOnBlur}
                                                onChange={handleMinValueChange}
                                                style={isValidFirstInput ? { backgroundColor: 'rgba(255, 255, 255, 1)'} :  {backgroundColor: 'hsl(0, 100%, 75%)'}}/>
                </div>
                <div className='maxValue'>
                    <h3>max value:</h3><input className='maxInput' type="number"
                                              value={maxValue} onFocus={disableButtonOnFocusInput2}
                                              onBlur={showOnBlur}
                                              onChange={handleMaxValueChange}
                                              style={isValidSecondInput ? { backgroundColor: 'rgba(255, 255, 255, 1)'} :  {backgroundColor: 'hsl(0, 100%, 75%)'}}/>
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