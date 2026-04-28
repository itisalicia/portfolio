import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { Button } from "../button/button";

@Component({
    selector: 'app-mobile-button',
    standalone: true,
    imports: [RouterLink, TranslateModule, Button],
    templateUrl: './mobileButton.html',
    styleUrls: ['./mobileButton.css']
})

export class MobileButton {
    isOpen = false;

    toggleMenu(): void {
        this.isOpen = !this.isOpen;
    }
}