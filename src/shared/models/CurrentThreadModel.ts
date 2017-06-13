/**
 * Created by alexh on 12/06/2017.
 */


export class CurrentThreadModel {
  private static currentThread = 139;
  private static olderPages = 0;


  public switchThread(thread: number) {
    CurrentThreadModel.currentThread = thread;
    CurrentThreadModel.olderPages = 0;
  }

  public getMessagesRoute(): string {
    return CurrentThreadModel.currentThread + "/messages" + ((CurrentThreadModel.olderPages == 0) ? "" : ("?pages=" + CurrentThreadModel.olderPages));
  }

  public getId() {
    return CurrentThreadModel.currentThread;
  }


  public getOlderPages() {
    CurrentThreadModel.olderPages += 1;
  }

}
