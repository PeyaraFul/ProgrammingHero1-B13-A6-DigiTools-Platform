import React from 'react';
import CreateAccount from './CreateAccount';
import ChoseProduct from './ChoseProduct';
import StartCreating from './StartCreating';

const StartStepContainer = () => {
    return (
        <div>
            <div className='flex gap-6 m-35 '>
                <CreateAccount></CreateAccount>
                <ChoseProduct></ChoseProduct>
                 <StartCreating></StartCreating>
            </div>
        </div>
    );
};

export default StartStepContainer;