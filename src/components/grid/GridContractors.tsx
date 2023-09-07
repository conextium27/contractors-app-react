import RowList from "../rowList/Rowlist";
import { GetDataContractors } from "../../../graaphql";

export default async function GridContractos() {
    const dataResult = await GetDataContractors();
    return (
        <ul>
            {dataResult.map((data: any, i:number) => {
                            const { fullname, specialities, dayrate, availability } = data;
                            return (
                                <RowList 
                                    key={i}
                                    unique={fullname}
                                    fullname={fullname}
                                    specialities={specialities}
                                    dayrate={dayrate}
                                    availability={availability ? 'Yes' : 'No'}
                                ></RowList>)
  
                        })}
        </ul>
    )
}