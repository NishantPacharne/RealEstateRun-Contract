import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "RealEstateRun LOT1";
  export const SYMBOL: string = "RER1";
  export const MINT_PRICE: u64 = 3000000000000;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 250;
  export const URI: string = "https://stingy-silver-mule.myfilebase.com/ipfs/QmUXiyHLAZk7ziavKuh1yqmYWWKWEJKNRFfNSGMe7TnQhV/";
  export const OWNER: Uint8Array = Base58.decode("1NPvJuEDhjLuW3VbGqAQe4MdSWSB3YWxK1");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("18JRrBdnNqQ99faV6sn6Un1MbvU5sZWgzf");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1CounterpartyXXXXXXXXXXXXXXXUWLpVr");
}