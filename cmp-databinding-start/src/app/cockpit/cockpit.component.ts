import { 
  Component, 
  OnInit, 
  Output, 
  EventEmitter, 
  ViewChild, 
  ElementRef, 
  OnChanges, 
  SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, OnChanges {
  @Output('sCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { 
    console.log('constructor called!')
  }

  ngOnInit() {
    console.log('ngOnInit called!')
  }

  ngOnChanges(changes : SimpleChanges)  {
    console.log('ngOnChanges called!')
    console.log(changes)
  }

  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value})
  }
}
