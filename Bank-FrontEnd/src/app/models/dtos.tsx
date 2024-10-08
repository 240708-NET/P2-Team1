 export interface Account{
    AccountId: number,
    Balance: number,
    AccountType: string,
    PrimaryUserId: number,
    Users: User[],
 }

 export interface User{
    UserId?: number,
    Username: string,
    Password?: string,
    Name?: string,
    Accounts?: Account[],
   //  ImageUrl: string,
 }

 
export interface Userd {
   userId:number,
   username:string,
   password:string,
   name: string,
   accounts: Account[],
}

 export interface Transaction{
    TransactionId: number,
    FromAccount: Account,
    ToAccount?: Account,
    Amount: number,
    Time: Date
 }

