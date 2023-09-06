
import RowList from "../rowList/Rowlist";
import { GetDataContractors } from "../../app/graaphql";

export default async function GridContractos() {
    const dataResult = await GetDataContractors();
    return (
        <ul>
            {dataResult.map((data: any, i: number) => {
                // const { name, specialities, day_rate, availability } = data;
                return (
                    <RowList
                        key={i}
                        data={data}
                    ></RowList>)

            })}

        </ul>

    )

}