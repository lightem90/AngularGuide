import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  //injected directly in accountservice
  constructor(
    //private loggingService: LoggingService,
    private accountService: AccountService) {
      this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status));
    }

  //injected directly in accountservice
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChanged(accountStatus);
  }
}
