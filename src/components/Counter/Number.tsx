import React, {FC} from 'react';

type NumberPropsType = {
    count: number
}

const Number: FC<NumberPropsType> = ({count}) => {
    return (
        <div>
            {count}
        </div>
    );
};

export default Number;