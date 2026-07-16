import { Component, computed, inject, signal } from '@angular/core';
import { form, FormField, hidden, required, schema, submit } from '@angular/forms/signals';
import { userAccount } from '../../models/account';
import { formToRequest } from '../../helpers/convert-to-api.model';
import { Account } from '../../services/account';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-form-fields-validation',
  imports: [FormField, JsonPipe],
  templateUrl: './dynamic-form-fields-validation.html',
  styleUrl: './dynamic-form-fields-validation.scss',
})
export class DynamicFormFieldsValidation {
  private fakeBackendService = inject(Account);
  private accountModel = signal<userAccount>({
    account: {
      type: 'individual',
      individual: {
        firstName: '',
        lastName: '',
      },
      business: {
        companyName: '',
        taxId: '',
        registrationNumber: '',
      },
    },
  });
  private accountTypeSchema = schema<userAccount>((user) => {
    // Hide individual account when user selects business.
    hidden(user.account.individual, {
      when: ({ valueOf }) => valueOf(user.account.type) === 'business',
    });
    // Hide business account when user selects individual.
    hidden(user.account.business, {
      when: ({ valueOf }) => valueOf(user.account.type) === 'individual',
    });
    required(user.account.individual.firstName);
    required(user.account.business.registrationNumber);
  });
  public registrationForm = form<userAccount>(this.accountModel, this.accountTypeSchema);

  protected readonly isIndividualVisible = computed(() => !this.registrationForm.account.individual().hidden());
  protected readonly isBusinessVisible = computed(() => !this.registrationForm.account.business().hidden());

  async onSubmit(event: Event) {
    event.preventDefault();
    // Show Loader/spinner

    const success = await submit(this.registrationForm, async (field) => {
      const backendModel = formToRequest(field().value());
      const result = await this.fakeBackendService.createAccount(backendModel);
      if (result.ok) return;
      return { kind: 'serverError', message: 'Failed to save' };
    });
    if (success) {
      // Handle success — navigate, show confirmation, etc.
      console.log("Account details submitted Successfully ...")
    }else{
      console.log("Unable to submit data ...")
    }
  }
}
