import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { iterate, DateCzech } from '@/app/lib/myfce'
import Link from 'next/link';
import clsx from 'clsx'
export default async function AresTable(
    data0: any

) {
    const data = data0.data.ARES;
    const dataZem = data0.data.ZEM;

    const adr = data0.data.ADR;

    const tdstyle = "whitespace-nowrap py-4 pl-6 pr-3 border-r-0";
    const thstyle = "px-4 py-5 font-medium sm:pl-6  bg-blue-100 text-center font-lg border-r-0";

    const trstyle = "w - full border-b py - 3 text - sm last - of - type: border - none[&: first - child > td: first - child]: rounded - tl - lg[&: first - child > td: last - child]: rounded - tr - lg[&: last - child > td: first - child]: rounded - bl - lg[&: last - child > td: last - child]: rounded - br - lg";

    const tmpZem = {
        STATUS: 'NE',
        EZP: '',
        PODNIKATEL: ''
    }
    if (dataZem.hasOwnProperty("STATUS")) {
        tmpZem.STATUS = dataZem.STATUS;
        tmpZem.PODNIKATEL = dataZem.PODNIKATEL;
        tmpZem.EZP = dataZem.EZP;
    }


    //    console.lo


    return (
        <div className="w-full">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        <table className="hidden min-w-full text-gray-900 md:table">
                            <thead className="rounded-lg text-left text-sm font-normal">
                                <tr>
                                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                        Customero
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Emailero
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        AmountPero
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        DateNero
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Status
                                    </th>
                                    <th scope="col" className="relative py-3 pl-6 pr-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>ahoj12 </td></tr>
                            </tbody>
                        </table>
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th className={thstyle}>Ico</th>
                                <th className={thstyle}>Nazev</th>
                                <th className={thstyle}>Ulice</th>
                                <th className={thstyle}>Obec</th>
                                <th className={thstyle}>Psc</th>
                                <th className={thstyle}>Kód adresy</th>
                                <th className={thstyle}>Datum Vypisu</th>
                                <th className={`${thstyle}`} >Zem</th>
                                <th className={`${thstyle}`} >Podnikatel</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr
                                className={trstyle}
                            >
                                <td className={tdstyle}>{data.ico}</td>
                                <td className={tdstyle}>{data.nazev}</td>
                                <td className={tdstyle}>{data.ulice}</td>
                                <td className={tdstyle}>{data.obec}</td>
                                <td className={tdstyle}>{data.psc}</td>
                                <td className={tdstyle}>{adr.adresa_kod}</td>
                                <td className={tdstyle}>{data.datumvypisu}</td>
                                <td className={tdstyle}>
                                    <Link
                                        href={tmpZem.EZP}
                                        className="text-green-600 underline underline-offset-2"
                                        rel="noopener noreferrer" target="_blank"
                                    >
                                        {(tmpZem.STATUS == 'ANO') ? 'ANO' : 'NE'}
                                    </Link>
                                </td>
                                <td className={tdstyle}>
                                    {tmpZem.PODNIKATEL}

                                </td>

                            </tr>


                        </tbody>

                    </table>


                </div>
            </div></div>
    )
}