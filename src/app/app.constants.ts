 export class Constants {
 requestCount:number = 0;

 private static _instance:Constants = new Constants();

 constructor() {
        if(Constants._instance){
            throw new Error("Error: Instantiation failed: Use Constants.getInstance() instead of new.");
        }
        Constants._instance = this;
    }

    public static getInstance():Constants
    {
        return Constants._instance;
    } 
}