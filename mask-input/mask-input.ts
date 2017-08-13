import { Directive, Input, ElementRef, } from '@angular/core';

/**
 * Generated class for the MaskInputDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
    host: {
        '(keyup)': 'onKeyUp($event)',
    },
    selector: '[mask-input]' // Attribute selector
})
export class MaskInputDirective {
    @Input('mask-input') mask: any;

    constructor(el: ElementRef) {
    }

    onKeyUp(event) {
        let val = MaskInputDirective.masked(event.target.value, this.mask.mask);
        event.target.value = val;
        event.preventDefault();
    }

    /**
     * Check mask
     * @param value
     * @param mask
     * @returns {string}
     */
    static masked(value: string, mask: Array<any>){
        let newValue: string = '';

        for(let index = 0; index < mask.length; index++) {
            if (mask && mask[index]) {
                if (typeof mask[index] === "object") {
                    //is mask for index symbol - regular expression - check it
                    if(value[index]) {
                        let reMask = new RegExp(mask[index]);
                        if (reMask.test(value[index])) {
                            //valid symbol
                            newValue += value[index];
                        }
                        else {
                            //non valid symbol
                            break;
                        }
                    }
                    else{
                        break;
                    }
                }
                else {
                    newValue += mask[index];
                }
            }
        }
        return newValue;
    }
}
