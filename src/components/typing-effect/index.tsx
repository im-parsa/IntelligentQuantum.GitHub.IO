import React from 'react';

import useTyped from '../../hooks/use-typed';

type Props =
    {
        words: string[]
    };

const TypingEffect = ({ words }: Props) =>
{
    const typing = useTyped(words);

    return (<span className='shadow text-center'>{ typing }</span>);
};

export default TypingEffect;
