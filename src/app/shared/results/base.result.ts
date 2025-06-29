export interface BaseResult{
        isSuccess:boolean;
        code:number;
        message:string;
        returnUrl:string;
        errors:ErrorResult[];
}

export interface ErrorResult{
        code: number;
        description: string;
        descriptionAr: string;
        isoCode: string;
}

