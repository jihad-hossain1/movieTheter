import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SideCart = ({ watchTime }) => {
    const [time, setTime] = useState(watchTime);
    const [breakTime, setBreakTime] = useState(0);
    useEffect(() => {
        const getPreviousWatchTimeLocalStorage = localStorage.getItem('watchTime')
        setTime(getPreviousWatchTimeLocalStorage);
        // console.log(getPreviousWatchTimeLocalStorage);
        const getBreakTime = localStorage.getItem('breakTime')
        // if (getBreakTime) {
        //     const isNull = getBreakTime + breakTime;
        //     localStorage.setItem('breakTime', isNull);
        // } else {
        //     localStorage.setItem('breakTime', breakTime);
        //     setBreakTime(getBreakTime)
        // }
        setBreakTime(getBreakTime);
    }, [watchTime]);
    
    const handleBreakTime = (bt) => {
        localStorage.setItem("breakTime", bt);
        setBreakTime(bt);
    }

    const handleToast = () => {
        toast('wow so easy');
    }

    return (
        <>
        <div className="mx-3 mt-12 sticky top-0">
                <h2 className="outline outline-primary outline-1 text-center  rounded py-1 px-3 m-3">Cart information</h2>
                <div>
                    <p><small>Total watch Time</small>: {time}</p>
                </div>
                <br />
                <hr className="my-3" />
                <div className='text-center'>
                    <h2 className='mb-3'>Add Break Time</h2>
                    <button onClick={()=>handleBreakTime(15)} className="btn btn-primary btn-outline btn-xs mr-2">15</button>
                    <button onClick={()=>handleBreakTime(20)} className="btn btn-info btn-outline btn-xs mr-2">20</button>
                    <button onClick={()=>handleBreakTime(25)} className="btn btn-error btn-outline btn-xs">25</button>
                    <div className='my-3'>
                        <input className='w-2/4 rounded m-2 px-1 bg-neutral' type="text" value={breakTime} />
                    </div>
                    <div className='mt-10'>
                        <button onClick={handleToast} className="btn btn-accent btn-sm">Complete</button>
                    </div>
                </div>
        </div>
        </>
    );
};

export default SideCart;