import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default function Ticket(props: { title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; para: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }){
    return(
        <div className=" ">
  <div className="bg-purple-700 text-white lg:w-72 lg:h-80 h-60 lg:rounded-md rounded-sm flex flex-col justify-center items-start text-start px-4">
    <h1 className="font-bold font-serif mb-3">{props.title}</h1>
    <p>{props.para}</p>
  </div>
</div>

      
    );
}