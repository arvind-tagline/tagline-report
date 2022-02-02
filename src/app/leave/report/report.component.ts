import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  public myForm!: FormGroup;
  public button: boolean = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      clientName: '',
      projectName: '',
      completed: this.fb.array([new FormControl()]),
      progressTask: this.fb.array([new FormControl()]),
      pendingTask: this.fb.array([new FormControl()]),
      queries: this.fb.array([new FormControl()]),
      notes: this.fb.array([new FormControl()])
    })
  }

  ngOnInit(): void {
  }


  get completedData() {
    return this.myForm.get('completed') as FormArray;
  }
  public addCompletedTask() {
    this.button = true;
    this.completedData.push(new FormControl(''))
  }
  public removeCompletedTask(i: number) {
    this.completedData.removeAt(i)
  }

  get progressData() {
    return this.myForm.get('progressTask') as FormArray;
  }
  public addProgressTask() {
    this.progressData.push(new FormControl(''))
  }
  public removeProgressTask(i: number) {
    this.progressData.removeAt(i)
  }

  get pendingData() {
    return this.myForm.get('pendingTask') as FormArray;
  }
  public addPendingTask() {
    this.pendingData.push(new FormControl(''))
  }
  public removePendingTask(i: number) {
    this.pendingData.removeAt(i)
  }

  get queriesData() {
    return this.myForm.get('queries') as FormArray;
  }
  public addQueries() {
    this.queriesData.push(new FormControl(''))
  }
  public removeQueries(i: number) {
    this.queriesData.removeAt(i)
  }

  get noteData() {
    return this.myForm.get('notes') as FormArray;
  }
  public addNote() {
    this.noteData.push(new FormControl(''))
  }
  public removeNote(i: number) {
    this.noteData.removeAt(i)
  }


  public onSubmit() {
    console.log('this.myForm.value', this.myForm.value);
  }
}
