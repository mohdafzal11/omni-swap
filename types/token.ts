export interface Chain {
    name: string;
    symbol: string;
    logo?: string;
    chainId: number;
}

export interface Token {
  name : string;
  symbol: string;
  logo ?: string;
  address?: string;
  decimals?: number;
};

export interface SelectedToken {
  name: string;
  symbol: string;
  logo ?: string;
  address?: string;
  decimals?: number;
  amount?: string;
}

export interface Balance {
  symbol: string;
  balance: string;
}