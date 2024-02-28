'use client'
import { lusitana } from '@/app/ui/fonts';
import JsonNice from '@/app/ui/API/jsonnice'
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react'
import MyIf from '../myIf';

import clsx from 'clsx';

export default function RawData({
    myapi,
    showData,

}: {
    myapi: any;
    showData: any;
}

) {
    const [toggleViewMode, setToggleViewMode] = useState({
        platne: false,

    });
    const updatePlatne = function () {
        setToggleViewMode(prevState => {
            return { ...prevState, platne: !prevState.platne }
        })
    }
    return (
        <div className="hidden md:block w-full items-center justify-between  border text-center  py-4">
            <button
                className={
                    clsx(" hidden md:block h-10 items-center rounded-lg bg-gray-600 px-8 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        , {
                            'bg-lime-500': toggleViewMode.platne
                        }
                    )
                }

                onClick={updatePlatne}
            >
                <span className="hidden md:block">RAW DATA</span>{' '}

            </button>

            <MyIf showWhen={toggleViewMode.platne}>

                <table >
                    {showData.ds && <tr>
                        <td className="border align-top py-20 font-bold">DS {myapi.DS.length}</td><td className='border inline-block align-top'>
                            <JsonNice data={myapi.DS} /></td>
                    </tr>}
                    {showData.zem && <tr><td className="border align-top py-20 font-bold">ZEM</td><td className='border inline-block align-top'>
                        <JsonNice data={myapi.ZEM} /></td></tr>}
                    <tr><td className="border align-top py-20 font-bold">ARES</td><td className='border inline-block align-top'><JsonNice data={myapi.ARES} /></td></tr>
                    {showData.or && <tr><td className="border align-top py-20 font-bold">OR {myapi.OR.CLENSTVI.length}</td><td className='border inline-block align-top'>
                        <JsonNice data={myapi.OR} /></td></tr>}
                    {showData.adr && <tr><td className="border align-top py-20 font-bold">ADR</td><td className='border inline-block align-top'><JsonNice data={myapi.ADR} /></td></tr>}
                    <tr><td className="border align-top py-20 font-bold">INPUT</td><td className='border inline-block align-top'><JsonNice data={myapi.INPUT} /></td></tr>
                </table>
            </MyIf>
        </div>
    )
}    