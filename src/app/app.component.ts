import { Component, Input } from "@angular/core";
import { MessageService } from "primeng/api";
import { delay } from "rxjs";
import { LoadingService } from "./service/loading.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
 loading: boolean = true;

  constructor(private _loading: LoadingService ){ 
  }
  @Input() isArabicLang: boolean = true;

  ngOnInit() {
    this.listenToLoading();
  }

  
  show() {
    //debugger;
    // setTimeout(() => {
    //   this.messageService.add({ severity: 'error', summary: 'danger', detail: 'Message Content' });

    // }, 1000);
  }



  showeError() {
  }
  /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   */
  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
