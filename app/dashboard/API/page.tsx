import { redirect } from 'next/navigation'
import { fetchFirmy, fetchIco } from '@/app/lib/API/data'
import Search from '@/app/ui/search8';
import AresTable from '@/app/ui/API/tableAres';
import DSTable from '@/app/ui/API/tableDS';
import RAWDATA from '@/app/ui/API/tableRawData';
import FirmyTable from '@/app/ui/API/tableFirmy';

import { lusitana } from '@/app/ui/fonts';
import JsonNice from '@/app/ui/API/jsonnice'

import React, { Suspense } from 'react';
///import React, { Component } from 'react';

import { fetchInvoicesPages } from '@/app/lib/data';
import Text from '@/app/ui/Test/text.js'


import { ORPlatne } from '@/app/ui/API/buttons';
import MyIf from '@/app/ui/myIf';
//import { json } from 'stream/consumers';


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string,
    page?: string,
    what?: string,
  };
}) {

  const query = searchParams?.query || '';


  //const myfirmy = await fetchFirmy(query);

  let showFirmy = false;
  let showIco = false;

  const apiGet = {
    data: {
      POCET: 0,
      REC: [],
    },
  }
  //let myapi = xmyapi;
  const myapi = {
    ARES: [],
    OR: {
      REG: {
        datumZapisu: '',
        soud: '',
        oddil: '',
        vlozka: '',
      },
      CLENSTVI: [],
    },
    ZEM: [],
    ADR: [],
    DS: [],
    INPUT: [],
  };

  //return (<>{process.env.AUTH_SECRET}</>);

  if (query.match(/[0-9]{8,8}/)) {
    const xmyapi = await fetchIco(query);
    //return (<>{JsonNice(xmyapi)}</>);
    myapi.ARES = xmyapi.ARES;
    myapi.OR = xmyapi.OR;
    myapi.DS = xmyapi.DS;
    myapi.ZEM = xmyapi.ZEM;
    myapi.INPUT = xmyapi.INPUT;
    showIco = true;
  }

  if (query.match(/[a-z]/)) {
    apiGet.data = await fetchFirmy(query);

    if (apiGet.data.POCET == 0) {
      apiGet.data = await fetchFirmy(query);
    }

    if (apiGet.data.POCET > 0) {
      //console.log("DATA", apiGet.data);
      showFirmy = true;
      myapi.DS = apiGet.data.REC;
    }

  }
  //  return (<>{JsonNice(apiGet)}{JsonNice(xmyapi)} </>);


  if (apiGet.data.POCET == 0) {


  }





  //return (<>{JsonNice(myapi)}{apiGet.data.POCET}</>);


  //  let neco = JSON.stringify(myapi, null, '\t');



  const ARES = myapi.ARES;
  const ADRESA = myapi.ADR;
  const ds = myapi.DS;
  const showTable = myapi.hasOwnProperty("ARES") && myapi.ARES.hasOwnProperty("ico");

  const showData = {
    zem: showTable && myapi.ZEM.hasOwnProperty("STATUS"),
    or: showTable && myapi.OR.hasOwnProperty("REG") && myapi.OR.hasOwnProperty("CLENSTVI"),
    ds: showTable && myapi.DS.length > 0,
    adr: showTable && myapi.ADR.hasOwnProperty("obec"),
  }
  if (!showData.or) {


    //return (<>{JSON.stringify(showData)} a {      JSON.stringify(myapi)}    </>)
  }



  //showData.ds = true;
  //console.log(showData.ds);
  //return (<>jarda</>);


  if (showData.or) {

    const filtered = myapi.OR.CLENSTVI.filter((pole: any) => {

      if (pole == null) {
        return false;
      }

      return pole.STATUS === 'ANO' || 'NE';

    });

    myapi.OR.CLENSTVI = filtered;





    //let  myj2 = Omit<myapi.ARES, "nazev">;
    //console.log(myapi.ARES.omit("nazev"));



  }
  const nic = false;

  //console.log("DELKA", Object.keys(myapi).length, Object.keys(myapi), myapi.hasOwnProperty("ARES"), myapi.ARES.hasOwnProperty("ico") , showData, "  ",myapi.DS.length);


  return (
    <div className="w-full border-0">
      <div className="flex w-full items-center justify-between ">
        <h1 className={`${lusitana.className} text-xl`}>API</h1>
        <p className="hidden lg:flex" title='Diakritika muže být nahrazena pomoci tecek '>Zadejte ICO nebo výraz s diakritikou (5 znaku a vice)</p>
        <Text />
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Vyhledavani..." />
      </div>
      <MyIf showWhen={!showFirmy} >
        <div className="w-full   items-center justify-between  border-0 text-center  py-4 hidden md:block">
          <div className="w-full items-center justify-between  border-0 text-ellipsis overflow-elipsis text-xl">
            <h1 className={`${lusitana.className} text-1xl`}>ARES</h1>
          </div>
          <div className="flex w-full items-center justify-between  border-0 text-ellipsis overflow-elipsis">
            <AresTable data={myapi} />
          </div>
        </div>
      </MyIf>
      <MyIf showWhen={showData.ds}>
        <div className="w-full items-center justify-between  border-0 text-center  py-4 text-xl hidden md:block">
          <h1 className={`${lusitana.className} text-1xl`}>Datové schránky</h1>
        </div>
        <div className="flex w-full items-center justify-between  border-0 text-ellipsis overflow-elipsis">

          <DSTable data={ds} />
        </div>
      </MyIf>
      <MyIf showWhen={showFirmy}>
        <div className="w-full items-center justify-between  border-0 text-center  py-4 text-xl">
          <h1 className={`${lusitana.className} text-1xl`}>Nalezené subjekty : {(apiGet.data.POCET) >= 100 ? apiGet.data.POCET + "+! Upřesněte" : apiGet.data.POCET}</h1>
        </div>
        <div className="flex w-full items-center justify-between  border-0 text-ellipsis overflow-elipsis">

          <FirmyTable data={ds} />
        </div>
      </MyIf>
      <MyIf showWhen={showData.or}>
        {/* <div className="w-full items-center justify-between  border text-center  py-4 overflow-auto"> */}
        <div className='w-full border-t-1 mt-2 	p-2 overflow-y-auto'>
          <ORPlatne data={myapi.OR.CLENSTVI} />
        </div>
      </MyIf>





      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <MyIf showWhen={showTable}>
          <RAWDATA myapi={myapi} showData={showData} />
        </MyIf>








      </div>





      <div className="mt-5 flex w-full justify-center">




      </div>
    </div >


  )
}