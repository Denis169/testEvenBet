import { useEffect, useState } from 'react';
import './styles.less';

export const Spinner = ({screenSize}) => {
    const [spin, setSpin] = useState(false);

    useEffect(() => {
        setSpin(true);
        console.log(12);
        setTimeout(() => setSpin(false), 2000);
    }, [screenSize]);

    return (
        <div className={ spin ? 'lds-spin lds-roller' : "lds-roller"}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}