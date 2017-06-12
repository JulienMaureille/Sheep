/**
 * Created by alexh on 12/06/2017.
 */


export class CurrentThreadModel {
  private static currentThread = 139;
  private static _olderPages  = false;


  public switchThread(thread: number) {
    CurrentThreadModel.currentThread = thread;
    CurrentThreadModel._olderPages = false;
  }

  public getMessagesRoute() : string {
    return CurrentThreadModel.currentThread + "/messages";
  }

  public getId() {
    return CurrentThreadModel.currentThread;
  }


  public getOlderPages(){
    CurrentThreadModel._olderPages = true;
  }


  static get olderPages(): boolean {
    return this._olderPages;
  }
}
