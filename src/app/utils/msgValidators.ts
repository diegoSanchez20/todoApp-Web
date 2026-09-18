import { FormGroup } from "@angular/forms";

export abstract class MsgValidators{
    static msgErrorPassword(formControl:FormGroup, control: string) {

        const errors = formControl.get(control)?.errors;

        if(errors?.['required']) return 'Ingrese la contraseña.'
        else if(errors?.['minlength']) return 'La contraseña debe terner más de 8 caracteres.'
        return '';

    };
    static msgErrorEmail(formControl:FormGroup, control: string) {

        const errors = formControl.get(control)?.errors;

        if(errors?.['required']) return 'Ingrese el email.'
        else if(errors?.['email']) return 'El email no es válido.'
        return '';

    };
}