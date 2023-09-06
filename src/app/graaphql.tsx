import { gql } from "@apollo/client";
import client from "../../apollo-client";

export async function GetDataContractors() {

    const { data: { contractors } }: any = await client.query({
        query: gql`
      {
        contractors {
            data {
                attributes {
                    name
                    specialities
                    day_rate
                    availability
                }
            }
        }
      }
          `,
    });
    return contractors.data.map((value: any) => {

        const res = { ...value.attributes };

        return res;
    });
}