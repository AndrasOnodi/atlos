/*
* File: app.ts
* Author: Ónodi András
* Copyright: 2024,Ónodi András
* Group: Szoft I-2-N
* Date: 2024-05-30
* Github: https://github.com/AndrasOnodi/
* Licenc: GNU GPL
*/

class Atlos {
    aValue?: HTMLInputElement | null;
    bValue?: HTMLInputElement | null;
    atlo?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;
    constructor() {
        this.bindHTML();
        this.handleEvent();
    }
    bindHTML() {
        this.aValue = document.querySelector('#aValue');
        this.bValue = document.querySelector('#bValue');
        this.atlo = document.querySelector('#atlo');
        this.calcButton = document.querySelector('#calcButton');
    }
    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }
    startCalc() {
        const aValue = Number(this.aValue?.value);
        const bValue = Number(this.bValue?.value);
        const atlo = this.calcAtlo(aValue, bValue);
        this.atlo!.value = String(atlo);
    }
    calcAtlo(aValue: number, bValue: number):number {
        return (aValue**2 + bValue**2)**0.5
    }
}

new Atlos();