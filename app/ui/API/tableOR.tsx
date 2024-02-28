import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { iterate, DateCzech } from '@/app/lib/myfce'
import MOBILE from '@/app/ui/MobileInfo'
import Link from 'next/link';
import clsx from 'clsx'
export default function ORTable(
    {
        data,
        _status
    }: {
        data: any;
        _status: string;
    }
) {



    const dt = data;
    //    console.log("S ", dt);

    const tdstyle = "whitespace-nowrap py-3 pl-6 pr-3 border-r-0";
    const thstyle = "px-4 py-5 font-medium sm:pl-6  bg-blue-100  font-lg border-r-0";
    const trstyle = "w - full border-b py-4 text - sm last - of - type: border - none[&: first - child > td: first - child]: rounded - tl - lg[&: first - child > td: last - child]: rounded - tr - lg[&: last - child > td: first - child]: rounded - bl - lg[&: last - child > td: last - child]: rounded - br - lg";

    let n = 0;
    //    console.lo

    return (
        <div className="size-full... md:size-auto  border-0 border-cyan-900">
            <div className="inline-block min-w-full align-middle">
                <div className="size-full rounded-lg bg-gray-50 py-4 md:pt-0 overflow-y-auto">
                    <div className="md:hidden">
                        <MOBILE />
                    </div>
                    <table className="w-full min-w-full text-gray-900 md:table border-cyan-900 border-0 ">
                        <caption className='caption-top py-4 px-2 text-left border-0'>Vypis {_status == 'ANO' ? 'Platných' : 'Neplatných'}</caption>
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>

                                <th className={`${thstyle} text-center`}>n.</th>
                                <th className={`${thstyle} text-left`}>Funkce</th>
                                <th className={thstyle}>Jmeno</th>
                                <th className={`${thstyle}`}>Adresa</th>
                                <th className={`${thstyle} text-center`}>Od</th>
                                <th className={`${thstyle} text-center`}>Do</th>
                                <th className={`${thstyle} text-center`}>Obcanstvi</th>
                                <th className={`${thstyle} text-center`}>Narozen</th>



                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {

                                dt?.map((schr: any) => (

                                    (
                                        schr.STATUS == _status && ++n > 0 &&
                                        <tr className={trstyle} key={schr.adresa_kod}    >
                                            <td className={tdstyle}>{n}</td>
                                            <td className={`${tdstyle} text-left`}>{schr.funkce.replace("-1", "")}</td>
                                            <td className={`${tdstyle} text-left`}>{schr.titul.replace("-1", "") + ' ' + schr.jmeno.replace("-1", "") + ' ' + schr.prijmeni}</td>
                                            <td className={`${tdstyle} text-left`}>{schr.textovaAdresa}</td>

                                            <td className={tdstyle}>{DateCzech(schr.plati_od)}</td>
                                            <td className={tdstyle}>{DateCzech(schr.plati_do)}</td>
                                            <td className={tdstyle}>{schr.statniObcanstvi}</td>
                                            <td className={tdstyle}>{(schr.narozen > "-1") ? DateCzech(schr.narozen) : ''}</td>
                                        </tr>
                                    )

                                ))}


                        </tbody>

                    </table>


                </div>
            </div></div>
    )
}