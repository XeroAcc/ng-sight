import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionServicesComponent } from '../sections/section-services/section-services.component';
import { SectionHistoryComponent } from '../sections/section-history/section-history.component';
import { SectionSystemComponent } from '../sections/section-system/section-system.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChart2Component } from './charts/bar-chart2/bar-chart2.component';
import { PieChart2Component } from './charts/pie-chart2/pie-chart2.component';
import { ServerComponent } from './server/server.component';

import { ServicesDataService } from './services/services-data.service';
import { ServerService } from './services/server.service';

import { appRoutes } from '../routes';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionServicesComponent,
    SectionHistoryComponent,
    SectionSystemComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    BarChart2Component,
    PieChart2Component,
    ServerComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    HttpModule
  ],
  providers: [
    ServicesDataService,
    ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
