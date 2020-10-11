export class Customers {
    Result: Result[];
    SubResult?: any;
    ResultStatus: number;
    UniqueID: number;
    DetailID: number;
    Message: string;
    ProcessTime: string;
    StatusCode: number;
}

export class Result {
    ID: number;
    ClientID: number;
    CustomerName: string;
    Individual: boolean;
    TaxNumber: string;
    TaxOffcie: string;
    Address: string;
    Deleted: boolean;
    TotalDebit: number;
    TotalCredit: number;
    Balance: number;
    Email: string;
}

