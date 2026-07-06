import { CreateAccountReq, userAccount } from '../models/account';

export function formToRequest( form: userAccount ): CreateAccountReq {
  if (form.account.type === 'individual') {
    return {
      accountType: 'individual',
      firstName: form.account.individual.firstName,
      lastName: form.account.individual.lastName,
    }
  }
  return {
    accountType: 'business',
    companyName: form.account.business.companyName,
    taxId: form.account.business.taxId,
    registrationNumber: form.account.business.registrationNumber,
  }
}
