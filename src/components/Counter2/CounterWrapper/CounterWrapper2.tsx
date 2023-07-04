import React, {FC} from 'react';
import Button2 from "../../common/Button/Button";

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
    set: () => void

}

const CounterWrapper2: FC<CounterWrapperTypeProps> = ({
                                                         increment,
                                                         isVisibleFor1Input, isVisibleFor2Input, reset,
                                                         count, errorMessage, changeRedMessage,
                                                         changeRed, buttonStates,set
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
                <Button2 onClickHandler={increment} buttonStateDisable={buttonStates[1]} className='inc'
                         nameButton='Increment'/>
                <Button2 onClickHandler={reset} buttonStateDisable={buttonStates[2]} className='reset'
                         nameButton='Reset'/>
                <Button2 onClickHandler={set} buttonStateDisable={buttonStates[3]} className='set'
                         nameButton='Set'/>
            </div>
        </div>
    );
};

export default CounterWrapper2;