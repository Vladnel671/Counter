import React, {FC} from 'react';

type NumAndButtonsType = {
    changeRed: () => object
    countOrError: () => number | string

}


// const NumAndButtons: FC<NumAndButtonsType> = ({changeRed, countOrError}) => {
//     return (
//         <div className='CounterMain'>
//             <div className='NumWrap'>
//                 <h1 style={changeRed()}>{countOrError()}</h1>
//             </div>
//             <div className='CounterBtnsWrap'>
//                 <button onClick={increment} className='inc' disabled={disableButton()}>Increment</button>
//                 <button onClick={reset} className='reset'>Reset</button>
//             </div>
//         </div>
//     );
// };

//export default NumAndButtons;