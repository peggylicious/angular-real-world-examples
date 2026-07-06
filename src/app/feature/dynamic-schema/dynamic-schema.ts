import { Component, computed, signal } from '@angular/core';
import { form, FormField, required, schema, SchemaPath } from '@angular/forms/signals';
import { User } from '../../models/user';


@Component({
  selector: 'app-dynamic-schema',
  imports: [FormField],
  templateUrl: './dynamic-schema.html',
  styleUrl: './dynamic-schema.scss',
})
export class DynamicSchema {
  userModel = signal<User>({
    email: 'test@test.com',
    phone: '0123456789',
    password: '1234567890',
  });

  userSchemax = schema<User>((path) => {
    required(path.email);
    required(path.phone);
    required(path.password);
  });

  userSchema = computed(() => {
    return this.userSchemax;
  });
  userForm = form<User>(this.userModel, this.userSchema());
}
