import { Service } from '@angular/core';
import { CreateAccountReq, CreateAccountResponse } from '../models/account';

@Service()
export class Account {
  async createAccount(request: CreateAccountReq): Promise<CreateAccountResponse> {
    // Simulate a network request.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Request sent to backend:', request);
    return {
      ok: true,
      message: 'Account created successfully',
    };
  }
}

