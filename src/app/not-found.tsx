import { gql } from "@apollo/client";
import Link from "next/link"
import { client } from "./lib/apollo-client";

interface NotFoundData {
    notFoundText: string;
    notFoundTitle: string;
    notFoundTopText: string;
}

export const NOT_FOUND_QUERY = gql`
    query NotFoundData {
        themeoptions {
        globaldata {
                notFoundText
                notFoundTitle
                notFoundTopText
            }
        }
    }
`;

export default async function NotFound() {
    const { data } = await client.query<{ themeoptions: { globaldata: NotFoundData } }>({
        query: NOT_FOUND_QUERY,
    });

    const { notFoundText, notFoundTitle, notFoundTopText } = data?.themeoptions?.globaldata ?? {};

    return (
        <>
            <div className="flex items-center justify-center py-20 min-h-[60vh]">
                <div className="container">
                    <div className="text-center space-y-5">

                        {notFoundTopText &&
                            <div className="text-7xl lg:text-9xl font-bold">{notFoundTopText}</div>
                        }
                        {notFoundTitle &&
                            <h1 className="uppercase">{notFoundTitle}</h1>
                        }
                        {notFoundText &&
                            <p className="p2 pb-4">{notFoundText}</p>
                        }
                        <Link href={'/'} className="block md:inline-block mx-auto bg-theme-blue text-white hover:bg-theme-dark font-semibold px-6 py-3 md:py-4 rounded-lg whitespace-nowrap border-none uppercase text-sm md:text-base">Back TO Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
