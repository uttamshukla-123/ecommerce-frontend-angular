import { FormControl, ValidationErrors } from "@angular/forms";

export class CheckoutValidators {

    //whitespace validation
    static notOnlyWhiteSpace(control:FormControl):ValidationErrors{
        
        //check string only contains whitespae
        if(control.value!=null&& (control.value.trim()===0)){

            //invalid return error object
            return {'notOnlyWhiteSpace':true};
        }
        else{
            //valid ,return null
            return null;
        }
    }
}
