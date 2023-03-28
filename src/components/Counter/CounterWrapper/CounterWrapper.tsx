import React, {FC} from 'react';
import Button from "../Button/Button";

type CounterWrapperTypeProps = {
    isVisibleFor1Input: boolean
    isVisibleFor2Input: boolean
    changeRedMessage: () => object
    changeRed: () => object

    errorMessage: string
    count: number
    buttonStates: Array<boolean>

    increment: () => void
    reset: () => void

}

const CounterWrapper: FC<CounterWrapperTypeProps> = ({
                                                         increment,
                                                         isVisibleFor1Input, isVisibleFor2Input, reset,
                                                         count, errorMessage, changeRedMessage,
                                                         changeRed, buttonStates
                                                     }) => {
    return (
        <div className='CounterMain'>
            <div className='NumWrap'>
                <h4>
                    <div>
                        <div>
                            {
                                isVisibleFor1Input ? (<h4 style={changeRedMessage()}>{errorMessage}</h4>) :
                                    isVisibleFor2Input ? (<h4 style={changeRedMessage()}>{errorMessage}</h4>) :
                                        (<h4 style={changeRed()}>{count}</h4>)
                            }
                        </div>
                    </div>
                </h4>
            </div>
            <div className='CounterBtnsWrap'>
                <Button onClickHandler={increment} buttonStateDisable={buttonStates[1]} className='inc'
                        nameButton='Increment'/>
                <Button onClickHandler={reset} buttonStateDisable={buttonStates[2]} className='reset'
                        nameButton='Reset'/>
            </div>
        </div>
    );
};

export default CounterWrapper;