import React from 'react';

type InputProps = {
    value: string;
    placeholder: string;
    onChangeText: (value: string) => void;
}
export const Input: React.FC<InputProps> = (props) => {
    return (
        <input className={"w-[500px] h-12 px-4 py-3 bg-white rounded-lg border border-zinc-300 justify-start items-center gap-3 inline-flex"} placeholder={props.placeholder}>

        </input>
    );
};

