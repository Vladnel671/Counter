import React, {FC} from 'react';

type ButtonTypeProps = {
    onClickHandler: () => void
    buttonStateDisable: boolean
    nameButton: string
    className: string
}

const Button2: FC<ButtonTypeProps> = ({onClickHandler, buttonStateDisable, nameButton, className}) => {

    return (
        <div>
            <button onClick={onClickHandler} disabled={buttonStateDisable} className={className}>{nameButton}</button>
        </div>
    );
};

export default Button2;