export interface userAccount {
  account: {
    type: 'individual' | 'business';
    individual: {
      firstName: string;
      lastName: string;
    },
    business: {
      companyName: string;
      taxId: string;
      registrationNumber: string;
    }
  }
}

export interface CreateAccountReq {
  accountType: 'individual' | 'business';
  firstName?: string;
  lastName?: string;
  companyName?: string;
  taxId?: string;
  registrationNumber?: string;
}
export interface CreateAccountResponse {
  ok: boolean;
  message: string;
}
