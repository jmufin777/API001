import { unstable_noStore as noStore } from 'next/cache';
import { headers } from 'next/headers'

export async function fetchIco(ico: string) {
    noStore();
    let cislo = (Math.floor(Math.random() * 19700));
    if (ico.length < 8) {
        return undefined;
    }
    if (ico.match(/[a-z]/)) {
      return fetchFirmy(ico);  
    }
    //
    const _myurl = `https://resvm1.issupport.cz/api/ares.php?type=I&par=${encodeURIComponent(ico)}&restype=json&x=${cislo}`;
    //const _myurl = `https://resvm1.issupport.cz/api/ares.php`;
    //const data = {            par:"a",            XXXXXXX : "NICCCCCCC",  "Cisla":879255  }
        //body: JSON.stringify(data),
    const res = await fetch(_myurl, {
        method: "GET",
        headers: {
            'content-type': 'application/json',
        },
    
        
    }
    );
    //console.log("ico: ", ico, " ",_myurl );
//    console.log("aaaa :" , cislo );
    
    if (!res.ok) return undefined;
    return res.json();
}

export async function fetchFirmy(query: string) {
    noStore();
    let cislo = (Math.floor(Math.random() * 19700));
    //console.log(process.env.AUTH_SECRET);

    const _myurl = `https://resvm1.issupport.cz/api/ares.php?TEXTQUERY=${encodeURIComponent(query)}`;
    const res = await fetch(_myurl);
    //console.log(res);
    //console.log(_myurl);


//    console.log("aaaa :" , cislo );
    
    if (!res.ok) return undefined;
    return res.json();
}


export async function fetchJa(query: string) {
    //noStore();
    let cislo = (Math.floor(Math.random() * 19700));
    const _myurl = `https://resvm1.issupport.cz/api/ares.php?GetUser=${encodeURIComponent(query)}`;
    
    const res = await fetch(_myurl);
    //console.log(res.DATA);
    //console.log(query);

//    console.log("aaaa :" , cislo );
    
    if (!res.ok) return undefined;
    return res.json();
}
