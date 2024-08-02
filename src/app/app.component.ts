import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, ReactiveFormsModule, NgxPaginationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Crud-state';

  payload = {};
  detailList: any = [];
  formGroup: FormGroup;
  ModalTitle = "Add Details";
  page_no = 1;

  constructor(private dataService: DataService, private fb: FormBuilder, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getData();

    this.init();
  }

  init() {
    this.formGroup = this.fb.group({
      id: 0,
      name: ''
    })
  }

  getData() {
    // from Database;
    // this.dataService.GetDatabaseData(this.payload).subscribe((response: any) => {
    //   this.detailList = response;
    //    this.toastrService.success("Success!");
    // })
    // From Local Data
    this.detailList = this.dataService.getData();
    this.toastrService.success("Record Fetched");
  }

  deleteData(data: any) {
    // fromDatabase
    // this.dataService.DeleteDatabaseData(data).subscribe((response: any) => {
    //   this.getData();
    // })
    // From Local Data
    this.detailList = this.dataService.removeData(data);
    this.toastrService.success("Record Deleted SuccessFully!");
  }

  saveData() {
    const payload = {
      ...this.formGroup.value
    }
    if (payload.id == 0) {
      // addApi
      // FromDatabase
      // this.dataService.AddDatabaseData(payload).subscribe((response: any) => {
      //   this.getData();
      // })
      // From Local Details
      this.detailList = this.dataService.addDetails(payload);
      this.toastrService.success("record Added Successfully!");
    }
    else {
      // updateApi
      // From Database
      // this.dataService.UpdateDatabaseData(payload).subscribe((response: any) => {
      //   this.getData();
      // })
      this.detailList = this.dataService.updateRecord(payload);
      this.toastrService.success("Record Updated Successfully!");

    }
  }

  updateData(payload: any) {
    this.ModalTitle = "UpdateDetails";
    this.formGroup.patchValue({
      id: payload.id,
      name: payload.name,
    });
  }

  addNewRecord() {
    // this.formGroup.reset();
    this.ModalTitle = "Add Details";
  }

  close() {
    this.formGroup.reset();
  }

  pageChanged(event: number) {
    this.page_no = event;
  }
}
