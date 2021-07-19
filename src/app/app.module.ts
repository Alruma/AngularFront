import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { NotesComponent } from './notes/notes.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OportunitiesComponent } from './oportunities/oportunities.component';
import { SectionColumnComponent } from './section-column/section-column.component';
import { SectionRowComponent } from './section-row/section-row.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarButtonComponent } from './navbar-button/navbar-button.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    ProfileSectionComponent,
    NotesComponent,
    ContactsComponent,
    OportunitiesComponent,
    SectionColumnComponent,
    SectionRowComponent,
    NavbarComponent,
    NavbarButtonComponent,
    PrimaryButtonComponent,
    ActivitiesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
