import { iterate, DateCzech } from '@/app/lib/myfce'
import Link from 'next/link';
import MOBILE from '@/app/ui/MobileInfo'

import MyIf from '@/app/ui/myIf';
import clsx from 'clsx'
export default async function FirmyTable(
    { data }:
        {
            data: any;
        }


) {

    const ds = data;
    const showData = {
        show: true,
    }
    const tdstyle = "whitespace-nowrap py-4 pl-6 pr-3 border-r-0";
    const thstyle = "px-4 py-5 font-medium sm:pl-6  bg-blue-100 text-left font-lg border-r-0 ";
    const trstyle = "w - full border-b py-3 text - sm last - of - type: border - none[&: first - child > td: first - child]: rounded - tl - lg[&: first - child > td: last - child]: rounded - tr - lg[&: last - child > td: first - child]: rounded - bl - lg[&: last - child > td: last - child]: rounded - br - lg";
    if (ds == null) {
        return (
            <></>
        )
    }
    if (ds.hasOwnProperty("error")) {
        showData.show = false;
        console.log(ds.error);
        return (
            <div className="w-full">
                <div className="inline-block min-w-full align-middle">
                    <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                        <table className="hidden min-w-full text-gray-900 md:table">
                            <thead className="rounded-lg text-left text-sm font-normal">
                                <tr>
                                    <th className={thstyle}>ICO</th>
                                    <th className={thstyle}>Nazev</th>
                                    <th className={thstyle}>Master</th>
                                    <th className={thstyle}>Typ</th>
                                    <th className={thstyle}>Ulice</th>
                                    <th className={thstyle}>Obec</th>
                                    <th className={thstyle}>Psc</th>



                                </tr>
                            </thead>
                            <tbody><tr><td>DS nejsou </td></tr></tbody></table>


                    </div></div></div>
        );

    }








    //    console.lo


    return (
        <div className="w-full">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        <MOBILE />
                    </div>
                    <table className="min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th className={thstyle}>
                                    ICO
                                </th>
                                <th className={thstyle}>Nazev</th>

                                <th className={`hidden ${thstyle}  md:table-cell`}>Ulice</th>
                                <th className={`hidden ${thstyle}  md:table-cell`}>Obec</th>
                                <th className={`hidden ${thstyle}  md:table-cell`}>Psc</th>



                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {ds?.map((schr: any) => (
                                <tr
                                    className={trstyle}
                                    key={schr.box}

                                >
                                    <td className={tdstyle}>
                                        <Link

                                            href={'./API?page=1&query=' + schr.ico}
                                            className="text-green-600 underline underline-offset-2"
                                        >
                                            {schr.ico}
                                        </Link>

                                    </td>
                                    <td className={tdstyle}>{schr.tradename}</td>



                                    <td className={`hidden ${tdstyle}  md:table-cell`}>{schr.street + ' ' + schr.cp + ((schr.co > '') ? '/' + schr.co : '')}</td>
                                    <td className={`hidden ${tdstyle}  md:table-cell`}>{(schr.city)}</td>
                                    <td className={`hidden ${tdstyle}  md:table-cell`}>{(schr.zip)}</td>


                                </tr>
                            ))}


                        </tbody>

                    </table>


                </div>
            </div></div >
    )
}