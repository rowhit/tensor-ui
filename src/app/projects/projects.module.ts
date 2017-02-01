import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavModule } from '../shared/topnav/topnav.module';
import { ProjectsComponent } from './projects.component';
import {  } from './projects-table';

import { BreadcrumbModule, BreadcrumbService } from '../shared/breadcrumb/breadcrumb.module'

@NgModule({
    imports: [
        TopNavModule,
        RouterModule,
        BreadcrumbModule
    ],
    declarations: [
        ProjectsComponent
    ],
    providers: [
        BreadcrumbService
    ]
})
export class ProjectsModule {}