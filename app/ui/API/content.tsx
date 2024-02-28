'use client'
import { useState } from 'react';
import ORTable from '@/app/ui/API/tableOR';

export default function Obsah({
    data,
    status
}: {
    data: any;
    status: string;
}
) {

    return (
        <div>
            ahoj
            <ORTable data={data} _status={status}></ORTable>
        </div>
    )
}