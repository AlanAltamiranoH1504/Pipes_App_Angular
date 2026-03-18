import { Routes } from '@angular/router';
import { BasicPage } from './pages/basic-page/basic-page';
import { NumbersPage } from './pages/numbers-page/numbers-page';
import { CustomPage } from './pages/custom-page/custom-page';
import { UncommonPage } from './pages/uncommon-page/uncommon-page';

export const routes: Routes = [
    {path: "basic", title: "Pipes basicos", component: BasicPage},
    {path: "numbers", title: "Pipes Numericos", component: NumbersPage},
    {path: "custom", title: "Pipes Personalizados", component: CustomPage},
    {path: "uncommon", title: "Pipes No Comunes", component: UncommonPage},
    {path: "**", redirectTo: "basic"}
];
