import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgbDropdownModule,NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbDropdownModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    NgbNavModule,
    NgxGalleryModule,
    FileUploadModule,
  ],
  exports: [
    NgbDropdownModule,
    ToastrModule,
    NgbNavModule,
    NgxGalleryModule,
    FileUploadModule
  ]
})
export class SharedModule { }
