import Script from 'next/script'
import { prettyPrintJson } from 'pretty-print-json';

export default function JsonNice(data: any) {
    type FormatOptions = {
        indent?: number,   //number of spaces for indentation
        lineNumbers?: boolean,  //wrap HTML in an <ol> tag to support line numbers
        linkUrls?: boolean,  //create anchor tags for URLs
        linksNewTab?: boolean,  //add a target=_blank attribute setting to anchor tags
        quoteKeys?: boolean,  //always double quote key names
        trailingCommas?: boolean,  //append a comma after the last item in arrays and objects
    };

    const options: FormatOptions = {
        indent: 1,
        lineNumbers: false,
        linkUrls: true,
        linksNewTab: false,
        trailingCommas: true,
    };
    //const data2 = { active: true, mode: '🚃', codes: [48348, 28923, 39080], city: 'London' };
    //const style = "flex w-full items-center justify-between  border text-ellipsis overflow-y-auto h-32 overflow-x-scroll";
    const style = "flex w-full items-center justify-between  border text-ellipsis overflow-y-auto h-32 overflow-x-scroll float-none";

    const content = prettyPrintJson.toHtml(data, options)
    //let content0 = JSON.stringify(data);
    //let content = content0.replace(/",/g, '"\n');
    return (

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8  overflow-y-auto h-132 overflow-x-scroll min-w:96 ...">

            <pre dangerouslySetInnerHTML={{ __html: content }} >
            </pre>
        </div>


    )

}