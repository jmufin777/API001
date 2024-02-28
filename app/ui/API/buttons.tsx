'use client'
import { lusitana } from '@/app/ui/fonts';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react'
import MyIf from '../myIf';
import ORTable from '@/app/ui/API/tableOR';
import clsx from 'clsx';



export function ORPlatne({
  data,

}: {
  data: any;
}

) {
  const [toggleViewMode, setToggleViewMode] = useState({
    platne: true,
    neplatne: false,
    rawData: false,
  });

  const updatePlatne = function () {
    setToggleViewMode(prevState => {
      return { ...prevState, platne: !prevState.platne }
    })
  }
  const updateNePlatne = function () {
    setToggleViewMode(prevState => {
      return { ...prevState, neplatne: !prevState.neplatne }
    })
  }
  const updateRawDate = function () {
    setToggleViewMode(prevState => {
      return { ...prevState, rawData: !prevState.rawData }
    })
  }

  return (
    <div className='hidden w-full border-0  border-cyan-900	p-0 overflow-y-auto md:block'>
      <div className='w-full border-0 border-rose-300'>

        <div className='w-full border-0 border-rose-300 overflow-y-auto'>
          <table className='w-full'>
            <tr>
              <td className='text-left pl-2 border-0 text-xl'>
                <h1 className={`${lusitana.className} text-xl`}>Obchodní rejstřík </h1>
              </td>
              <td className='text-right pr-2 border-0'>


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
                  <span className="hidden md:block">PLATNÉ</span>{' '}

                </button>
              </td><td className='text-left pl-2 border-0'>

                <button
                  className={
                    clsx(
                      " hidden md:block h-10 items-center rounded-lg bg-gray-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      , {
                        'bg-lime-500': toggleViewMode.neplatne
                      }

                    )
                  }
                  onClick={updateNePlatne}
                >
                  <span className="hidden md:block">NEPLATNÉ</span>{' '}

                </button>

              </td>

            </tr>
          </table>



          <MyIf showWhen={toggleViewMode.platne}>
            <ORTable data={data} _status={"ANO"}></ORTable>
          </MyIf>
          <MyIf showWhen={toggleViewMode.neplatne}>
            <ORTable data={data} _status={"NE"}></ORTable>
          </MyIf>
        </div>

      </div>


    </div>
  );

}

